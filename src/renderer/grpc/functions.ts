// https://github.com/grpc/grpc/blob/v1.35.0/examples/node/static_codegen/greeter_client.js
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import grpc from "@grpc/grpc-js";

const messages = require("./protos/greeter_pb.js");
const services = require("./protos/greeter_grpc_pb.js");

export const GRPC_TARGET = "localhost:50051";

export function sendHello(message: string): void {
  const client = new services.GreeterClient(
    GRPC_TARGET,
    grpc.credentials.createInsecure(),
  );

  const request = new messages.HelloRequest();
  request.setName(message);

  client.sayHello(request, (error: any, response: any): void => {
    console.log("Greeting:", {
      response: response.getMessage(),
      error,
    });
  });
}
