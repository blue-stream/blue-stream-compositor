import * as request from 'request-promise-native';
import { config } from '../config';

export class UsersService {
    static async get(id: string) {
        return request.get(`${config.endpoints.users.hostname}:${config.endpoints.users.hostname}/${id}`);
    }
}
