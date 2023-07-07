import express from  'express'
import http from "http";
import expressConfig from "./src/framework/webserver/express.js";
import serverConfig from "./src/framework/webserver/server.js";
import connectDB from "./src/framework/database/connection.js";
import routes from './src/framework/webserver/routes/index.js';
import config from './src/config/config.js';
import { Server } from 'socket.io';
import socketConfig from './src/framework/WebSocket/socket.js';
const app=express()
const server=http.createServer(app)
const io = new Server(server,{cors:{
    origin:"https://127.0.0.1:5173",
    methods:["GET","POST"]
}});

connectDB(config)
expressConfig(app);
serverConfig(app);
routes(app,express)
socketConfig(io);




app.all('*',(req,res,next)=>{
    next(new Error('not found'))
})

serverConfig(server,config).startServer()