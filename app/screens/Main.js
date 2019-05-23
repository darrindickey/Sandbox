import React, { Component } from 'react'
import { Button } from 'react-native'
import { View, Text, StyleSheet, Platform, Image } from 'react-native'
import firebase from 'react-native-firebase'

class Main extends Component {
  state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = firebase.auth()

    console.log('currentUser', currentUser)
    this.setState({ currentUser })
  }

  signOutUser = async () => {
    const { navigate } = this.props.navigation
    try {
      await firebase.auth().signOut()
      navigate('Splash')
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { currentUser } = this.state
    return (
      <View style={styles.container}>
        <Text>
          Hi, {currentUser && currentUser.email}!
        </Text>
        <Button title="Sign Out" onPress={() => this.signOutUser()} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Main