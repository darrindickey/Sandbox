
import LocalizedString from "react-native-localization"

let strings = new LocalizedString({
  en: {
    loginTitle: "Log In",
    logOut: "Log Out",
    forgottenPassword: "Forgotten password?"
  },
  es: {
    loginTitle: "Iniciar sesión",
    logOut: "Cerrar sesión",
    forgottenPassword: "¿Contraseña olvidada?"
  },
  de: {
    loginTitle: "Einloggen",
    logOut: "Ausloggen",
    forgottenPassword: "Passwort vergessen?"
  }
})

export default strings