import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Icon } from 'react-native-elements'
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import Loading from '../screens/Loading'
import SignUp from '../screens/SignUp'
import LoginScreen from '../screens/Login/LoginScreen'
import Main from '../screens/Main'
import Profile from '../screens/Profile'
import Settings from '../screens/Settings'
import Camera from '../screens/Camera'
import { TouchableOpacity } from 'react-native-gesture-handler'

class Feed extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Feed</Text>
      </View>
    );
  }
}

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Feed,
    Profile,
    Settings
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            raised
            reverse
            type='material'
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name='camera-alt'
            size={30}
          />
        )
      };
    }
  }
)

const LoggedOutNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
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
  

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  }
})

const AppNavigator = createAppContainer(createSwitchNavigator(
  {
    AppLoading: Loading,
    LoggedOut: LoggedOutNavigator,
    // Welcome: { screen: WelcomeScreen },
    Dashboard: { screen: AppDrawerNavigator }
  }, {
    headerMode: 'none'
  }, {
    initialRouteName: 'AppLoading'
  }
))

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default AppNavigator
