import axios from 'axios';

const URL = 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth';

export const postRegistration = ({ name, email }) => {
  return axios.post(URL, { name, email });
};