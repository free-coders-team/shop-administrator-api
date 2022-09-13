import { ControllerBase } from "../../utils/controller"
import { getAuth } from 'firebase-admin/auth'
import { generateToken } from "../../utils/token"
import { ERROR_CODE_INCORRECT_CREDENTIALS, ERROR_CODE_GENERATE_TOKEN } from "../../utils/exception-code-responses"


type PayloadType = {
  token: string
}

type RequestBody = {
  username: string
  password: string
}

const login = ControllerBase<PayloadType>(
  async (req, res) => {
    const { username, password } = req.body as RequestBody
    const auth = getAuth()
    const userRecord = await auth.createUser({
      email: 'user@example.com',
      phoneNumber: '+11234567890',
    })
    
    const token = generateToken({
      uid: userRecord.uid
    })
    
    if (!token) return ERROR_CODE_GENERATE_TOKEN

    return ({
      code: 200,
      message: 'Usuario Registrado',
      payload: {
        token
      }
    })
  }
)

export default login