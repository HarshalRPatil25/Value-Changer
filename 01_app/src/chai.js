import React,{useState} from'react'
import './chai.css';
const Chai=()=>{
    let [Counter,setCounter]= useState(0);
    const addValue=()=>{
        Counter+=1;
        setCounter(Counter);
    }
    const  removeValue=()=>{
        if(Counter>0){
            Counter-=1;
        setCounter(Counter);
        }
        else{
            alert("Value is 0. so go to bed Buddy")
        }

    }






    return(
        <div>
            <div className='container'>
            <h1>Welcome To React....</h1>
            <h2>Project 2</h2>
             <h3>Value    {Counter}</h3>
             <div className='btn'>
                  <button onClick={addValue}>Add Value</button>
                  <button onClick={removeValue}>Remove Value</button>
             </div>

        </div>
        </div>
    )
}
export default Chai