import axios from 'axios';
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json'
  }
});


  api.interceptors.request.use(request => {    
    console.log("My Request "+ request);
    // Edit request config
    return request;
  }, error => {
    console.log( "My Request Error "+ error);
    
    return Promise.reject(error);
  });

  api.interceptors.response.use(response => {
    console.log("My Response " +response);
    // Edit request config
    return response;
  }, error => {
    console.log("My Response Error "+error);
    return Promise.reject(error);
  });


export default api;
