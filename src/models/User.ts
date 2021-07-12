export default class User {
  public username: string;
  public password: string;
  public courses: [];
  public role: Role = 'Student';
  public userID: string;
}

export type Role = 'Student' | 'Teacher' | 'Admin';
