/* eslint-disable class-methods-use-this */
import User from '../models/User';

class UserService {
  getAll(): User[] {
    return [{
      username: 'jon',
      password: '123',
      courses: [],
      role: 'Student',
      userID: '123',
    }];
  }

  addUser(user: User):boolean {
    console.log(user);
    return true;
  }
}

export default new UserService();
