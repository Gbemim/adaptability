import React from 'react'
import { StyleSheet, View, ScrollView, Button } from 'react-native'
import * as Progress from 'react-native-progress'

import AppText from '../../components/AppText.js'
import Cards from '../../components/Cards.js'
import Screen from '../../components/Screen.js'
import colors from '../../config/colors.js'

const PotentialEquipments3 = () => {
  const equipImages = {
    mat: require('../../assets/equipments/mat.png'),
    dumbbell: require('../../assets/equipments/dumbbell.png'),
    jumpingRope: require('../../assets/equipments/jumping-rope.png'),
    medicineBall: require('../../assets/equipments/medicine-ball.png'),
    resistanceBand: require('../../assets/equipments/resistance-band.png'),
  }
  return (
    <Screen>
      <View style={styles.container}>
        <Progress.Bar
          progress={0.5}
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
          Do you use or plan to use the following equipments?
        </AppText>
        <ScrollView
          automaticallyAdjustsScrollIndicatorInsets={true}
          centerContent={true}
        >
          <View style={styles.equipments}>
            <Cards nameOfCard={'Yoga Mat'} image={equipImages.mat} />
            <Cards nameOfCard={'Dumbbell'} image={equipImages.dumbbell} />
            <Cards
              nameOfCard={'Jumping Rope'}
              image={equipImages.jumpingRope}
              onPressButton={console.log('testing')}
            />
            <Cards
              nameOfCard={'Medicine Ball'}
              image={equipImages.medicineBall}
            />
            <Cards
              nameOfCard={'Resistance Band'}
              image={equipImages.resistanceBand}
            />
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

export default PotentialEquipments3
