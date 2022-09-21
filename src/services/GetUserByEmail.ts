import "../config/firebase";

import { getFirestore } from "firebase-admin/firestore";

import { Member } from "../models/members/member";
import AnnouncementsConverter from "../models/members/converter";

type GetUserByEmailParams = {
  email: string;
  uid: string;
};

const GetUserByEmail = async (params: GetUserByEmailParams) => {
  try {
    const db = getFirestore();
    const usersRef = db.collection("users");

    const snapshot = await usersRef
      .where("email", "==", params.email)
      .where("uid", "==", params.uid)
      // .withConverter(AnnouncementsConverter)
      .get();

    if (snapshot.empty) {
      return null;
    }

    const user: Member[] = [];
    snapshot.forEach((doc) => {
      console.log(doc.data());
      // user.push(doc.data());
    });

    return user[0];
  } catch (error) {
    return null;
  }
};

export default GetUserByEmail;
