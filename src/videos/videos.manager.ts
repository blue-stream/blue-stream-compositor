import * as request from 'request-promise-native';
import { config } from '../config';

export class VideosManager {
    static api: string = `${config.endpoints.videos.hostname}:${config.endpoints.videos.port}/${config.endpoints.videos.api}`;

    static get(videoId: string, authorizationHeader: string) {
        return request.get(
            `${VideosManager.api}/${videoId}`,
            {
                headers: {
                    authorization: authorizationHeader,
                },
            },
        );
    }

    static create(body: any) {
        return request.post(`${VideosManager.api}`, { body });
    }
}
