import LocalizedStrings from "react-native-localization";

let strings = new LocalizedStrings({
  en: {
    emailAddress: "Email address",
    password: "Password",
    invalidEmailFormat: "A valid email can only contain latin letters, numbers, '@' and '.'.",
    emailRequired: "An email address is required.",
    passwordRequired: "A password is required.",
    passwordMinLength: "A secure password must be at least 8 characters long."
  },
  es: {
    emailAddress: "Dirección de correo electrónico",
    password: "Contraseña",
    invalidEmailFormat: "Un correo electrónico válido solo puede contener letras latinas, números, '@' y '.'.",
    emailRequired: "Se requiere una dirección de correo electrónico.",
    passwordRequired: "Se requiere una contraseña.",
    passwordMinLength: "Una contraseña segura debe tener al menos 8 caracteres."
  },
  de: {
    emailAddress: "Email Addresse",
    password: "Passwort",
    invalidEmailFormat:
      "Eine valide Email enthält nur lateinische Buchstaben, Nummern, '@' und '.'.",
    emailRequired: "Eine Email Addresse ist notwendig.",
    passwordRequired: "Ein Passwort ist notwendig.",
    passwordMinLength: "Ein sicheres Passwort muss mindestens 8 Zeichen lang sein."
  }
});

export default strings;