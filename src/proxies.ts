import * as proxy from 'http-proxy-middleware';
import { config } from './config';

const commentsApi: string = `${config.endpoints.comments.hostname}:${config.endpoints.comments.port}`;
const reactionsApi: string = `${config.endpoints.reactions.hostname}:${config.endpoints.reactions.port}`;
const videosApi: string = `${config.endpoints.videos.hostname}:${config.endpoints.videos.port}`;
const channelsApi: string = `${config.endpoints.channels.hostname}:${config.endpoints.channels.port}`;
const usersApi: string = `${config.endpoints.users.hostname}:${config.endpoints.users.port}`;

const CommentsProxy = proxy({ target: commentsApi });
const ReactionsProxy = proxy({ target: reactionsApi });
const VideosProxy = proxy({ target: videosApi });
const ChannelsProxy = proxy({ target: channelsApi });
const UsersProxy = proxy({ target: usersApi });

export { CommentsProxy, ReactionsProxy, VideosProxy, ChannelsProxy, UsersProxy };
