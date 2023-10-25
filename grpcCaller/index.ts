import express,{Express, Router}  from 'express'
import { portNumber } from './src/constants'
import { router } from './src/router/router';
class App{
    private app!:Express;
    private port!:number;
    constructor(){
        this.startApp()
    }
    private startApp(){
        this.app=express()
        this.port=portNumber
        this.loadRouter();
        this.loadGlobalMiddleware();
        this.startServer();
    }
    private loadRouter(){
        this.app.use('/grpc',router.loadRoute())
    }
    private loadGlobalMiddleware(){
        this.app.use(express.json())
    }
    
    private startServer(){
        this.app.listen(this.port,this.callback)
    }
    private callback=()=>{
            console.log(`Server listening on port ${this.port}`)
    }
}
new App()