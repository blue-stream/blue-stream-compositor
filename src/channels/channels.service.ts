import * as request from 'request-promise-native';
import { config } from '../config';

export class ChannelsService {
    static get(channelId: string, authorizationHeader: string) {
        return request.get(
            `${config.endpoints.channels.hostname}:${config.endpoints.channels.port}${config.endpoints.channels.api}/${channelId}`,
            {
                headers: {
                    authorization: authorizationHeader,
                },
            },
        );
    }

    static doesExist(channelId: string) {
        return request.head(`${config.endpoints.channels.hostname}:${config.endpoints.channels.port}/${channelId}`);
    }
}
