import axios from 'axios'

axios.get('http://localhost:3004/get').then(res => console.log(res.data))
axios.post('http://localhost:3004/post').then(res => console.log(res.data))
axios.put('http://localhost:3004/put').then(res => console.log(res.data))
axios.delete('http://localhost:3004/del').then(res => console.log(res.data))
