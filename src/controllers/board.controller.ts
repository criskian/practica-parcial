import { Request, Response } from "express";
import { BoardDocument, BoardInput } from "../models/board.model";
import { boardService } from "../services/board.service";

class BoardController {
    async create(req: Request, res: Response){
        try{
            const board = await boardService.create(req.body);
            res.json(board);
        }catch(error){
            res.json(error);
        }
    }
    async getAll( req: Request, res: Response){
        try{
            const boards: BoardDocument[] = await boardService.findAll();
            res.json(boards);
        }catch(error){
            res.json(error);
        }
    }
    async getById( req: Request, res: Response){
        try{
            const id:string = req.params.id;
            const board = await boardService.findById(id);
            if(board === null){
                res.status(400).json({message: `Board ${id} not found`});
            }
            res.json(board);
        }catch(error){
            res.json(error);
        }
    }

    async updateById(req: Request, res: Response){
        try{
            const id:string = req.params.id;
            const board: BoardDocument | null = await boardService.updateById(id, req.body as BoardInput);
            if(board === null){
                res.status(400).json({message: `Board ${id} not found`});
            }
            res.json(board);
        }catch(error){
            res.json(error);
        }
    }

    async deleteById(req: Request, res: Response){
        try{
            const id:string = req.params.id;
            const board: BoardDocument | null = await boardService.deleteById(id);
            if(board === null){
                res.status(400).json({message: `Board ${id} not found`});
            }
            res.json(board);
        }catch(error){
            res.json(error);
        }
    }
}

export const boardController = new BoardController();

