import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, FlatList, View, ScrollView } from 'react-native'
import Youtube from 'react-native-youtube'

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

  const listVidId = ['2uy6bfnskik', 'pwNv4_AbTCU', 'bwGgbFvtmkE', '9l6vsbxHt4w']
  const armsAndShoulders = ['2uy6bfnskik', 'uK-7ST_HL7g', 'bznNEyG0lYQ']
  const absAndCore = ['Pwi6tT3S4FQ']
  const fullBody = ['5FxIbzvdBzA']

  const loadWorkouts = async () => {
    const response = await workoutsApi.getWorkouts()
    if (!response.ok) return setError(true)

    setError(false)
    setWorkouts(response.data)
  }

  useEffect(() => {
    loadWorkouts()
  }, [])
  return (
    <Screen style={styles.container}>
      <ScrollView>
        {error && (
          <>
            <AppText>Couldn't retrieve the workouts</AppText>
            <AppButton title='Retry' onPress={loadWorkouts} />
          </>
        )}
        <View>
          <AppText style={styles.text}>Arms & Shoulders</AppText>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={armsAndShoulders}
            horizontal={true}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <Card videoId={item} />}
          />
        </View>

        <View>
          <AppText style={styles.text}>Abs & Core</AppText>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={absAndCore}
            horizontal={true}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <Card videoId={item} />}
          />
        </View>

        <View>
          <AppText style={styles.text}>Full Body</AppText>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={fullBody}
            horizontal={true}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <Card videoId={item} />}
          />
        </View>
        {/* <Text >
            List of workouts
          </Text> */}
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 20,
  },

  text: {
    marginLeft: 25,
    marginTop: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
})

export default WorkoutMenuScreen
