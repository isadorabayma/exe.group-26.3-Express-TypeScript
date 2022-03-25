import IUser from '../interfaces/IUser';
import { UserModel } from '../models';
import connection from '../models/connection';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
    this.model
  }

  public async getAll(): Promise<IUser[]> {
    const users = await this.model.getAll()
    return users;
  }
}
