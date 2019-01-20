import { Router } from 'express';
import { UsersController } from './users.controller';
import { Wrapper } from '../utils/wrapper';

const UsersRouter: Router = Router();

UsersRouter.get('/many', Wrapper.wrapAsync(UsersController.get));

export { UsersRouter };
