import { Router } from 'express';
import { CommentsRouter } from './comments/comments.router';
import { VideosRouter } from './videos/videos.router';
import { ReactionsRouter } from './reactions/reactions.router';
import { ChannelsRouter } from './channels/channels.router';
import { config } from './config';

const AppRouter: Router = Router();

AppRouter.use(config.endpoints.comments.api, CommentsRouter);
AppRouter.use(config.endpoints.reactions.api, ReactionsRouter);
AppRouter.use(config.endpoints.videos.api, VideosRouter);
AppRouter.use(config.endpoints.channels.api, ChannelsRouter);

export { AppRouter };
