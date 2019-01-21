import * as request from 'request-promise-native';
import { config } from '../config';

export class UsersService {
    static api: string = `${config.endpoints.users.hostname}:${config.endpoints.users.port}${config.endpoints.users.api}`;

    static async get(id: string) {
        return JSON.parse(await request.get(`${UsersService.api}/${id}`));
    }
}
