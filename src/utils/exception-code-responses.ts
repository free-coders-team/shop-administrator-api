import { ResponseStatus } from "src/types/response-status"

export const ERROR_CODE_TOKEN_INVALID: ResponseStatus = {
  code: 400,
  message: 'Token invalido'
}

export const ERROR_CODE_INCORRECT_CREDENTIALS: ResponseStatus = {
  code: 400,
  message: 'Credenciales incorrectas'
}

export const ERROR_CODE_GENERATE_TOKEN: ResponseStatus = {
  code: 300,
  message: 'No se pudo generar el token'
}