import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

import defaultStyles from '../config/styles'
import AppText from '../components/AppText'
import colors from '../config/colors'

function AppTextInput({ icon, inputName, inputStyle, ...otherProps }) {
  return (
    <View>
      <AppText style={[defaultStyles.text, styles.inputName]}>
        {inputName}
      </AppText>
      <View style={styles.container}>
        {/* {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={defaultStyles.colors.medium}
            style={styles.icon}
          />
        )} */}
        <TextInput style={[defaultStyles.text, inputStyle]} {...otherProps} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    padding: 16,
    borderWidth: 1,
    backgroundColor: colors.primary,
    borderColor: colors.secondary,
    marginLeft: 20,
  },

  inputName: {
    marginTop: 50,
    marginLeft: 20,
  },

  icon: {
    margin: 10,
  },
})

export default AppTextInput
