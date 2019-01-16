import * as request from 'request';
import { config } from '../config';

export class VideosManager {
    static api: string = `${config.endpoints.channels.hostname}:${config.endpoints.channels.hostname}`;

    static get(videoId: string) {
        return request.get(`${VideosManager.api}/${videoId}`);
    }

    static create(body: any) {
        return request.post(`${VideosManager.api}`, { body });
    }
}
