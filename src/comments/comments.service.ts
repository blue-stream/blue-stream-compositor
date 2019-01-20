import * as request from 'request-promise-native';
import { config } from '../config';

export class CommentsService {
    static doesExist(commentId: string) {
        return request.head(`${config.endpoints.comments.hostname}:${config.endpoints.comments.port}/${commentId}`);
    }
}
