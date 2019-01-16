import * as request from 'request-promise-native';
import { config } from '../config';

export class UsersManager {
    static async get(id: string) {
        return request.get(`${config.endpoints.users.hostname}:${config.endpoints.users.hostname}/${id}`);
    }
}
