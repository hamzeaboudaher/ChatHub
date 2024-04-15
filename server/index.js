import express from "express";
import http from 'http';
import cors from 'cors';



const app = express();
const server = http.createServer(app);


// Middleware
app.use(cors());
app.use(express.json());



server.listen(3001, () => {
     console.log("Server is running");
});