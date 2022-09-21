import "../config/firebase";

import { getFirestore } from "firebase-admin/firestore";

import { Member } from "../models/member";

type GetUserByUIDParams = {
  uid: string;
};

const GetUserByUID = async (params: GetUserByUIDParams) => {
  try {
    const db = getFirestore();
    const usersRef = db.collection("users").doc(params.uid);

    const doc = await usersRef.get();
    if (!doc.exists) {
      return null;
    }

    const user = doc.data() as Member;
    return user;
  } catch (error) {
    return null;
  }
};

export default GetUserByUID;
