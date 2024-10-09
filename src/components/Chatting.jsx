import { useState } from "react";
import { useSockets } from "../hooks/useSockets";
import { Button, Input } from "antd";
import axios from "axios";
const { TextArea } = Input;

const Chatting = () => {
  const { messages } = useSockets();
  const [message, setMessage] = useState(null);

  return (
    <div>
      <div>
        <TextArea
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
          rows={4}
        />
        <Button
          onClick={async () => {
            if (message.trim()) {
              try {
                // Send message to the server via POST request
                 await axios.post(
                  "http://localhost:8080/api/v1/conversations/with-friends",
                  {
                    message: message,
                  }
                );

                // Clear the input after sending
                setMessage("");
              } catch (error) {
                console.error("Error sending message:", error);
              }
            }
          }}
        >
          Send Message
        </Button>
      </div>
      {messages.reverse().slice(0 ,10).map((message) => {
        return <li key={message.userId}>{message?.message}</li>;
      })}
    </div>
  );
};

export default Chatting;

Chatting.propTypes = {};
