import * as request from 'request-promise-native';
import { config } from '../config';

export class VideosService {
    static api: string = `${config.endpoints.videos.hostname}:${config.endpoints.videos.port}${config.endpoints.videos.api}`;

    static get(videoId: string, authorizationHeader: string) {
        return request.get(
            `${VideosService.api}/${videoId}`,
            {
                headers: {
                    authorization: authorizationHeader,
                },
            },
        );
    }

    static create(body: any) {
        return request.post(`${VideosService.api}`, { body });
    }

    static doesExist(videoId: string) {
        return request.head(`${config.endpoints.videos.hostname}:${config.endpoints.videos.port}/${videoId}`);
    }
}
