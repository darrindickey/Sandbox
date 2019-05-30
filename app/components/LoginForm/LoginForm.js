import strings from "./strings"
import styles from "./styles"
import { strings as loginStrings } from "../../screens/Login"
import React, { Component } from "react"
import { View } from "react-native"
import { Button, Input } from "react-native-elements"
import { NavigationScreenProp } from "react-navigation"
import { object as yupObject, string as yupString } from "yup"
import { Formik, FormikProps, FormikActions } from "formik"
import firebase from 'react-native-firebase'


class LoginForm extends Component {
  handleSubmit = (values: FormValues, actions: FormikActions<FormValues>) => {
    const { email, password } = values
    console.log('actions', actions)
    actions.setSubmitting(true);
    
    if (values.email && values.password) {
      firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Feed'))
      .catch(error => this.setState({ errorMessage: error.message }))
    } else {
      this.setState({ errorMessage: "Form fields may not be empty." })
      return
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Feed'))
      .catch(error => this.setState({ errorMessage: error.message }))
    // Here you would usually make a call to your API for a login.
    setTimeout(() => {
      actions.setSubmitting(false);
      this.props.navigation.navigate("HomeScreen");
    }, 3000);
  }

  renderForm = ({
    values,
    handleSubmit,
    setFieldValue,
    touched,
    errors,
    setFieldTouched,
    isValid,
    isSubmitting
  }: FormikProps<FormValues>) => (
    <View style={styles.container}>
      <Input
        placeholder={strings.emailAddress}
        keyboardType="email-address"
        autoCapitalize="none"
        value={values.email}
        onChangeText={value => setFieldValue("email", value)}
        onBlur={() => setFieldTouched("email")}
        editable={!isSubmitting}
        errorMessage={touched.email && errors.email ? errors.email : undefined}
      />
      <Input
        placeholder={strings.password}
        secureTextEntry
        autoCapitalize="none"
        value={values.password}
        onChangeText={value => setFieldValue("password", value)}
        onBlur={() => setFieldTouched("password")}
        editable={!isSubmitting}
        errorMessage={touched.password && errors.password ? errors.password : undefined}
      />
      <Button
        type='clear'
        title={loginStrings.forgottenPassword}
        containerStyle={styles.forgottenPasswordButtonContainer}
        titleStyle={styles.forgottenPasswordTitle}
        onPress={() => this.props.navigation.navigate("PasswordResetScreen")}
      />
      <Button
        title={loginStrings.loginTitle}
        containerStyle={styles.loginButtonContainer}
        buttonStyle={styles.loginButton}
        disabledStyle={styles.disabled}
        titleStyle={styles.loginButtonTitle}
        disabledTitleStyle={styles.loginButtonTitle}
        onPress={handleSubmit}
        disabled={!isValid || isSubmitting}
        loading={isSubmitting}
        loadingProps={{ size: "large", color: "white" }}
      />
    </View>
  );

  render() {
    return (
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values: FormValues, actions: FormikActions<FormValues>) => {
          this.handleSubmit(values, actions)
        }}
        validationSchema={yupObject().shape({
          email: yupString()
            .email(strings.invalidEmailFormat)
            .required(strings.emailRequired),
          password: yupString()
            .min(8, strings.passwordMinLength)
            .required(strings.passwordRequired)
        })}
        render={(formikBag: FormikProps<FormValues>) => this.renderForm(formikBag)}
      />
    );
  }
  // renderForm = () => (
  //   <View style={styles.container}>
  //     <Input
  //       placeholder={strings.emailAddress}
  //       keyboardType="email-address"
  //       autoCapitalize="none"
  //     />
  //     <Input placeholder={strings.password} secureTextEntry autoCapitalize="none" />
  //     <Button
  //       type="clear"
  //       title={loginStrings.forgottenPassword}
  //       containerStyle={styles.forgottenPasswordButtonContainer}
  //       titleStyle={styles.forgottenPasswordTitle}
  //       onPress={() => this.props.navigation.navigate("PasswordResetScreen")}
  //     />
  //     <Button
  //       title={loginStrings.loginTitle}
  //       containerStyle={styles.loginButtonContainer}
  //       buttonStyle={styles.loginButton}
  //       disabledStyle={styles.disabled}
  //       titleStyle={styles.loginButtonTitle}
  //       disabledTitleStyle={styles.loginButtonTitle}
  //     />
  //   </View>
  // )

  // render() {
  //   return (
  //     <Formik
  //       initialValues={{ email: '', password: '' }}
  //       onSubmit={(values: FormValues, formikBag: FormikActions<FormValues>)}
  //   )
  // }

  // render() {
  //   return this.renderForm();
  // }
}

export default LoginForm;