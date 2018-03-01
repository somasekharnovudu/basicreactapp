import React from 'react';
import './Person.css';
import Radium  from 'radium';


const Person=(props)=>{
    const style={
        '@media (min-width: 500px)':{
            width:"450px"
        }
    }

    return(
            <div  className="Person" style={style}>
                <p onClick={props.clicker}>I am {props.name} and i am {props.age}</p>
                <input type="text" onChange={props.changer} className="Mychanger" value={props.name}/>
            </div>
    )
}

export default Radium(Person);