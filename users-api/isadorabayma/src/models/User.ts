import { Pool } from 'mysql2/promise';
import IUser from '../interfaces/IUser';

export default class UserModel {
  // private connection: Pool

  constructor(private connection: Pool) {
  }

  public async getAll(): Promise<IUser[]> {
    const result = await 
  }
}
