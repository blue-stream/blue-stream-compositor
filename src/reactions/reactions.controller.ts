import { Request, Response } from 'express';

export class ReactionsController {
    static create(req: Request, res: Response) {
        res.json(req.body);
    }
}
