import { Request, Response } from 'express';
import { ChannelsService } from '../channels/channels.service';
import { VideosService } from './videos.service';
import { UsersService } from '../users/users.service';

export class VideosController {
    static async get(req: Request, res: Response) {
        const returnedResponses = await Promise.all([
            ChannelsService.get(req.query.channel, req.headers.authorization!),
            VideosService.get(req.params.id, req.headers.authorization!),
            // UsersManager.get(req.user.id),
        ]);

        const [channel, video]: any = returnedResponses;
        console.log(video);
        console.log(channel);
        // video.user = user;

        res.json({ ...JSON.parse(video), channel: JSON.parse(channel) });
    }

    static async create(req: Request, res: Response) {
        const doesExist = await ChannelsService.doesExist(req.query.channel);
        if (doesExist) {
            res.json(await VideosService.create(req.body));
        } else {
            res.status(404);
        }
    }
}
