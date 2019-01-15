import { Request, Response } from 'express';

export class ReactionsController {
    static getMany(req: Request, res: Response) {
        res.json(req.body);
    }
}
