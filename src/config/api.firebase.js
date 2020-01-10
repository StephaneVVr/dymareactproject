import * as axios from 'axios';

const apiFirebaseUrl = process.env.REACT_APP_API_FIREBASE;

const apiFirebase = axios.create({
  baseURL: apiFirebaseUrl
});

export default apiFirebase;