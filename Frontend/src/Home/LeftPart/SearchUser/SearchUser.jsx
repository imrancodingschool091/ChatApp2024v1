
import "./SearchUser.css"
import { CiSearch } from "react-icons/ci";

function SearchUser() {
  return (
    <div className="my-3 mb-9 h-[10vh]">
        <h1> <span style={{color:"crimson",fontSize:"1.5rem"}}>S.</span>Talk</h1>
        <div className="searchBox">
            
            <input type="text" placeholder="Suman.." />
            <CiSearch className="searchIcon"/>
        </div>
      
    </div>
  )
}

export default SearchUser