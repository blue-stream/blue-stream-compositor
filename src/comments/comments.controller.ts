import { Request, Response } from 'express';
import { VideosService } from '../videos/videos.service';
import { CommentsService } from './comments.service';
import { UsersRpc } from '../users/users.rpc';
import { ReactionsRpc } from '../reactions/reactions.rpc';

export class CommentsController {
    static async getRootComments(req: Request, res: Response) {
        let comments = await CommentsService.getRoot(req.query, req.headers.authorization!);

        const usersIds = comments.map((comment: any) => comment.user);
        const reactionsResources = comments.map((comment: any) => comment.id);

        try {
            const users = await UsersRpc.getUsersByIds(usersIds);
            const reactions = await ReactionsRpc.getReactionsByResources(reactionsResources);

            comments = comments.map((comment: any) => {
                return {
                    ...comment,
                    user: users[comment.user],
                    reactions: reactions[comment.id],
                };
            });
        } finally {
            return res.json(comments);
        }
    }

    static async getReplies(req: Request, res: Response) {
        let comments = await CommentsService.getReplies(req.params.parent, req.headers.authorization!);

        const usersIds = comments.map((comment: any) => comment.user);
        const reactionsResources = comments.map((comment: any) => comment.id);

        try {
            const users = await UsersRpc.getUsersByIds(usersIds);
            const reactions = await ReactionsRpc.getReactionsByResources(reactionsResources);

            comments = comments.map((comment: any) => {
                return {
                    ...comment,
                    user: users[comment.user],
                    reactions: reactions[comment.id],
                };
            });
        } finally {
            return res.json(comments);
        }
    }

    static async create(req: Request, res: Response) {
        await VideosService.doesExist(req.body.resource);
        res.json(await CommentsService.create(req.body));
    }
}
