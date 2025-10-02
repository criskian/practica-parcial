import { Request, Response } from "express";
import { ThreadDocument, ThreadInput, ReplyInput } from "../models/thread.model";
import { threadService } from "../services/thread.service";

class ThreadController {
    async create(req: Request, res: Response){
        try{
            const thread = await threadService.create(req.body);
            res.json(thread);
        }catch(error){
            res.json(error);
        }
    }
    async getById( req: Request, res: Response){
        try{
            const id:string = req.params.id;
            const thread = await threadService.findById(id);
            if(thread === null){
                res.status(400).json({message: `Thread ${id} not found`});
            }
            res.json(thread);
        }catch(error){
            res.json(error);
        }
    }
    async getByBoardId( req: Request, res: Response){
        try{
            const boardId:string = req.params.boardId;
            const threads: ThreadDocument[] = await threadService.findByBoardId(boardId);
            res.json(threads);
        }catch(error){
            res.json(error);
        }
    }

    async deleteById(req: Request, res: Response){
        try{
            const id:string = req.params.id;
            const thread: ThreadDocument | null = await threadService.deleteById(id);
            if(thread === null){
                res.status(400).json({message: `Thread ${id} not found`});
            }
            res.json(thread);
        }catch(error){
            res.json(error);
        }
    }

    async createReply(req: Request, res: Response){
        try{
            const threadId:string = req.params.threadId;
            const thread: ThreadDocument | null = await threadService.createReply(threadId, req.body as ReplyInput);
            if(thread === null){
                res.status(400).json({message: `Thread ${threadId} not found`});
            }
            res.json(thread);
        }catch(error){
            res.json(error);
        }
    }
}

export const threadController = new ThreadController();

