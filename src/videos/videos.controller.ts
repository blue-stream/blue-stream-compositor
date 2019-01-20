import { Request, Response } from 'express';
import { ChannelsService } from '../channels/channels.service';
import { VideosService } from './videos.service';
import { UsersService } from '../users/users.service';

export class VideosController {
    static async get(req: Request, res: Response) {
        const returnedResponses = await Promise.all([
            VideosService.get(req.params.id, req.headers.authorization!),
            UsersService.get(req.user.id),
        ]);

        const [video, user]: any = returnedResponses;
        const channel = await ChannelsService.get(video.channel, req.headers.authorization!);

        res.json({
            ...JSON.parse(video),
            channel: JSON.parse(channel),
            user: JSON.parse(user),
        });
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
