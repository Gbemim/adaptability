import React from 'react'
import { StyleSheet, View, ImageBackground, Text } from 'react-native'

import colors from '../config/colors.js'
import AppButton from '../components/AppButton.js'

const WelcomeScreen = ({ navigation }) => {
  return (
    // {/* Main background image */}
    <ImageBackground
      style={styles.background}
      source={require('../assets/wheels.jpg')}
    >
      <View style={styles.child}>
        {/* The title + tagline */}
        <View style={styles.taglineContainer}>
          <Text style={styles.tagline}>Exercise</Text>
          <Text style={styles.tagline}>anytime</Text>
          <Text style={styles.tagline}>anywhere</Text>
          <Text style={styles.tagline}>to reach</Text>
          <Text style={styles.tagline}>your goal</Text>
        </View>

        {/* Register and Login button */}
        <View style={styles.buttonsContainer}>
          <View style={styles.loginButton}>
            <AppButton
              title='login'
              background_color='none'
              onPress={() => navigation.navigate('Login')}
            />
          </View>
          <View style={styles.RegisterButton}>
            <AppButton
              title='Join Us'
              onPress={() => navigation.navigate('Register')}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  child: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
    marginTop: 150,
  },
  loginButton: {
    borderColor: colors.primary,
    borderWidth: 1,
    color: colors.primary,
    // borderRadius: 25,
  },
  RegisterButton: {
    marginTop: 30,
  },
  taglineContainer: {
    marginTop: 50,
  },
  tagline: {
    fontWeight: 'bold',
    fontSize: 45,
    color: colors.primary,
    textAlign: 'right',
    top: 100,
    marginLeft: 184,
    marginBottom: 10,
    backgroundColor: colors.black,
  },
})
export default WelcomeScreen
