
import { IoCall } from "react-icons/io5";
function User() {
  return (
   <div className="hover:bg-slate-200 duration-300 cursor-pointer">

    <div className="userFlex">

        
    <div>
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>

        <div>
            <h2 className=" text-xl font-semibold text-[#8f8c8c]">Prithvi Raj</h2>
        </div>

        <div>
            <IoCall className="text-blue-800 text-xl"/>
        </div>


    </div>
    <hr />
   </div>
  )
}

export default User