import { Router } from 'express';
import { CommentsProxy, ReactionsProxy, VideosProxy } from './proxies';

const AppProxyRouter: Router = Router();

AppProxyRouter.use('/api/comments', CommentsProxy);
AppProxyRouter.use('/api/reactions', ReactionsProxy);
AppProxyRouter.use('/api/videos', VideosProxy);

export { AppProxyRouter };
