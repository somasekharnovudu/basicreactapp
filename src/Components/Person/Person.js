import React , {Component} from 'react';
import './Person.css';

const Person=(props)=>{

    return(
        <div className="Person">
           <p>I am {props.name} and i am {props.age}</p>
        </div>
    )
}

export default Person;