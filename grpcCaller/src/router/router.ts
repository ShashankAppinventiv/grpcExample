import {Router} from 'express'
import { objectController } from '../controller/controller';
class RouterController {
    private router!:Router
  constructor() {
    this.router=Router()
  }
  loadRoute(){
    this.router.get('/todo',objectController.checkTodo)
    return this.router
  }
}
export const router = new RouterController();
