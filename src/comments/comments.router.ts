import { Router } from 'express';
import { CommentsController } from './comments.controller';
import { Wrapper } from '../utils/wrapper';

const CommentsRouter: Router = Router();

CommentsRouter.get('/root', Wrapper.wrapAsync(CommentsController.getRootComments));

export { CommentsRouter };
