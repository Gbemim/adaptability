import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, FlatList, Button } from 'react-native'

import Screen from '../components/Screen'
import routes from '../navigation/routes'
import workoutsApi from '../api/workouts'
import Card from '../components/Card'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'

function WorkoutMenuScreen({ navigation }) {
  const [workouts, setWorkouts] = useState([])
  const [error, setError] = useState(false)

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
    <Screen>
      {error && (
        <>
          <AppText>Couldn't retrieve the workouts</AppText>
          <AppButton title='Retry' onPress={loadWorkouts} />
        </>
      )}
      <FlatList
        data={workouts}
        keyExtractor={(workout) => workout._id.toString()}
        renderItem={({ item }) => (
          <Card
            name={item.name}
            muscleGroup={item.muscleGroup}
            onPress={() => navigation.navigate(routes.WORKOUT_DETAIL, item)}
          />
        )}
      />
      {/* <Text >
            List of workouts
          </Text> */}
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {},
})

export default WorkoutMenuScreen
