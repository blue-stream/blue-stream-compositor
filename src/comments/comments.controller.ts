import { Request, Response } from 'express';
import { VideosService } from '../videos/videos.service';
import { CommentsService } from './comments.service';

export class CommentsController {
    static getRootComments(req: Request, res: Response) {
        res.json(req.body);
    }

    static async create(req: Request, res: Response) {
        await VideosService.doesExist(req.body.resource);

        res.json(await CommentsService.create(req.body));
    }
}
