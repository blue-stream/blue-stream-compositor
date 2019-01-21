import { Request, Response } from 'express';
import { VideosService } from '../videos/videos.service';
import { CommentsService } from './comments.service';

export class CommentsController {
    static async getRootComments(req: Request, res: Response) {
        res.json(await CommentsService.getRoot(req.query, req.headers.authorization!));
    }

    static async create(req: Request, res: Response) {
        await VideosService.doesExist(req.body.resource);

        res.json(await CommentsService.create(req.body));
    }
}
