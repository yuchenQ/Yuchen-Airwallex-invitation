import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ModalForm } from './ModalForm';

const renderAndShowModal = (onSubmitForm = () => Promise.resolve()) => {
  render(<ModalForm onSubmitForm={onSubmitForm} />);
  userEvent.click(screen.getByText('Get invited now!'));
};

describe('ModalForm', () => {
  test('happy pass', async () => {
    renderAndShowModal();

    const nameInput = screen.getByLabelText('Full Name');
    userEvent.type(nameInput, 'Yuchen qiao');

    const emailInput = screen.getByLabelText('Email');
    userEvent.type(emailInput, 'qiaoycitcareer@gmail.com');

    const confirmEmailInput = screen.getByLabelText('Confirm Email');
    userEvent.type(confirmEmailInput, 'qiaoycitcareer@gmail.com');

    userEvent.click(screen.getByText(/send/i));

    const success = await screen.findByText('Great! We will notify you once we launch!');
    expect(success).toBeInTheDocument();
  });

  describe('invalid input', () => {
    test('should alert for empty input', async () => {
      renderAndShowModal();
      userEvent.click(screen.getByText(/send/i));
      const alert = await screen.findByText(/is required!/i);
      expect(alert).toBeInTheDocument();
    });

    test('should alert for invalid name', async () => {
      renderAndShowModal();

      const nameInput = screen.getByLabelText(/full name/i);
      userEvent.type(nameInput, 'qiao');
      const alert = await screen.findByText(/must be at least 5 characters/i);
      expect(alert).toBeInTheDocument();
    });

    test('should alert for invalid email', async () => {
      renderAndShowModal();

      const emailInput = screen.getByLabelText('Email');
      userEvent.type(emailInput, 'abcdefghi');
      const alert = await screen.findByText(/is not a valid email!/i);
      expect(alert).toBeInTheDocument();
    });

    test('should alert for invalid confirm email', async () => {
      renderAndShowModal();

      const emailInput = screen.getByLabelText(/confirm email/i);
      userEvent.type(emailInput, 'abcdefghi');
      const alert = await screen.findByText(/is not a valid email!/i);
      expect(alert).toBeInTheDocument();
    });

    test('should alert when confirm email is different', async () => {
      renderAndShowModal();
    
      const emailInput = screen.getByLabelText('Email');
      userEvent.type(emailInput, 'qiaoycitcareer@gmail.com');
  
      const confirmEmailInput = screen.getByLabelText('Confirm Email');
      userEvent.type(confirmEmailInput, 'itcareer@gmail.com');
    
      const alert = await screen.findByText('The two emails that you entered do not match!');
      expect(alert).toBeInTheDocument();
    });
  });

  test('error when user is duplicated', async () => {
    const res = { message: 'error message' };
    renderAndShowModal(() => Promise.reject(res));

    const nameInput = screen.getByLabelText('Full Name');
    userEvent.type(nameInput, 'Duplicated User');

    const emailInput = screen.getByLabelText('Email');
    userEvent.type(emailInput, 'duplciatedUser@gmail.com');

    const confirmEmailInput = screen.getByLabelText('Confirm Email');
    userEvent.type(confirmEmailInput, 'duplciatedUser@gmail.com');

    userEvent.click(screen.getByText(/send/i));

    const errorMsg = await screen.findByText(res.message);
    expect(errorMsg).toBeInTheDocument();
  });
});
