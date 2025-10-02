import mongoose from "mongoose";

export interface ReplyInput {
    message: string;
    createdAt: Date;
}

export interface ThreadInput {
    title: string;
    content: string;
    createdAt: Date;
    boardId: mongoose.Types.ObjectId;
    replies: ReplyInput[];
}

export interface ThreadDocument extends ThreadInput, mongoose.Document{}

const replySchema = new mongoose.Schema({
    message: {type: String, required : true},
    createdAt: {type: Date, required : true}
}, {_id: false})

const threadSchema = new mongoose.Schema({
    title: {type: String, required : true},
    content: {type: String, required : true},
    createdAt: {type: Date, required : true},
    boardId: {type: mongoose.Schema.Types.ObjectId, ref: 'Board', required : true},
    replies: [replySchema]

},{collection: "Threads"})

export const ThreadModel = 
mongoose.model<ThreadDocument>("Thread", threadSchema);

