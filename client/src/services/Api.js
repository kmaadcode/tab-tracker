import axios from 'axios'

const Sthg = () => {
  return axios.create({
    baseURL: 'http://localhost:8081/'
  })
}
export default Sthg
