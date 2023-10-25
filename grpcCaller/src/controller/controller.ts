import { Request,Response } from "express";
import { providerService } from "../provider/provider.service";
class gprcController {
    constructor(){}
    checkTodo=async (req:Request,res:Response)=>{
        const value={
            number:1,
            text:"shashank"
        }
        let data=await providerService.createTodo(value)
        res.send(data);
    }
}
export const objectController=new gprcController();