import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-d83d8.cloudfunctions.net/api' // THE API URL (cloud function)
});

export default instance;

//http://localhost:5001/clone-d83d8/us-central1/api