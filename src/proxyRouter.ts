import { Router } from 'express';
import { CommentsProxy, ReactionsProxy, VideosProxy, ChannelsProxy, UsersProxy } from './proxies';
import { config } from './config';

const AppProxyRouter: Router = Router();

AppProxyRouter.use(config.endpoints.comments.api, CommentsProxy);
AppProxyRouter.use(config.endpoints.reactions.api, ReactionsProxy);
AppProxyRouter.use(config.endpoints.videos.api, VideosProxy);
AppProxyRouter.use(config.endpoints.channels.api, ChannelsProxy);
AppProxyRouter.use(config.endpoints.users.api, UsersProxy);

export { AppProxyRouter };
