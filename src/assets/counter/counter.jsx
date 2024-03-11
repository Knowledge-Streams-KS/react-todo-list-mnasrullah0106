import { useState } from "react";
const Counter = () =>{
    const [value, setValue] = useState(10);

   const handleIncrement = () =>{
    setValue(value + 1);
    
    
   };
   const handleDecrement = () =>{
   if(value > 0){
    setValue(value - 1);
   };
    
   };
   return(  
    <div>
    {/* ternary operator */}
    {/* we can use fragment (<> </> )tag if we canot style in the div tag */}
        <h1>Value {value > 0 ? value : "No item in the cart"}</h1>
        <button onClick={() => handleIncrement(5)}>Increment</button>
<br/><br/>
           {/* {value > 0 ?<button onClick={HandleClick}>Decrement</button> : <> </>} */}
           {/* short circutting */}
           {value > 0 && <button onClick={handleDecrement}>Decrement</button>}
    </div>
   );
   
};
export default Counter;
 <div>
    {it}
 </div>