import { MemberState } from "src/types/member-state";

export type Member = {
  uid: string;
  fullName: string;
  nickname: string;
  email: string;
  role: null;
  state: MemberState;
};
