import { useState } from 'react'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import LoginComponent from '../components/Login'

import agent from '../api/'
import {
  startAction,
  endAction
} from '../actions/common'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onLogin = async () => {
    dispatch(startAction())
    const res = await agent.auth.login(email, password)
    dispatch(endAction())
    if (res.data.token) {
      navigate("/")
    }
    else {

    }
    console.log('login res:', res)
  }
  return <LoginComponent email={email} password={password} setEmail={setEmail} setPassword={setPassword} onLogin={onLogin} />
}

export default Login