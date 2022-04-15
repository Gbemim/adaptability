import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  StyleSheet,
  FlatList,
  View,
  ScrollView,
  Modal,
  StatusBar,
  createElement,
} from 'react-native'
import Youtube, { getYoutubeMeta } from 'react-native-youtube-iframe'
import AppText from '../components/AppText'

import VideoCard from '../components/VideoCard'

function WorkoutDetailsScreen({ route }) {
  // const [modalVisible, showModal] = useState(false)
  // const [selectedVid, setSelectedVid] = useState(null)

  // useCallback((videoId) => {
  //   showModal(true)
  //   setSelectedVid(videoId)
  // }, [])

  // const closeModal = useCallback(() => showModal(false), [])
  // StatusBar.setBarStyle('light-content', true)

  // const route = useNavigation()
  const playerRef = useRef(null)
  const { titles, videoIds } = route.params

  // const test = createElement(JSON.stringify(videoIds).replace(/["']+/g, ''))

  return (
    <View>
      <Youtube
        play={false}
        // ref={playerRef}
        videoId={JSON.stringify(videoIds).replace(/["']+/g, '')}
        height={250}
        initialPlayerParams={{ controls: false }}
      />
      <View style={styles.container}>
        <AppText>{JSON.stringify(titles).replace(/["']+/g, '')}</AppText>
      </View>
      {/* <Modal visible={modalVisible} transparent={true}>
        <VideoCard video={selectedVid} onClose={closeModal} />
      </Modal> */}
    </View>
  )
  // const [modalVisible, showModal] = useState(false)
  // const [selectedVid, setSelectedVid] = useState(null)

  // useCallback((videoId) => {
  //   showModal(true)
  //   setSelectedVid(videoId)
  // }, [])

  // const closeModal = useCallback(() => showModal(false), [])

  // return (
  //   <View>
  //     <Modal visible={modalVisible} transparent={true}>
  //       <VideoCard video={selectedVid} onClose={closeModal} />
  //     </Modal>
  //   </View>
  // )
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
})

export default WorkoutDetailsScreen
