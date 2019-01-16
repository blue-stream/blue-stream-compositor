import { Request, Response } from 'express';

export class ChannelsController {
    static getMany(req: Request, res: Response) {
        res.json(req.body);
    }
}
