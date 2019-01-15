import * as proxy from 'http-proxy-middleware';
import { config } from './config';

const commentsApi: string = `${config.endpoints.comments.hostname}:${config.endpoints.comments.port}`;
const reactionsApi: string = `${config.endpoints.reactions.hostname}:${config.endpoints.reactions.port}`;
const videosApi: string = `${config.endpoints.videos.hostname}:${config.endpoints.videos.port}`;

const CommentsProxy = proxy({ target: commentsApi });
const ReactionsProxy = proxy({ target: reactionsApi });
const VideosProxy = proxy({ target: videosApi });

export { CommentsProxy, ReactionsProxy, VideosProxy };