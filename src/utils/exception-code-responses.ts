import { ResponseStatus } from "src/types/response-status";

export const ERROR_CODE_TOKEN_INVALID: ResponseStatus = {
  code: 400,
  message: "Token invalido",
};

export const ERROR_CODE_INCORRECT_CREDENTIALS: ResponseStatus = {
  code: 400,
  message: "Credenciales incorrectas",
};

export const ERROR_CODE_GENERATE_TOKEN: ResponseStatus = {
  code: 300,
  message: "No se pudo generar el token",
};

export const ERROR_CODE_NOT_AUTHORIZATION: ResponseStatus = {
  code: 404,
  message: "No tiene autorización",
};

export const ERROR_CODE_INCORRECT_FORMAT_TOKEN: ResponseStatus = {
  code: 400,
  message: "Formato de authorization incorrecto",
};

export const ERROR_CODE_NO_DATA_PROVIDED: ResponseStatus = {
  code: 400,
  message: "No se enviaron los datos requeridos",
};
