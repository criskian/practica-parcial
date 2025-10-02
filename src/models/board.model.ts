import mongoose from "mongoose";

export interface BoardInput {
    name: string;
    description: string;
    createdAt: Date;
}

export interface BoardDocument extends BoardInput, mongoose.Document{}

const boardSchema = new mongoose.Schema({
    name: {type: String, required : true},
    description: {type: String, required : true},
    createdAt: {type: Date, required : true}

},{collection: "Boards"})

export const BoardModel = 
mongoose.model<BoardDocument>("Board", boardSchema);

