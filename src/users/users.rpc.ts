import { config } from '../config';

const jayson = require('jayson/promise');

export class UsersRpc {
    private static rpcClient = jayson.Client.http(`${config.endpoints.users.hostname}:${config.endpoints.users.rpc.port}`);

    static async getUsersByIds(resources: string[]) {
        const response = await UsersRpc.rpcClient.request(config.endpoints.users.rpc.methods.GET_USERS_BY_IDS, resources);

        return response.result;
    }
}
