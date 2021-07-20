/* eslint-disable class-methods-use-this */
import UserRepository from '../repositories/user.repository';
import User from '../models/User';

class UserService {
  constructor(
  private repo = UserRepository,
  ) {}

  addUser(user: User):Promise<boolean> {
    return this.repo.postUser(user);
  }

  getAll(): Promise<User[]> {
    return this.repo.getAllUsers();
  }

  getAllTeachers(): Promise<User[]> {
    return this.repo.getAllTeachers();
  }

  getUserByID(id: string) {
    return this.repo.getUserByID(id);
  }

  deleteUser(id: string) {
    return this.repo.deleteUser(id);
  }
}

export default new UserService();
