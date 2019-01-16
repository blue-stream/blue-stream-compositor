import * as express from 'express';
import { config } from './config';
import { AppRouter } from './router';
import { AppProxyRouter } from './proxyRouter';
import { Authenticator } from './utils/authenticator';

const server = express();

if (config.authentication.required) {
    server.use((req, res, next) => {
        req.headers.authorization = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXJAZG8ifQ.k1sGqvw0IJ1ocB9XrF8Oviaz4D-A4E9fDkz_VmAY-LA';
        next();
    });
    server.use(Authenticator.initialize());
    server.use(Authenticator.middleware);
} else {
    server.use(Authenticator.mockUser);
}

server.use(AppRouter);
server.use(AppProxyRouter);

console.log(`${config.server.name} running on port ${config.server.port}`);
server.listen(config.server.port);
