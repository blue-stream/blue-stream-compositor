import { Router } from 'express';
import { CommentsProxy, ReactionsProxy, VideosProxy, ChannelsProxy } from './proxies';

const AppProxyRouter: Router = Router();

AppProxyRouter.use('/api/comment', CommentsProxy);
AppProxyRouter.use('/api/reaction', ReactionsProxy);
AppProxyRouter.use('/api/video', VideosProxy);
AppProxyRouter.use('/api/channel', ChannelsProxy);

export { AppProxyRouter };
