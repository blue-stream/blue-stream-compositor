import * as express from 'express';
import { config } from './config';
import { AppRouter } from './router';
import { AppProxyRouter } from './proxyRouter';

const server = express();

server.use(AppRouter);
server.use(AppProxyRouter);

console.log(`${config.server.name} running on port ${config.server.port}`);
server.listen(config.server.port);
