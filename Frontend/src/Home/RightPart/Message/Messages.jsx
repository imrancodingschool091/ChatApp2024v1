import Message from "./Message"


function Messages() {
  return (
    <div className="flex-1 overflow-y-auto my-3 h-[88vh]"  style={{maxHeight:"calc(88vh - 12vh)" }}>

    <div className="px-7 py-4">

        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>


    </div>



    </div>
  )
}

export default Messages