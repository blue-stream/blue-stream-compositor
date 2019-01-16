import * as request from 'request-promise-native';
import { config } from '../config';

export class ChannelsManager {
    static get(channelId: string) {
        return request.get(`${config.endpoints.channels.hostname}:${config.endpoints.channels.port}/${channelId}`);
    }

    static async doesExist(channelId: string) {
        const channelStatus = await request.head(`${config.endpoints.channels.hostname}:${config.endpoints.channels.port}/${channelId}`);

        return channelStatus.statusCode === 200;
    }
}
