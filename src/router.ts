import { Router } from 'express';
import { CommentsRouter } from './comments/comments.router';
import { VideosRouter } from './videos/videos.router';
import { ReactionsRouter } from './reactions/reactions.router';

const AppRouter: Router = Router();

AppRouter.use('/api/comments', CommentsRouter);
AppRouter.use('/api/reactions', ReactionsRouter);
AppRouter.use('/api/videos', VideosRouter);

export { AppRouter };
