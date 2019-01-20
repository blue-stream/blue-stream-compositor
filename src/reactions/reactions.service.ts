import * as request from 'request-promise-native';
import { config } from '../config';

export class ReactionsService {
    static api: string = `${config.endpoints.reactions.hostname}:${config.endpoints.reactions.port}/${config.endpoints.reactions.api}`;

    static getAmount(resourceId: string, authorizationHeader: string) {
        return request.get(
            `${ReactionsService.api}/${resourceId}/amount`,
            {
                headers: {
                    authorization: authorizationHeader,
                },
            },
        );
    }

    static create(body: any) {
        return request.post(`${ReactionsService.api}`, { body });
    }
}
