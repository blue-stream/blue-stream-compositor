import { Router } from 'express';
import { ReactionsController } from './reactions.controller';

const ReactionsRouter: Router = Router();

ReactionsRouter.get('/many', ReactionsController.getMany);

export { ReactionsRouter };
