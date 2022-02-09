import React from 'react'
import { StyleSheet, Image } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import { AppForm, AppFormField, SubmitButton } from '../components/forms/index'

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
})

function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      {/* <Image source={require('../assets/logo-red.png')} style={styles.logo} /> */}
      <AppForm
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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
          placeholder='Must be at least 4 characters'
          secureTextEntry
          textContentType='password'
          inputName='Password'
        />

        <SubmitButton title='Sign Up' />
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

export default RegisterScreen
