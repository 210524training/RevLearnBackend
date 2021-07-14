export default class User {
  public username: string;
  public password: string;
  public courses: string;
  public role: Role = 'Student';
  public id: string;
}

export type Role = 'Student' | 'Teacher' | 'Admin';
