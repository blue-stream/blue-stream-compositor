import { Request, Response } from 'express';

export class CommentsController {
    static getRootComments(req: Request, res: Response) {
        res.json(req.body);
    }
}
