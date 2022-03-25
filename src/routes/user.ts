import { Router } from 'express';
import { UserController } from '../controllers';

const router = Router();

const userController = new UserController();

router.get(
  '/', 
  async (req, res) =>
   await userController.getAll(req, res),
);


export default router;
