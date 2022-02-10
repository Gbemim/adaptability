import client from './client'

const endPoint = '/workouts'

const getWorkouts = () => client.get(endPoint)

export default {
  getWorkouts,
}
