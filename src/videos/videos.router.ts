import { Router } from 'express';
import { VideosController } from './videos.controller';

const VideosRouter: Router = Router();

VideosRouter.get('/many', VideosController.getMany);

export { VideosRouter };
