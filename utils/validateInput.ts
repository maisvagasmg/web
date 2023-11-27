import { validateEmail, validatePhone } from 'validations-br';

export const validateInput = (value, fieldName, required = false, extraField = null) => {
  let error
  if (required && !value) {
    error = '*É necessário preenchimento'
  } else {
    switch (fieldName) {
      case 'email':
        if (!validateEmail(value)) {
          error = 'Insira um e-mail válido'
        }
        break;
      case 'celular':
        if (!validatePhone(value)) {
          error = 'Insira um celular válido'
        }
        break;
      case 'termos':
        if (!value) {
          error = '* É necessário aceitar os termos de uso para continuar'
        }
        break;
      default:
        break;
    }
  }
  return error
}