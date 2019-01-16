import { Router } from 'express';
import { VideosController } from './videos.controller';

const VideosRouter: Router = Router();

VideosRouter.get('/:id', VideosController.get);
VideosRouter.post('/', VideosController.create);

export { VideosRouter };
