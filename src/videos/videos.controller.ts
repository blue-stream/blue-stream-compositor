import { Request, Response } from 'express';
import { ChannelsManager } from '../channels/channels.manager';
import { VideosManager } from './videos.manager';
import { UsersManager } from '../users/users.manager';

export class VideosController {
    static async get(req: Request, res: Response) {
        const returnedResponses = await Promise.all([
            ChannelsManager.get(req.query.channel, req.headers.authorization!),
            VideosManager.get(req.params.id, req.headers.authorization!),
            // UsersManager.get(req.user.id),
        ]);

        const [channel, video]: any = returnedResponses;
        console.log(video);
        console.log(channel);
        // video.user = user;

        res.json({ ...JSON.parse(video), channel: JSON.parse(channel) });
    }

    static async create(req: Request, res: Response) {
        const doesExist = await ChannelsManager.doesExist(req.query.channel);
        if (doesExist) {
            res.json(await VideosManager.create(req.body));
        } else {
            res.status(404);
        }
    }
}
