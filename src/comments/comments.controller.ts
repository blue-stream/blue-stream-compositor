import { Request, Response } from 'express';
import { VideosService } from '../videos/videos.service';
import { CommentsService } from './comments.service';

export class CommentsController {
    static async getRootComments(req: Request, res: Response) {
        const comments = await CommentsService.getRoot(req.query, req.headers.authorization!);
        // Add users with RPC
        // Add reactions with RPC
        res.json(comments);
    }

    static async getReplies(req: Request, res: Response) {
        const replies = await CommentsService.getReplies(req.params.parent, req.headers.authorization!);
        // Add users with RPC
        // Add reactions with RPC
        res.json(replies);
    }

    static async create(req: Request, res: Response) {
        await VideosService.doesExist(req.body.resource);
        res.json(await CommentsService.create(req.body));
    }
}
