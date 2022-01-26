import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

function WorkoutButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <SimpleLineIcons name='energy' color={colors.primary} size={35} />
      </View>
    </TouchableOpacity>
  )
}

// if android just revert back to the normal icon
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    height: 80,
    width: 80,
    borderRadius: 40,
    bottom: 20,
    borderColor: colors.secondary,
    borderWidth: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    zIndex: 3,
  },
})

export default WorkoutButton
