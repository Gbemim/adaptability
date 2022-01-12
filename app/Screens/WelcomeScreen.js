import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Dimensions,
} from 'react-native'
import { BlurView } from 'expo-blur'
import Video from 'react-native-video'
import * as VideoThumbnails from 'expo-video-thumbnails'

import colors from '../config/color.js'
import AppButton from '../components/AppButton.js'
import { borderRightColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Main background image */}

      <BlurView>
        <ImageBackground
          style={{
            width: '100%',
            height: '100%',
          }}
          source={require('../assets/wheels.jpg')}
        >
          <View style={styles.child} />
        </ImageBackground>
      </BlurView>
      {/* The title + tagline */}
      <View
        style={{
          position: 'absolute',
          top: 80,
          alignSelf: 'center',
        }}
      >
        {/* <Image
          style={{
            width: 100,
            height: 100,
            alignSelf: 'center',
          }}
          source={require('../assets/logo-red.png')}
        /> */}
        <Text style={styles.tagline}>Exercise</Text>
        <Text style={styles.tagline}>anytime</Text>
        <Text style={styles.tagline}>anywhere</Text>
        <Text style={styles.tagline}>to reach</Text>
        <Text style={styles.tagline}>your goal</Text>
      </View>

      {/* Register and Login button */}
      <View>
        <AppButton title='login' />
      </View>

      <View>
        <AppButton title='Join Us' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-end',
  },
  child: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  tagline: {
    fontWeight: 'bold',
    fontSize: 45,
    color: colors.primary,
    textAlign: 'right',
    top: 100,
    marginLeft: 184,
    marginBottom: 10,
    backgroundColor: colors.secondary,
  },
})
export default WelcomeScreen
