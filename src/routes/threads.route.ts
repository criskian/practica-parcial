import { Router } from "express";
import { threadController } from "../controllers/thread.controller.js";

export const threadRouter = Router();

threadRouter.post('/create', threadController.create);
threadRouter.get('/:id', threadController.getById);
threadRouter.get('/board/:boardId', threadController.getByBoardId);
threadRouter.delete('/delete/:id', threadController.deleteById);
threadRouter.post('/reply/:threadId', threadController.createReply);



