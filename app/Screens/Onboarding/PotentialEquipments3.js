import React from 'react'
import { StyleSheet, View, ScrollView, Button } from 'react-native'
import * as Progress from 'react-native-progress'

import AppText from '../../components/AppText.js'
import Cards from '../../components/Cards.js'
import Screen from '../../components/Screen.js'
import colors from '../../config/colors.js'
import useApi from '../../hooks/useApi.js'
import equipmentsApi from '../../api/equipments.js'
import AppButton from '../../components/AppButton.js'
import routes from '../../navigation/routes.js'

const PotentialEquipments3 = ({ navigation }) => {
  // const getListingsApi = useApi(equipmentsApi.getListings)
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
        {/* <View style={styles.button}>
          <Button
            title='Next >'
            onPress={console.log('Click')}
            color={colors.dark}
          />
        </View> */}

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
        <AppButton
          title={'Next'}
          theStyle={styles.button}
          textStyle={styles.theText}
          onPress={() => navigation.navigate(routes.FREQUENCY_OF_WORKOUT)}
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
    marginTop: 40,
  },
})

export default PotentialEquipments3
