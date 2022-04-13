import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import Screen from '../components/Screen'
import routes from '../navigation/routes'
import workoutsApi from '../api/workouts'
import Card from '../components/Card'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
import colors from '../config/colors'

function WorkoutMenuScreen({ navigation }) {
  const [workouts, setWorkouts] = useState([])
  const [error, setError] = useState(false)
  const workoutImage = {
    seatedRow: require('../assets/workoutImages/seatedRow.png'),
    // dumbbell: require('../../assets/workoutImages/dumbbell.png'),
    // jumpingRope: require('../../assets/workoutImages/jumping-rope.png'),
    // medicineBall: require('../../assets/workoutImages/medicine-ball.png'),
    // resistanceBand: require('../../assets/workoutImages/resistance-band.png'),
  }

  useEffect(() => {
    loadWorkouts()
  }, [])

  const loadWorkouts = async () => {
    const response = await workoutsApi.getWorkouts()
    if (!response.ok) return setError(true)

    setError(false)
    setWorkouts(response.data)
  }

  return (
    <Screen style={styles.container}>
      {error && (
        <>
          <AppText>Couldn't retrieve the workouts</AppText>
          <AppButton title='Retry' onPress={loadWorkouts} />
        </>
      )}
      <View>
        <AppText style={styles.text}>Coordination & Balance</AppText>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={workouts}
          horizontal={true}
          keyExtractor={(workout) => workout._id.toString()}
          renderItem={({ item }) => (
            <Card
              name={item.name}
              muscleGroup={item.muscleGroup}
              onPress={() => navigation.navigate(routes.WORKOUT_DETAIL, item)}
              image={workoutImage.seatedRow}
            />
          )}
        />
      </View>
      {/* <Text >
            List of workouts
          </Text> */}
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  text: {
    marginLeft: 25,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
})

export default WorkoutMenuScreen
