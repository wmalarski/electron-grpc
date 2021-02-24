/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

const greeterPb = require("./protos/greeter_pb.js");
const greeterGrpcPb = require("./protos/greeter_grpc_pb.js");

export function sendHello(message: string): void {
  console.log("sendHello", { message, greeterPb, greeterGrpcPb });
}
