import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import { escapeComponent } from 'uri-js'
import styles from './styles'

export default class LoginScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? "padding" : undefined}
      >
        <LoginForm
          navigation={this.props.navigation}
        />
      </KeyboardAvoidingView>
    )
  }
}

// import React, { Component } from 'react'
// import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
// import firebase from 'react-native-firebase'

// class Login extends Component {
//   state = { email: '', password: '', errorMessage: null }

//   handleLogin = () => {
//     const { email, password } = this.state

//     if (email && password) {
//       firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then(() => this.props.navigation.navigate('Feed'))
//       .catch(error => this.setState({ errorMessage: error.message }))
//     } else {
//       this.setState({ errorMessage: "Form fields may not be empty." })
//       return
//     }

//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then(() => this.props.navigation.navigate('Feed'))
//       .catch(error => this.setState({ errorMessage: error.message }))
//   }

//   render() {
//     return (
//       <View style={StyleSheet.container}>
//         <Text>Login</Text>
//         {this.state.errorMessage &&
//           <Text style={{ color: 'red' }}>
//             {this.state.errorMessage}
//           </Text>
//         }
//         <TextInput
//           style={styles.textInput}
//           autoCapitalize="none"
//           placeholder="Email"
//           onChangeText={email => this.setState({ email })}
//           value={this.state.email}
//         />
//         <TextInput
//           secureTextEntry
//           style={styles.textInput}
//           autoCapitalize="none"
//           placeholder="Password"
//           onChangeText={password => this.setState({ password })}
//           value={this.state.password}
//         />
//         <Button title="Login" onPress={this.handleLogin} />
//         <Button
//           title="Don't have an account? Sign Up"
//           onPress={() => this.props.navigation.navigate('Signup')}
//         />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   textInput: {
//     height: 40,
//     width: '90%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginTop: 8
//   }
// })

// export default Login