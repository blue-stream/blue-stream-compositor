import * as request from 'request-promise-native';
import { config } from '../config';

export class CommentsService {
    static api: string = `${config.endpoints.comments.hostname}:${config.endpoints.comments.port}${config.endpoints.comments.api}`;

    static async getRoot(query: any, authorizationHeader: string) {
        return JSON.parse(await request.get(`${CommentsService.api}/root?resource=${query.resource}`, {
            headers: {
                authorization: authorizationHeader,
            },
        }));
    }

    static doesExist(commentId: string) {
        return request.head(`${config.endpoints.comments.hostname}:${config.endpoints.comments.port}/${commentId}`);
    }

    static async create(body: any) {
        return JSON.parse(await request.post(`${CommentsService.api}`, { body }));
    }
}
