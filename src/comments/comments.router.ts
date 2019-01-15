import { Router } from 'express';
import { CommentsController } from './comments.controller';

const CommentsRouter: Router = Router();

CommentsRouter.get('/many', CommentsController.getMany);

export { CommentsRouter };
