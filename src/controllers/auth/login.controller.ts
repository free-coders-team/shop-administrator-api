import { ControllerBase } from "../../utils/controller"
import { ERROR_CODE_INCORRECT_CREDENTIALS } from "../../utils/exception-code-responses"

type responseType = {
  id: number
  name: string
  username: string
  password: string
}

const login = ControllerBase(async (req, res) => {
  // Code here
  // return ERROR_CODE_INCORRECT_CREDENTIALS
  // Response
  return {
    code: 200,
    message: "Logueado correctamente"
  }
})

export default login