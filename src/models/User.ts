export default class User {
  public username: string;
  public password: string;
  public courses: string;
  public role: Role = 'Student';
  public userID: string;
}

export type Role = 'Student' | 'Teacher' | 'Admin';
