import { Router } from 'express';
import { UsersController } from './users.controller';

const UsersRouter: Router = Router();

UsersRouter.get('/many', UsersController.get);

export { UsersRouter };
