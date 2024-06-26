import { BiLogOut } from "react-icons/bi";
import { useAuth } from "../../Context/AuthProvider";
import { toast } from "react-toastify";

function Logout() {
  let [,setAuthUser]=useAuth()

  const logoutHandler=()=>{
    
    
    
    toast.success("Logout..",{
      position:"top-center"
    })
    setTimeout(() => {

      window.location.reload()
      localStorage.removeItem("SChatApp")
    setAuthUser(null)
      
    }, 1000);

  }
  return (
    <div className=" w-[100%] flex items-center justify-start h-[8vh]" >

      <BiLogOut className="text-slate-700 text-4xl hover:bg-black rounded-full" onClick={logoutHandler}/>
    

    </div>
  )
}

export default Logout