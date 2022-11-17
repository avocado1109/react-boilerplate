import { useState } from 'react'
import { useDispatch } from "react-redux"

import SignupComponent from '../components/Signup'

import agent from '../api/'

import {
  startAction,
  endAction
} from '../actions/common'

const Signup = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passconf, setPassconf] = useState('')
  const onSignup = async () => {
    console.log('signing up:', email, password, passconf)
    dispatch(startAction())
    const res = await agent.auth.register(email, password)
    dispatch(endAction())
  }
  return <SignupComponent email={email} password={password} passconf={passconf} setEmail={setEmail} setPassword={setPassword} setPassconf={setPassconf} onSignup={onSignup} />
}

export default Signup