import express, { Express } from "express";
import { db } from "./lib/connectionDB";
import { boardRouter } from "./routes/boards.route";
import { threadRouter } from "./routes/threads.route";

const app: Express = express();

const port: number = Number(process.env.PORT) || 3000;

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use('/board', boardRouter)
app.use('/thread', threadRouter)

db.then(()=>{
    app.listen(port, ()=>{
        console.log(`Server running on ${port} port`)
    })
})