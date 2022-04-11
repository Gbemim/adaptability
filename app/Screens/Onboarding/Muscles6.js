import React from 'react'
import { StyleSheet, View, ScrollView, Button } from 'react-native'
import * as Progress from 'react-native-progress'
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'

import AppText from '../../components/AppText.js'
import Cards from '../../components/Cards.js'
import Screen from '../../components/Screen.js'
import colors from '../../config/colors.js'
import AppButton from '../../components/AppButton.js'
import routes from '../../navigation/routes.js'
import AppNavigator from '../../navigation/AppNavigator.js'

const Muscles6 = ({ navigation }) => {
  const muscleGroups = {
    abs: require('../../assets/muscles/abs.jpg'),
    back: require('../../assets/muscles/back.jpg'),
    biceps: require('../../assets/muscles/biceps.jpg'),
    lowerBack: require('../../assets/muscles/lower-back.jpg'),
    chest: require('../../assets/muscles/chest.jpg'),
    shoulder: require('../../assets/muscles/shoulders.jpg'),
    calves: require('../../assets/muscles/calves.jpg'),
  }

  navigationRef = useNavigationContainerRef()
  return (
    <Screen>
      <View style={styles.container}>
        <Progress.Bar
          progress={1}
          width={null}
          animationConfig={{ bounciness: 1 }}
          color={'rgba(64, 66, 82, 1)'}
        />
        {/* <View style={styles.button}>
          <Button
            title='Next >'
            onPress={console.log('Click')}
            color={colors.dark}
          />
        </View> */}

        <AppText style={styles.text}>
          Which muscles are able and medically cleared to workout? If not known
          at the moment, you can modify later.
        </AppText>
        <ScrollView
          automaticallyAdjustsScrollIndicatorInsets={true}
          centerContent={true}
        >
          <View style={styles.equipments}>
            <Cards nameOfCard={'Abs'} image={muscleGroups.abs} />
            <Cards nameOfCard={'Chest'} image={muscleGroups.chest} />
            <Cards
              nameOfCard={'Back'}
              image={muscleGroups.back}
              // onPressButton={console.log('testing')}
            />
            <Cards nameOfCard={'Lower Back'} image={muscleGroups.lowerBack} />
            <Cards nameOfCard={'Biceps'} image={muscleGroups.biceps} />
            <Cards nameOfCard={'Shoulder'} image={muscleGroups.shoulder} />
            <Cards nameOfCard={'Calves'} image={muscleGroups.calves} />
          </View>
        </ScrollView>
        <AppButton
          title={'Next'}
          theStyle={styles.button}
          textStyle={styles.theText}
          onPress={() => navigation.navigate(routes.SIGN_UP)}
        />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 35,
    paddingTop: 10,
    width: '100%',
    height: '100%',
  },
  button: {
    fontSize: 50,
    backgroundColor: colors.secondary,
    marginTop: 30,
    padding: 18,
    borderRadius: 5,
  },
  theText: {
    color: colors.primary,
  },
  equipments: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },

  header: {
    fontWeight: '800',
    marginTop: 50,
    paddingBottom: 30,
  },
  text: {
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 35,
  },
})

export default Muscles6
