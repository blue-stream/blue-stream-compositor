import { Request, Response } from 'express';

export class VideosController {
    static getMany(req: Request, res: Response) {
        res.json(req.body);
    }
}
