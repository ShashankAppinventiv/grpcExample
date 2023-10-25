import { Server } from "@grpc/grpc-js";
import { grpcController } from "../controller/grpcController";

class Router{
    constructor(){}
    public loadService(grpcServer:Server,todoPackage:any){
        grpcServer.addService(todoPackage.Todo.service,{
            CreateTodo:grpcController.showData
        })
    }
}
export const router =new Router();