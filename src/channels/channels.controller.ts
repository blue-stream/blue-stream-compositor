import { Request, Response } from 'express';
import { ChannelsService } from './channels.service';

export class ChannelsController {
    static async getMany(req: Request, res: Response) {
        const channels = await ChannelsService.getMany(req.query, req.headers.authorization!);
        // Add views
        res.json(channels);
    }
}
