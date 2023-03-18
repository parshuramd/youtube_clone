import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helpers";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      //   console.log("API call");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + " 🚀",
        })
      );
    }, 1500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div className="w-full h-[400px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <div>
        <form
          className="w-full p-2 ml-2 border border-black my-2"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "Parshuram Dadas",
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }}
        >
          <input
            className="px-2 w-3/4"
            type="text"
            value={liveMessage}
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
          />
          <button className="px-2 mx-2 bg-green-100">Send</button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
