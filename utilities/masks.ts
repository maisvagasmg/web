export function addCPFMask(cpf: string, hide: boolean) {
  if (hide) {
    return `${cpf.substr(0, 3)}.***.***-${cpf.substr(9)}`
  }
  const digitsOnly = String(cpf)?.replace(/\D/g, '')
  const maskedCPF = `${digitsOnly.slice(0, 3)}.${digitsOnly.slice(3, 6)}.${digitsOnly.slice(6, 9)}-${digitsOnly.slice(9, 11)}`
  return maskedCPF;
}

export function removeCPFMask(cpf: string) {
  return cpf ? String(cpf).replace(/\D/g, '') : null
} 
export function addPhoneMask(phone: string, hide: boolean) {
  if (hide) {
    return `(**)*****-${phone.substr(7)}`
  }
  const digitsOnly = String(phone)?.replace(/\D/g, '')
  const maskedPhone = `(${digitsOnly.slice(0, 2)}) ${digitsOnly.slice(2, 7)}-${digitsOnly.slice(7, 11)}`
  return maskedPhone;
}

export function removePhoneMask(phone: string) {
  return phone ? String(phone).replace(/\D/g, '') : null
}

export function returnYesOrNot(value: Number) {
  return value === 0 ? "Não" : "Sim"
}

export function BooleanToNumber(bol: Boolean) {
  return bol === true ? 1 : 0
}

export function NumberToBoolean(num: Number) {
  return num === 1 ? true : false
}

export function onlyNumbers(stringWithNumbers: string) {
  return stringWithNumbers ? String(stringWithNumbers).replace(/\D/g, '') : null
}