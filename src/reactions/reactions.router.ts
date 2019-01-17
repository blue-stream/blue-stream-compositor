import { Router } from 'express';
import { ReactionsController } from './reactions.controller';

const ReactionsRouter: Router = Router();

ReactionsRouter.post('/', ReactionsController.create);

export { ReactionsRouter };
