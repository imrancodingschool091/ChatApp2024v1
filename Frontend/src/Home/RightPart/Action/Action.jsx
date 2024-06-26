import "./Action.css"
import { MdAddCall } from "react-icons/md";
import { FaVideo } from "react-icons/fa6";

function Action() {
  return (
    <div className="container h-[10vh]" >
        <div className="infoAndStaus">
            <h1 style={{color:"darkgray",fontSize:"1.5rem",fontFamily:"Poppins"}}>Vikash</h1>
            <p style={{color:"green"}}>Online</p>
        </div>
        <div className="actions">
            <MdAddCall className="text-blue-700 text-3xl cursor-pointer hover:bg-slate-800 rounded-full "/>
            <FaVideo  className="text-blue-700 text-3xl cursor-pointer hover:bg-slate-800 rounded-full " />
          


        </div>


    </div>
  )
}

export default Action