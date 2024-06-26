import AllUser from "./AllUser"
import Logout from "./Logout"
import SearchUser from "./SearchUser/SearchUser"




function Left() {
  return (
    <div  className="w-[20%] bg-white px-3 py- h-screen[100vh] left"   >

 <SearchUser/>
 <hr />
 <AllUser/>
 <hr  />
 <Logout/>



    </div>
  )
}

export default Left