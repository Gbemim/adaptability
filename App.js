import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// import WelcomeScreen from './app/Screens/WelcomeScreen'
import Screen from './app/components/Screen'
import MessageScreen from './app/Screens/MessageScreen'

const Link = () => {
  const navigation = useNavigation()

  return (
    <Button
      title='Click'
      onPress={() => navigation.navigate('TweetDetails', { id: 1 })}
    />
  )
}

const Tweets = () => (
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
)

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
)

const Stack = createNativeStackNavigator()
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: 'black' },
      headerTintColor: 'white',
    }}
  >
    <Stack.Screen name='Tweets' component={Tweets} />
    <Stack.Screen
      name='TweetDetails'
      component={TweetDetails}
      options={{ title: 'Tweet Details' }}
    />
  </Stack.Navigator>
)

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
)
const Tab = createBottomTabNavigator()
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name='Feed' component={Tweets} />
    <Tab.Screen name='Account' component={Account} />
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}
