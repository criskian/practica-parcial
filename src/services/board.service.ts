import { BoardDocument, BoardInput, BoardModel } from "../models/board.model";

class BoardService{
    async create(boardData: BoardInput){
        try{
            boardData.createdAt = new Date();
            const createBoard: BoardDocument = await BoardModel.create(boardData);
            return createBoard;
        }catch(error){
            throw error;
        }
        
    }
    async findAll(): Promise<BoardDocument[]>{
        try{
            const boards : BoardDocument[] = await BoardModel.find();
            return boards;
        }catch(error){
            throw error;
        }
    }
    async findById(id:string){
        try{
            const board = await BoardModel.findById(id);
            return board;
        }catch(error){
            throw error;
        }
    }

    async updateById(id:string, board: BoardInput){
        try{
            const updateBoard : BoardDocument | null = await BoardModel.findByIdAndUpdate(id, board, { returnOriginal : false });
            return updateBoard;
        }catch(error){
            throw error;
        }
    }

    async deleteById(id:string){
        try{
            const deleteBoard : BoardDocument | null = await BoardModel.findByIdAndDelete(id);
            return deleteBoard;
        }catch(error){
            throw error;
        }
    }
}
export const boardService = new BoardService();

