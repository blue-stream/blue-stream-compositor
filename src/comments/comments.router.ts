import { Router } from 'express';
import { CommentsController } from './comments.controller';

const CommentsRouter: Router = Router();

CommentsRouter.get('/root', CommentsController.getRootComments);

export { CommentsRouter };
