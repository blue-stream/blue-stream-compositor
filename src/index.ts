import * as proxy from 'http-proxy-middleware';
import * as express from 'express';
import { config } from './config';
import { AppRouter } from './router';
import { AppProxyRouter } from './proxyRouter';

const server = express();

server.use(AppRouter);
server.use(AppProxyRouter);
server.listen(config.server.port);
