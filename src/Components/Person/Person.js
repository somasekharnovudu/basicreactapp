import React from 'react';
import './Person.css';


const Person=(props)=>{
    

    return(
            <div  className="Person">
                <p onClick={props.clicker}>I am {props.name} and i am {props.age}</p>
                <input type="text" onChange={props.changer} className="Mychanger" value={props.name}/>
            </div>
    )
}

export default Person;