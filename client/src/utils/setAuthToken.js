import axios from 'axios';

const setAuthToken = (token) => {
  // if there is a token, set it
  // else delete it
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
