import axios from "axios";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { io } from 'socket.io-client';
import { toast } from 'sonner'


const SOCKET_SERVER_URL = "http://localhost:8080"; // Replace with your server URL

export const useSockets = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);



  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/v1/conversations/with-friends")
      setMessages(res?.data?.data)
    } catch (error) {
      console.log("somethings wrong")
    }
  }


  useLayoutEffect(() => {
    if (messages.length === 0) {
      fetchData()
    }
  })


  useEffect(() => {
    socketRef.current = io(SOCKET_SERVER_URL);
    setSocket(socketRef.current);

    socketRef.current.on("conversations", (message) => {
      toast.info('Oh Neta message asese');
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = (msg) => {
    if (socket) {
      socket.emit("conversations", msg);
    }
  };

  return { messages, sendMessage };
}