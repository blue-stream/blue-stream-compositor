import * as request from 'request-promise-native';
import { config } from '../config';

export class CommentsService {
    static api: string = `${config.endpoints.comments.hostname}:${config.endpoints.comments.port}${config.endpoints.comments.api}`;

    static getRoot(query: any, authorizationHeader: string) {
        return request.get(`${CommentsService.api}?resource=${query.id}`, {
            headers: {
                authorization: authorizationHeader,
            },
        });
    }

    static doesExist(commentId: string) {
        return request.head(`${config.endpoints.comments.hostname}:${config.endpoints.comments.port}/${commentId}`);
    }

    static create(body: any) {
        return request.post(`${CommentsService.api}`, { body });
    }
}
