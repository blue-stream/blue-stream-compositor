import { Request, Response } from 'express';
import { CommentsService } from '../comments/comments.service';
import { VideosService } from '../videos/videos.service';
import { ReactionsService } from './reactions.service';

export class ReactionsController {
    static async create(req: Request, res: Response) {
        if (req.body.resourceType === 'COMMENT') {
            await CommentsService.doesExist(req.body.resource);
        } else if (req.body.resourceType === 'VIDEO') {
            await VideosService.doesExist(req.body.resource);
        }

        res.json(await ReactionsService.create(req.body));
    }
}
