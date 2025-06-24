
import './counterApp.css'; 
import { useState} from 'react';  //hook useState


interface MyProp {
    value: number
}

export const CounterApp = ({value}: MyProp) => {
    const [counter, setCounter] = useState(value); //Aqui se maneja el estado del componente

    const addOne=()=>{
        setCounter(counter+1);
    }
    const substractOne=()=>{
        setCounter((c)=>c-1); //esta es otra forma
    }


    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter}</h2>  

            <button className="customButtom" onClick={addOne}>+1</button>
            <button className="customButtom m-l" onClick={substractOne}>-1</button>
            <button className="customButtom m-l" onClick={()=>setCounter(value)}>Reset</button>

        
        </>

    )
}   




