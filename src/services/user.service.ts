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

  updateUser(user: User) {
    return this.repo.updateUser(user);
  }

  deleteUser(id: string) {
    return this.repo.deleteUser(id);
  }

  async login(username: string, password: string): Promise<User | null> {
    const user = await this.repo.getUserByUsername(username);

    if(user && user.username === username && user.password === password) {
      return user;
    } else {
      return null;
    }
  }
}

export default new UserService();
