import { createProxyServer, ServerOptions } from 'http-proxy';
import * as http from 'http';
import { config } from './config';

const serverOptions: ServerOptions = {};

const proxy = createProxyServer(serverOptions).listen(config.proxy.port);

const server = http.createServer((req, res) => {
    // You can define here your custom logic to handle the request
    // and then proxy the request.
    proxy.web(req, res, { target: 'http://127.0.0.1:5060' });
});

console.log(`Server running on port ${config.server.port}`);
server.listen(config.server.port);
