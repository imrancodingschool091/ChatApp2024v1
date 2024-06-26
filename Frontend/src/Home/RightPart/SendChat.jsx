import { IoSend } from "react-icons/io5";

function SendChat() {
  return (
    <div className="h-[8vh] flex items-center w-[100%] p-2 gap-x-3">
      <input
        type="text"
        placeholder="type here somenting!"
        className="w-[95%] p-5 "
        style={{ border: "0", outline: "0", backgroundColor: "white", }}
      />
      <IoSend className="text-[darkgrey] text-3xl" />
    </div>
  );
}

export default SendChat;
