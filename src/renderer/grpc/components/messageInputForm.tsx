import React, { useState } from "react";

export interface MessageInputFormResult {
  message: string;
}

export interface MessageInputFormProps {
  onSubmit: (result: MessageInputFormResult) => void;
}

export default function MessageInputForm(
  props: MessageInputFormProps,
): JSX.Element {
  const { onSubmit } = props;

  const [message, setMessage] = useState<string>("");

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        onSubmit({ message });
      }}
    >
      <input
        value={message}
        onChange={event => setMessage(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
