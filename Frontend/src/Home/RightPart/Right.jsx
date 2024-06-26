import Action from "./Action/Action"
import Messages from "./Message/Messages"
import SendChat from "./SendChat"



function Right() {
  return (
    <div className="w-[80%]  bg-[#f6f6f6]  px-3 py-2 right">
    <Action/>
    <hr />
    <Messages/>
    <hr />
    <SendChat/>
    


    </div>
  )
}

export default Right