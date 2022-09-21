import { MemberState } from "../../types/member-state";

class MemberModel {
  constructor(
    readonly uid: string,
    readonly fullName: string,
    readonly nickname: string,
    readonly email: string,
    readonly role: null,
    readonly state: MemberState
  ) {}
}

export default MemberModel;
