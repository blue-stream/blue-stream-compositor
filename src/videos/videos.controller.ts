import { Request, Response } from 'express';
import { ChannelsService } from '../channels/channels.service';
import { VideosService } from './videos.service';
import { UsersService } from '../users/users.service';
import { ChannelsRpc } from '../channels/channels.rpc';

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

    static async getMany(req: Request, res: Response) {
        let videos = await VideosService.getMany(req.query, req.headers.authorization!);
        const channelsIds = videos.map((channelId: string) => videos.channel);

        try {
            const channels = await ChannelsRpc.getChannelsByIds(channelsIds);
            videos = videos.map((video: any) => {
                return {
                    ...video,
                    channel: channels[video.channel],
                };
            });
        } finally {
            return res.json(videos);
        }
    }

    static async create(req: Request, res: Response) {
        await ChannelsService.doesExist(req.query.channel);
        res.json(await VideosService.create(req.body));
    }
}
