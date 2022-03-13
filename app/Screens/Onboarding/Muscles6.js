import React from 'react'
import { StyleSheet, View, ScrollView, Button } from 'react-native'
import * as Progress from 'react-native-progress'

import AppText from '../../components/AppText.js'
import Cards from '../../components/Cards.js'
import Screen from '../../components/Screen.js'
import colors from '../../config/colors.js'

const Muscles6 = () => {
  const muscleGroups = {
    abs: require('../../assets/muscles/abs.jpg'),
    back: require('../../assets/muscles/back.jpg'),
    biceps: require('../../assets/muscles/biceps.jpg'),
    lowerBack: require('../../assets/muscles/lower-back.jpg'),
    chest: require('../../assets/muscles/chest.jpg'),
    shoulder: require('../../assets/muscles/shoulders.jpg'),
    calves: require('../../assets/muscles/calves.jpg'),
  }
  return (
    <Screen>
      <View style={styles.container}>
        <Progress.Bar
          progress={1}
          width={null}
          animationConfig={{ bounciness: 1 }}
          color={'rgba(64, 66, 82, 1)'}
        />
        <View style={styles.button}>
          <Button
            title='Next >'
            onPress={console.log('Click')}
            color={colors.dark}
          />
        </View>

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
              onPressButton={console.log('testing')}
            />
            <Cards nameOfCard={'Lower Back'} image={muscleGroups.lowerBack} />
            <Cards nameOfCard={'Biceps'} image={muscleGroups.biceps} />
            <Cards nameOfCard={'Shoulder'} image={muscleGroups.shoulder} />
            <Cards nameOfCard={'Calves'} image={muscleGroups.calves} />
          </View>
        </ScrollView>
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
    marginTop: 20,
    paddingBottom: 10,
    marginLeft: '77%',
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
  },
})

export default Muscles6
