import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation'
import { View, Button, Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import React, { Component } from 'react'

import Loading from '../screens/Loading'
import SignUp from '../screens/SignUp'
import Login from '../screens/Login'
import Main from '../screens/Main'
import Profile from '../screens/Profile'
import Settings from '../screens/Settings'
import Camera from '../screens/Camera'
import { TouchableOpacity } from 'react-native-gesture-handler';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: {
        title: "Home"
      }
    },
    Camera: { screen: Camera },
    Profile: { screen: Profile },
    Settings: { screen: Settings }
  } 
)

const LoggedInNavigator = createStackNavigator(
  {
    // Home: {
    //   screen: Main,
    //   navigationOptions: {
    //     title: "Home"
    //   }
    // },
    Tabs: {screen: TabNavigator}
  }
)

const LoggedOutNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        title: "Login"
      }
    }, 
    Signup: {
      screen: SignUp,
      navigationOptions: {
        title: "Sign Up"
      }
    }
  }
)

const DrawerNavigator = createDrawerNavigator(
  {
    Camera: {
      screen: Camera,
      navigationOptions: {
        title: "Camera",
        headerTitle: (
          <View>
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
            >
              <Icon
                name='camera'
                type='material'
                size={24}
                color='#999999'
              />
            </TouchableOpacity>
          </View>
        )
        // drawerLabel: "Camera",
        // drawerIcon: ({ tintColor }) => (
        //   <Icon
        //     onPress={() => navigation.toggleDrawer()}
        //     name='camera'
        //     type='material'
        //     size={24}
        //     color='#999999'
        //   />
        // )
      }
    }
  }
)

const AppNavigator = createAppContainer(createSwitchNavigator(
  {
    AppLoading: Loading,
    LoggedOut: LoggedOutNavigator,
    LoggedIn: LoggedInNavigator,
    Drawer: DrawerNavigator
  }, {
    headerMode: 'none'
  }, {
    initialRouteName: 'AppLoading'
  }
))

export default AppNavigator