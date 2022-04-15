import React, { useEffect, useState, useRef, useCallback } from 'react'
import { View, StyleSheet, Image, Modal } from 'react-native'
import Youtube, { getYoutubeMeta } from 'react-native-youtube-iframe'
// import { getYoutubeMeta } from 'react-native-youtube-iframe'

import AppText from './AppText'
import colors from '../config/colors'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import routes from '../navigation/routes'
import WorkoutDetailsScreen from '../Screens/WorkoutDetailsScreen'
import { useNavigation } from '@react-navigation/native'

function Card({ videoId, image, name }) {
  const [videoMeta, setVideoMeta] = useState(null)
  // const [duration, setDuration] = useState(0)

  const navigation = useNavigation()

  useEffect(() => {
    getYoutubeMeta(videoId).then((data) => {
      setVideoMeta(data)
    })
  }, [videoId])

  if (videoMeta) {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate(routes.WORKOUT_DETAIL, {
            titles: videoMeta.title,
            videoIds: videoId,
          })
        }
      >
        <View style={styles.card}>
          <Image
            source={{ uri: videoMeta.thumbnail_url }}
            style={styles.image}
          />
          <View style={styles.detailsContainer}>
            <AppText style={styles.name}>{videoMeta.title}</AppText>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
  return null
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
    marginLeft: 25,
    marginTop: 10,
    borderColor: colors.medium,
    borderWidth: 1,
    width: 230,
    height: 330,
  },
  detailsContainer: {
    padding: 20,
  },
  muscleGroup: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  name: {
    marginBottom: 7,
  },

  image: {
    width: '100%',
    height: undefined,
    //resizeMode: 'contain',
    aspectRatio: 1,
    // alignSelf: 'center',
  },
})

export default Card
