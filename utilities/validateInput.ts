import { isValid, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { validateCep, validateCNPJ, validateCPF, validateEmail, validatePhone } from 'validations-br';

export const validateInput = (value: any, fieldName: String, required = false, extraField = null) => {
  let error
  if (required && !value) {
    error = '*É necessário preechimento'
  } else {
    switch (fieldName) {
      case 'email':
        if (!validateEmail(value)) {
          error = 'Insira um e-mail válido'
        }
        break;
      case 'celular':
        if (!validatePhone(String(value))) {
          error = 'Insira um celular válido'
        }
        break;
      case 'cpf':
        if (!validateCPF(String(value))) {
          error = 'Insira um CPF válido'
        }
        break;
      case 'cnpj':
        if (!validateCNPJ(String(value))) {
          error = 'Insira um CNPJ válido'
        }
        break;
      case 'cep':
        if (!validateCep(String(value))) {
          error = 'Insira um CEP válido'
        }
        break;
      case 'data':
        const parsedDate = parse(value, 'P', new Date(), { locale: ptBR });
        const isValidDate = isValid(parsedDate);
        if (!isValidDate || value?.length < 10) {
          error = 'Insira uma data válida'
        }
        break;
      case 'cv':
        if (extraField && Number(value) !== Number(extraField)) {
          error = 'Código inválido'
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