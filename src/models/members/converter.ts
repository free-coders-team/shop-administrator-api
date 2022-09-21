import { firestore } from "firebase-admin";

import MemberModel from "./model";

const AnnouncementsConverter = {
  toFirestore(Announcements: MemberModel): firestore.DocumentData {
    return { ...Announcements };
  },
  fromFirestore(snapshot: firestore.QueryDocumentSnapshot): MemberModel {
    const data = snapshot.data();
    return new MemberModel(
      data._id,
      data.title,
      data.type,
      data.description,
      data.image,
      data.date
    );
  },
};

export default AnnouncementsConverter;
