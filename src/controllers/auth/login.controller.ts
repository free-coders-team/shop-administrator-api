import ControllerBase from "../../utils/controller"


const login = ControllerBase(async (req, res) => {
  // Code here
  
  // Response
  return {
    code: 200,
    message: "Logueado correctamente"
  }
})

export default login