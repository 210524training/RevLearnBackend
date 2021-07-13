import User from '../models/User';

class UserService {
  getAll(): User[] {
    return [{
        username: 'jon',
        password: '123',
        courses: [],
        role: 'Student',
        userID: '123',
      }]
  }
}

export default new UserService;
