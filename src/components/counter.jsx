import { useState } from "react";
import "./counter.css"

const Counter = (props) => {
const [value, setValue] = useState(0);
const [inputNum, setinputNum] = useState(0); 
const handleIncrement = (param)=>{
    setValue (value + param);
};
const handleDecrement = (param) => {
    if(value > 0){
        setValue(value - param);
    }
};
const handleinputChange = (event) => {
    const num = Number(event.target.value);
    setinputNum(num);
}


    return(
        <div className="container">
        <h1>Item Name: {props.item.name}</h1>
        <h1>Rating: {props.item.rating}</h1>

        <h1 className={value > 0? "nonZeroHeading":"zeroHeading"}>
            Count: {value > 0? value:"No Item in the Cart"}
        </h1>
        <input
            onChange={handleinputChange}
            type="number"
            placeholder="To be Increment/Decrement"
         /><br/><br/> 


        <button onClick={() => handleIncrement(inputNum)}>Increment</button><br/><br/>
        <button onClick={() => handleDecrement(inputNum)}>Decrement</button>
        
        </div>
    );
};
export  default Counter;