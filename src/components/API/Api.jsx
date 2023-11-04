import axios from 'axios';

const API_KEY_1 = 'ef9672eaedc4c7a706bb2535d3c45cc4';
const URL_1 = 'https://api.themoviedb.org/3/';

export const getApi = async (apiTipe, dataSubmit) => {
  const response = await axios.get(
    `${URL_1}${apiTipe}?api_key=${API_KEY_1}${
      dataSubmit ? `&query=${dataSubmit}` : ''
    }&language=en-US`
  );
  // console.log(response);
  return response;
};

const API_KEY = '64c3db8d67cfdca3b6605f50';
const URL = `https://${API_KEY}.mockapi.io/OleksiiVTS/goit-react-hw-07-phonebook/car-rental`;

const url = new URL('https://PROJECT_TOKEN.mockapi.io/users/1/tasks');
url.searchParams.append('completed', false);
url.searchParams.append('page', 1);
url.searchParams.append('limit', 10);

fetch(url, {
  method: 'GET',
  headers: { 'content-type': 'application/json' },
})
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    // handle error
  })
  .then(tasks => {
    // mockapi returns first 10 tasks that are not completed
  })
  .catch(error => {
    // handle error
  });
