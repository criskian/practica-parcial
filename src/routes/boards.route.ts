import { Router } from "express";
import { boardController } from "../controllers/board.controller.js";

export const boardRouter = Router();

boardRouter.post('/create', boardController.create);
boardRouter.get('/', boardController.getAll);
boardRouter.get('/:id', boardController.getById);
boardRouter.put('/update/:id', boardController.updateById);
boardRouter.delete('/delete/:id', boardController.deleteById);



