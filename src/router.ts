import { Router } from 'express';
import { CommentsRouter } from './comments/comments.router';
import { VideosRouter } from './videos/videos.router';
import { ReactionsRouter } from './reactions/reactions.router';
import { ChannelsRouter } from './channels/channels.router';

const AppRouter: Router = Router();

AppRouter.use('/api/comment', CommentsRouter);
AppRouter.use('/api/reaction', ReactionsRouter);
AppRouter.use('/api/video', VideosRouter);
AppRouter.use('/api/channel', ChannelsRouter);

export { AppRouter };
