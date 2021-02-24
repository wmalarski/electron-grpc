import React from "react";
import MessageInputForm from "../grpc/components/messageInputForm";
import { sendHello } from "../grpc/functions";

export default function Home(): JSX.Element {
  return (
    <div className="app">
      <h4>Welcome to React, Electron and Typescript and Lol</h4>
      <p>Hello</p>
      <MessageInputForm onSubmit={result => sendHello(result.message)} />
    </div>
  );
}
