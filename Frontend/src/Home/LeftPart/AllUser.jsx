import User from "./User";

function AllUser() {
  return (
    <div >
      <h1 className="  py-1 text-slate-700 my-1">Message</h1>
     <div className="flex-1 overflow-y-auto my-3 h-[82vh]"  style={{maxHeight:"calc(82vh - 18vh)" }}>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        

     </div>

    
    
    </div>
  );
}

export default AllUser;
