import axios from 'axios'

export default async (id='', data, method) => {
  const endpoint = `/question/${id}`
  switch(method) {
    case 'post':
      return await axios.post(endpoint, data)
    case 'put':
      return await axios.put(endpoint, data)
    case 'delete':
      return await axios.delete(endpoint)
    default:
      return await axios.get(endpoint)
  }
  
}