/* eslint-disable class-methods-use-this */
import UserRepository from '../repositories/user.repository';
import User from '../models/User';

class UserService {
  constructor(
  private repo = UserRepository,
  ) {}

  getAll(): User[] {
    return [{
      username: 'jon',
      password: '123',
      courses: '',
      role: 'Student',
      id: '123',
    }];
  }

  postUser(user: User):Promise<boolean> {
    return this.repo.postUser(user);
  }
}

export default new UserService();
