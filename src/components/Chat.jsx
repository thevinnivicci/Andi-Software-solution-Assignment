import React from "react";
import { BsFillChatFill } from "react-icons/bs";

const Chat = () => {
  return (
    <div className="w-full">
      <div className="bg-blue-600 w-16 h-16 absolute bottom-10 right-10 flex items-center justify-center rounded-full">
        <BsFillChatFill className="text-white text-3xl" />
      </div>
    </div>
  );
};

export default Chat;
