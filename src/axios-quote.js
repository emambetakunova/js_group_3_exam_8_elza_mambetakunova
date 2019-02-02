import axios from 'axios';

const instance = axios.create({

    baseURL: 'https://collection-of-quotes-elza.firebaseio.com/'

});


export default instance;