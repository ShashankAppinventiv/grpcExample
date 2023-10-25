import { credentials } from "@grpc/grpc-js";
import { GRPCClass } from "./grpc/grpc";
import { firstValueFrom } from "rxjs";

class ProviderService extends GRPCClass{
    private service!:any;
    constructor(){
        super('todo.proto','todoPackage')
        this.loadService()
    }
    loadService() {
        this.service=new this.package.Todo("0.0.0.0:7000",credentials.createInsecure());
    }
    async createTodo(payload:any){
        try{
            const res:any=await firstValueFrom(
                this.invokeService(this.service,'CreateTodo',payload)
            )
            return {...payload}
        }catch(err){
            console.log(err);
        }
    }

}
export const providerService = new ProviderService();