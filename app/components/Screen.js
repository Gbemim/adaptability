import React from 'react'
import { SafeAreaView, View, StyleSheet, StatusBar } from 'react-native'
import Constants from 'expo-constants'
import colors from '../config/colors'

function Screen({ children, style }) {
  StatusBar.setBarStyle('dark-content', true)
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
})

export default Screen
