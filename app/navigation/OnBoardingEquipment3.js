import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Weights from '../Screens/Onboarding/PotentialEquipmentWeights3'

const Tab = createMaterialTopTabNavigator()

const OnBoardingEquipment3 = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.button}>
          <Button
            title='Next >'
            onPress={console.log('Click')}
            color={colors.dark}
          />
        </View>

        <AppText style={styles.text}>
          Do you use equipment or do you plan to use these equipment?
        </AppText>
        <ScrollView
          automaticallyAdjustsScrollIndicatorInsets={true}
          centerContent={true}
        >
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name='Home' component={Weights} />
              <Tab.Screen name='Settings' component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </ScrollView>
      </View>
    </Screen>
  )
}

export default OnBoardingEquipment3
