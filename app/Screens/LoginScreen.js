import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from '../components/forms/index'
import authApi from '../api/auth'
import useAuth from '../auth/useAuth'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
})

function LoginScreen() {
  const auth = useAuth()

  const [loginFailed, setLoginFailed] = useState(false)

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password)
    if (!result.ok) return setLoginFailed(true)

    setLoginFailed(false)
    auth.logIn(result.data)
  }
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error='Invalid email and/or password.'
          visible={loginFailed}
        />
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='email'
          keyboardType='email-address'
          name='email'
          placeholder='test@fitness.com'
          textContentType='emailAddress'
          inputName='Email'
        />

        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          name='password'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
          inputName='Password'
        />

        <SubmitButton title='Login' />
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 50,
  },
})

export default LoginScreen
