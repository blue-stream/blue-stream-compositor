import { Router } from 'express';
import { VideosController } from './videos.controller';
import { Wrapper } from '../utils/wrapper';

const VideosRouter: Router = Router();

VideosRouter.get('/:id', Wrapper.wrapAsync(VideosController.get));
VideosRouter.post('/', Wrapper.wrapAsync(VideosController.create));

export { VideosRouter };
