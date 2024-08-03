import React, {useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate} from 'react-router-dom'
import {
    Logo,
    LoginFormContainer,
    FormContainer,
    InputContainer,
    InputLabel,
    UsernameInput,
    PasswordInput,
    LoginButton,
    ErrorMsg,
    ToggleButton,
    ToggleContainer,
} from './styledComponents'

const LoginForm =() => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showSubmitError, setShowSubmitError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

    const onLoginSuccess = (jwtToken) => {
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      navigate('/', { replace: true })
    }

    const onLoginFailure = errorMsg=> {
      setShowSubmitError(true)
      setErrorMsg(errorMsg)
      console.log(errorMsg)
    }

    const onUsernameChange = event => {
        setUsername(event.target.value)
    }
    const onPasswordChange = event => {
      setPassword(event.target.value)
    }
    const setShowPass = () => {
      setShowPassword(prevState => !prevState)
    }
    const submitForm = async (event) => {
        event.preventDefault()
        const userDetails = {username, password}
        const loginUrl = "https://apis.ccbp.in/login"
        const options = {
          method: 'POST',
          body: JSON.stringify(userDetails)
        }
        const response = await fetch(loginUrl, options)
        const data = await response.json()
        console.log(data)

        if(response.ok === true) {
          onLoginSuccess(data.jwt_token)
        }else{
          onLoginFailure(data.error_msg)
        }
    }

    const renderUserName = ()=> {
        return(
            <>
            <InputLabel htmlFor='username'>USERNAME</InputLabel>
            <PasswordInput id="username" type="text" value={username} onChange={onUsernameChange}/>
            </>
        )
    }
    const renderPassword = ()=> {
        return(
            <>
            <InputLabel htmlFor='password'>PASSWORD</InputLabel>
            <UsernameInput id="password"
             type={showPassword ? 'text': 'password'} value={password} onChange={onPasswordChange}/>
            </>
        )
    }
    useEffect(() => {
      const jwtToken = Cookies.get('jwt_token')
        if (jwtToken !== undefined) {
          return navigate('/')
        }
    })
    
    return (
      <LoginFormContainer>
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
        <FormContainer onSubmit={submitForm}>
          <InputContainer>{renderUserName()}</InputContainer>
          <InputContainer>{renderPassword()}</InputContainer>
          <ToggleContainer>
            <ToggleButton htmlFor="check" type="checkbox" checked={showPassword} onChange={setShowPass}/>
            <InputLabel id="check">Show Password</InputLabel>
          </ToggleContainer>
          <LoginButton type="submit">
            Login
          </LoginButton>
          {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
        </FormContainer>
      </LoginFormContainer>
    )

}
export default LoginForm
