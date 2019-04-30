import axios from 'axios'

axios
  .get('http://localhost:3004/get?name=233')
  .then(res => console.log(res.data))
axios
  .post('http://localhost:3004/post?name=233')
  .then(res => console.log(res.data))
axios
  .put('http://localhost:3004/put?name=233')
  .then(res => console.log(res.data))
axios
  .delete('http://localhost:3004/del?name=233')
  .then(res => console.log(res.data))
