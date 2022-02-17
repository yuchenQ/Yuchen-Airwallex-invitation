import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form, Input, message as antdMessage } from 'antd';

const onSuccess = () => {
  Modal.success({
    content: <div>Great! We will notify you once we launch!</div>,
    centered: true,
  });
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};

const ModalForm = ({ onSubmitForm }) => {
  const [form] = Form.useForm();

  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const closeModal = () => setVisible(false);

  const [loading, setLoading] = useState(false);

  const onFinish = ({ name, email }) => {
    setLoading(true);

    onSubmitForm({ name, email })
      .then(() => {
        closeModal();
        onSuccess();
      })
      .catch(({ response, message }) => {
        antdMessage.error(response?.data?.errorMessage || message, 5);
      })
      .finally(() => {
        setLoading(false);
        form.resetFields();
      });
  };

  return (
    <>
      <Button type='primary' onClick={showModal}>
        Get invited now!
      </Button>
      <Modal
        centered
        title='Request an invite'
        visible={visible}
        onCancel={closeModal}
        footer={null}
        destroyOnClose
      >
        <Form
          form={form}
          labelCol={{ span: 6 }}
          validateMessages={validateMessages}
          onFinish={onFinish}
        >
          <Form.Item
            name='name'
            label='Full Name'
            rules={[
              {
                type: 'string',
                min: 5,
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='email'
            label='Email'
            rules={[
              {
                type: 'email',
                required: true,
              },
            ]}
          >
            <Input type='email' />
          </Form.Item>
          <Form.Item
            name='confirmEmail'
            label='Confirm Email'
            rules={[
              {
                type: 'email',
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('email') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error('The two emails that you entered do not match!')
                  );
                },
              }),
            ]}
          >
            <Input type='email' />
          </Form.Item>
          <Form.Item>
            <Button
              block
              type='primary'
              htmlType='submit'
              disabled={loading}
              loading={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

ModalForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export { ModalForm };
