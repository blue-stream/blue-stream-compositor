import { Router } from 'express';
import { ChannelsController } from './channels.controller';

const ChannelsRouter: Router = Router();

ChannelsRouter.get('/many', ChannelsController.getMany);

export { ChannelsRouter };
