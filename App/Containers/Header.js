// @flow

import React from 'react'
import { Text, View, Button } from 'react-native'
import styles from './Styles/HeaderStyle'
// import { Images } from '../Themes'
// import DrawerButton from '../Components/DrawerButton'
// import { Actions as NavigationActions } from 'react-native-router-flux'

export default class Header extends React.Component {

  test () {
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>
        I am the Header component.
        </Text>
        <Button
          title='I am a button.'
          onPress={this.test}
        />
      </View>
    )
  }
}
