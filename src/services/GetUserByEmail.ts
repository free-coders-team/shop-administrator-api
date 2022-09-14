import "../firebase";
import { getAuth } from "firebase-admin/auth";

type GetUserByEmailParams = {
  email: string;
};

const GetUserByEmail = async (params: GetUserByEmailParams) => {
  const auth = getAuth();

  try {
    const userData = await auth.getUserByEmail(params.email);

    return {
      uid: userData.uid,
      email: userData.email!,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default GetUserByEmail;
