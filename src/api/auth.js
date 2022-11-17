import axios from 'axios'

import { API_URL } from '../constants/'

const authApi = {
  login: (email, password) => axios.post(`${API_URL}/auth/login`, {
    email,
    password
  }),
  register: (email, password) => axios.post(`${API_URL}/auth/login`, {
    email,
    password
  })
}

export default authApi