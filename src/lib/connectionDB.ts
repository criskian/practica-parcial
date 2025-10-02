import mongoose from "mongoose";

const connectionString = `mongodb://root:password@localhost:27017`;

export const db = mongoose.connect(connectionString, 
    {dbName : 'ICESI'}
).then(()=>{
    console.log("Connected to mongoDB")
}).catch((error)=>{
    console.log("🚀 ~ :8 ~ error:", error)
})
