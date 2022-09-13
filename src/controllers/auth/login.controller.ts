import ControllerBase from "../../utils/controller";

import "../../firebase";
import { getAuth } from "firebase-admin/auth";
import axios from "axios";

const login = ControllerBase(async (req, res) => {
  // Code here
  // console.log(req.body);

  try {
    const user = axios.post("");

    const auth = getAuth();

    const data = await auth.getUserByEmail("test@test.com");

    return {
      code: 200,
      message: "Logueado correctamente",
      payload: data,
    };
  } catch (error) {
    console.log(error);

    return {
      code: 404,
      message: "Error",
    };
  }

  // Response
});

export default login;
