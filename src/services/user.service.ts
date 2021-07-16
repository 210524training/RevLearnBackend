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

  addUser(user: User):Promise<boolean> {
    return this.repo.addUser(user);
  }
  getUserByID(id: string) {
    return this.repo.getUserByID(id);
  }

  deleteUser(id: string) {
    return this.repo.deleteUser(id);
  }
}

export default new UserService();
