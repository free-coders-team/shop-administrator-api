import "../config/firebase";

import { getAuth } from "firebase-admin/auth";

type GetUserByEmailParams = {
  email: string;
};

const GetUserByEmail = async (params: GetUserByEmailParams) => {
  try {
    const auth = getAuth();
    const userData = await auth.getUserByEmail(params.email);

    return {
      uid: userData.uid,
      email: userData.email as string,
    };
  } catch (error) {
    return null;
  }
};

export default GetUserByEmail;
