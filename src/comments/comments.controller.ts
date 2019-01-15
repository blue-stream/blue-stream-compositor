import { Request, Response } from 'express';

export class CommentsController {
    static getMany(req: Request, res: Response) {
        res.json(req.body);
    }
}
