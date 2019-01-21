import * as request from 'request-promise-native';
import { config } from '../config';

export class ReactionsService {
    static api: string = `${config.endpoints.reactions.hostname}:${config.endpoints.reactions.port}${config.endpoints.reactions.api}`;

    static async getAmount(resourceId: string, authorizationHeader: string) {
        return JSON.parse(await request.get(
            `${ReactionsService.api}/${resourceId}/amount`,
            {
                headers: {
                    authorization: authorizationHeader,
                },
            },
        ));
    }

    static async create(body: any) {
        return JSON.parse(await request.post(`${ReactionsService.api}`, { body }));
    }
}
