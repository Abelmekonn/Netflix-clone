import axios from  'axios';
const instance=axios.create({
    baseUrl:'https://www.themoviedb.org/',
});

export default instance;