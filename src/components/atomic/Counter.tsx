import { type } from "os";
import React, { useState } from "react";
import "./Counter.css"

type CounterProps = {
    initialValue: number;
}

type BtnState = "normal"| "warning";

export const Counter : React.FC<CounterProps> = ({initialValue}) => {
    const [count, setCount] = useState<number>(initialValue);
    const [state, setState] = useState("normal");

    const HandleClick= () =>{
        setCount(count-1);
        if(count===3){
            setState('warning')
        }
    }

    return <button className={`${state}Btn`} type="button" onClick={HandleClick}>{count}</button>;
};