import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import * as Progress from 'react-native-progress'

import AppButton from '../../components/AppButton.js'
import AppText from '../../components/AppText.js'
import Screen from '../../components/Screen.js'
import routes from '../../navigation/routes.js'

const TermsAndConditions2 = ({ navigation }) => {
  return (
    <Screen>
      <View style={styles.container}>
        <Progress.Bar
          progress={0.33}
          width={null}
          animationConfig={{ bounciness: 1 }}
          color={'rgba(64, 66, 82, 1)'}
        />
        <AppText style={styles.header}> Terms And Conditions </AppText>
        <ScrollView
          automaticallyAdjustsScrollIndicatorInsets={true}
          centerContent={true}
        >
          <AppText style={styles.text}>
            We encourage you to speak with medical and exercise professionals
            prior to using the mobile application. The mobile application does
            not replace medical and professional expertise as it is only
            intended to reinforce and supplement it. {'\n'} {'\n'}
            Please note that the listed training units are just general
            recommendations. To customize the training units for your individual
            requirements, it is recommended that you see your physician or
            therapist (e.g. occupational, physical) before starting the
            training. {'\n'} {'\n'}
            We encourage you to not continue any training that causes you pain,
            problems, nausea, dizziness, or shortness of breath, and consult a
            medical expert. {'\n'} {'\n'}
            We rejects any liability for damage or injury suffered by the user.
            This limitation of liability excludes damage resulting from a
            negligent breach of obligations on the part of [insert
            app/corporation name] or from willful or gross negligence and
            vicarious agents. It also excludes any other damage caused by wilful
            or gross negligence or minor negligent breach of fundamental
            contractual obligations (= obligations whose fulfillment is
            necessary to achieve the objective of the agreement and on whose
            compliance the user may rely) on the part of [insert app/corporation
            name]
          </AppText>
        </ScrollView>
        <View style={styles.button}>
          <AppButton
            title='I agree'
            onPress={() => navigation.navigate(routes.POTENTIAL_EQUIPMENTS)}
          />
          <AppButton
            title='Cancel'
            onPress={() => navigation.navigate(routes.WELCOME)}
          />
        </View>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 35,
    paddingTop: 15,
    width: '100%',
    height: '100%',
  },
  header: {
    fontWeight: '800',
    marginTop: 50,
    paddingBottom: 30,
  },
  text: {
    alignSelf: 'center',
  },
  button: {
    marginTop: 10,
    paddingTop: 20,
  },
})

export default TermsAndConditions2
