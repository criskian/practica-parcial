import { ThreadDocument, ThreadInput, ThreadModel, ReplyInput } from "../models/thread.model";

class ThreadService{
    async create(threadData: ThreadInput){
        try{
            threadData.createdAt = new Date();
            threadData.replies = [];
            const createThread: ThreadDocument = await ThreadModel.create(threadData);
            return createThread;
        }catch(error){
            throw error;
        }
        
    }
    async findById(id:string){
        try{
            const thread = await ThreadModel.findById(id);
            return thread;
        }catch(error){
            throw error;
        }
    }

    async findByBoardId(boardId:string): Promise<ThreadDocument[]>{
        try{
            const threads : ThreadDocument[] = await ThreadModel.find({ boardId });
            return threads;
        }catch(error){
            throw error;
        }
    }

    async deleteById(id:string){
        try{
            const deleteThread : ThreadDocument | null = await ThreadModel.findByIdAndDelete(id);
            return deleteThread;
        }catch(error){
            throw error;
        }
    }

    async createReply(threadId:string, replyData: ReplyInput){
        try{
            replyData.createdAt = new Date();
            const thread : ThreadDocument | null = await ThreadModel.findByIdAndUpdate(
                threadId, 
                { $push: { replies: replyData } }, 
                { returnOriginal : false }
            );
            return thread;
        }catch(error){
            throw error;
        }
    }
}
export const threadService = new ThreadService();

