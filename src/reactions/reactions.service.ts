import { HttpClient } from '../utils/http.client';
import { config } from '../config';

export class ReactionsService {
    static api: string = `${config.endpoints.reactions.hostname}:${config.endpoints.reactions.port}${config.endpoints.reactions.api}`;

    static getAmount(resourceId: string, authorizationHeader: string) {
        return HttpClient.get(`${ReactionsService.api}/${resourceId}/amount`, null, authorizationHeader);
    }

    static create(body: any, authorizationHeader: string) {
        return HttpClient.post(`${ReactionsService.api}`, body, authorizationHeader);
    }
}
