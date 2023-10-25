import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";

class GrpcController {
  constructor() {}
  showData(req: ServerUnaryCall<any, any>, res: sendUnaryData<any>) {
    try {
      console.log(req.request);
      res(null, req.request);
    } catch (err) {
      res(null, err);
    }
  }
}
export const grpcController=new GrpcController();