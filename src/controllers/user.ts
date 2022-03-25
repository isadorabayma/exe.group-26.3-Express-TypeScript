import { StatusCodes } from 'http-status-codes';
import { UserService } from '../services';
import { Request, Response } from 'express';


export default class UserController {
  userService = new UserService();

  public async getAll(_req: Request, res: Response) {
    const users = await this.userService.getAll();

    res.status(StatusCodes.OK).json(users);
  }
}
