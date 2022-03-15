import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'
import { useFormikContext } from 'formik'

import Screen from '../components/Screen'
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from '../components/forms/index'
import useApi from '../hooks/useApi'
import usersApi from '../api/users'
import authApi from '../api/auth'
import useAuth from '../auth/useAuth'
import ActivityIndicator from '../components/ActivityIndicator'
import routes from '../navigation/routes'
import AppButton from '../components/AppButton'

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
})
//{ navigation }
function RegisterScreen() {
  const registerApi = useApi(usersApi.register)
  const loginApi = useApi(authApi.login)
  const auth = useAuth()
  const [error, setError] = useState()

  // const startOnBoarding = () => navigation.navigate(routes.POTENTIAL_EQUIPMENTS)
  // const { testHandleSubmit } = useFormikContext()

  // const combined = () => {
  //   useFormikContext()
  //   startOnBoarding()
  // }

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo)
    // const result = await usersApi.register(userInfo)

    if (!result.ok) {
      if (result.data) setError(result.data.error)
      else {
        setError('An unexpected error occurred.')
        console.log(result)
      }
      return
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    )
    // const { data: authToken } = await authApi.login(
    //   userInfo.email,
    //   userInfo.password
    // )

    auth.logIn(authToken)
  }
  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />

      <Screen style={styles.container}>
        <AppForm
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <AppFormField
            autoCorrect={false}
            icon='account'
            name='name'
            placeholder='Must be at least 3 characters'
            inputName='Username'
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
            placeholder='Must be at least 5 characters'
            secureTextEntry
            textContentType='password'
            inputName='Password'
          />

          {/* <AppButton
            title='Sign Up'
            // onPress={() => navigation.navigate(routes.ASSURANCE)}
          /> */}

          {/* <AppButton
            title='Sign Up'
            onPress={testHandleSubmit && startOnBoarding()}
          /> */}
          <SubmitButton title='Sign Up' />
        </AppForm>
      </Screen>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})

export default RegisterScreen
