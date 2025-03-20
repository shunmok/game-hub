import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '0bc347fa988e413c86946c88e70f79b2'
  }

})