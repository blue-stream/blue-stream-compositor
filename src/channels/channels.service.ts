import * as request from 'request-promise-native';
import { config } from '../config';

export class ChannelsService {
    static api: string = `${config.endpoints.channels.hostname}:${config.endpoints.channels.port}${config.endpoints.channels.api}`;

    static async get(channelId: string, authorizationHeader: string) {
        return JSON.parse(await request.get(
            `${ChannelsService.api}/${channelId}`,
            {
                headers: {
                    authorization: authorizationHeader,
                },
            },
        ));
    }

    static doesExist(channelId: string) {
        return request.head(`${config.endpoints.channels.hostname}:${config.endpoints.channels.port}/${channelId}`);
    }
}
