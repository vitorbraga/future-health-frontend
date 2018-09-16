import axios from 'axios';

const HOST = 'http://localhost:8080';

const authenticate = ({ email, password }, entity) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${HOST}/authentication/login/${entity}`, {
        email,
        password
      })
      .then(function(response) {
        resolve(response);
      })
      .catch(function(error) {
        reject(error);
      });
  });

export default authenticate;
