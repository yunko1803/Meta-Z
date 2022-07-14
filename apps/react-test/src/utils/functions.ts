import {SIX} from './constants'

export function generateEmailMsg(email: string) {
  if (isEmailValid(email)) {
    return '올바른 이메일 주소를 입니다'
  }
  return '올바른 이메일 주소를 입력하세요'
}

export function generatePasswordMsg(password: string) {
  if (!isSpecialCharacterInclude(password)) {
    return '1개 이상의 기호를 포함하여야 합니다'
  }
  if (!isUpperCharacterInclude(password)) {
    return '1개 이상의 대문자를 포함하여야 합니다'
  }
  if (!isLowerCharacterInclude(password)) {
    return '1개 이상의 소문자를 포함하여야 합니다'
  }
  if (!isNumberInclude(password)) {
    return '1개 이상의 숫자를 포함하여야 합니다'
  }
  if (password.length < SIX) {
    return '6글자 이상 이여야 합니다'
  }
  return '올바른 패스워드 입니다'
}

export function isEmailValid(email: string) {
  const emailFormatRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  return emailFormatRegex.test(email)
}

export function isPasswordValid(password: string) {
  if (!isSpecialCharacterInclude(password)) {
    return false
  }
  if (!isUpperCharacterInclude(password)) {
    return false
  }
  if (!isLowerCharacterInclude(password)) {
    return false
  }
  if (!isNumberInclude(password)) {
    return false
  }
  if (password.length < SIX) {
    return false
  }
  return true
}

export function isSpecialCharacterInclude(string: string) {
  const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
  return specialCharacters.test(string)
}

export function isUpperCharacterInclude(string: string) {
  return /[A-Z]/.test(string)
}

export function isLowerCharacterInclude(string: string) {
  return /[a-z]/.test(string)
}

export function isNumberInclude(string: string) {
  return /\d/.test(string)
}
