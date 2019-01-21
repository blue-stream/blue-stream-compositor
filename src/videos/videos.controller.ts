import { Request, Response } from 'express';
import { ChannelsService } from '../channels/channels.service';
import { VideosService } from './videos.service';
import { UsersService } from '../users/users.service';

export class VideosController {
    static async get(req: Request, res: Response) {
        const returnedResponses = await Promise.all([
            VideosService.get(req.params.id, req.headers.authorization!),
          //  UsersService.get(req.user.id),
        ]);

        const video = returnedResponses[0];
        const channel = await ChannelsService.get(video.channel, req.headers.authorization!);

        res.json({
            ...video,
            channel,
        //    user: JSON.parse(user),
        });
    }

    static async create(req: Request, res: Response) {
        await ChannelsService.doesExist(req.query.channel);
        res.json(await VideosService.create(req.body));
    }
}
