import { ResponseStatus } from "src/types/response-status"

export const ERROR_CODE_TOKEN_INVALID: ResponseStatus = {
  code: 400,
  message: 'Token invalido'
}

export const ERROR_CODE_INCORRECT_CREDENTIALS: ResponseStatus = {
  code: 400,
  message: 'Credenciales incorrectas'
}