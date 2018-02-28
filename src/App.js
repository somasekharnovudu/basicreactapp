import React,{Component} from 'react';
import "./App.css";
import Person from './Components/Person/Person';

class App extends Component{

    render=()=>{
        return(
            <div className="App">
                <h1>Hi, I am React app</h1>
                <p>This is really working</p>
                <Person name="soma" age="22"/>
                <Person name="manu" age="28"/>
                <Person name="stephine" age="26"/>
            </div>
        )
    }
}

export default App;