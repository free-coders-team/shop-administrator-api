import { ControllerBase } from "../../utils/controller";

const getProduct = ControllerBase(
  async (req, res) => {
    return {
      code: 200,
      message: 'Get Products'
    }
  }
)

export default getProduct