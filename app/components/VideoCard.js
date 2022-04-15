import React, { useRef } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Youtube from 'react-native-youtube-iframe'
import AppText from './AppText'

import Screen from './Screen'

const VideoCard = ({ videoId, onClose }) => {
  // const workout = route.params

  const videoRef = useRef(null)
  return (
    <Screen style={styles.container}>
      {/* <Text>Detailed explanation of {videoId.title}</Text> */}

      <Youtube ref={videoRef} play={true} videoId={videoId} height={250} />
      <View>
        <AppText style={styles.text} onPress={onClose}>
          Close
        </AppText>
        <AppText style={styles.text}></AppText>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  text: {
    textAlign: 'right',
  },
})

export default VideoCard
