import React,{Component} from 'react';
import "./App.css";
import Person from './Components/Person/Person';
import Radium from 'radium';

class App extends Component{
    state={
        persons:[
            {name:"Max",age:"25"},
            {name:"Manu",age:"28"},
            {name:"Stephine",age:"20"}
        ],
        otherValue:"some other value"
    };
    switchNameHandler=(name)=>{
        this.setState({persons:[
                                {name:name,age:"25"},
                                {name:"Manu",age:"28"},
                                {name:"Stephine",age:"23"}
                               ]
                        });  
        console.log(this.state);
    }
    namechangeHandler=(event)=>{
        var persons=[...this.state.persons];
        persons[1].name=event.target.value;
        this.setState({persons:persons});
    }
    render=()=>{
        let buttonStyle={
            background:"white",
            font:"inherit",
            border:"1px solid blue",
            padding :"8px",
            cursor:"pointer",
            transition:"all 2s ease",
            ".hover":{
                transition:"all 2s ease",
                background:"whitegrey"
            }
        };
        return(
            <div className="App">
                <h1>Hi, I am React app</h1>
                <p>This is really working</p>
                <button style={buttonStyle} onClick={this.switchNameHandler.bind(this,"Soma")}>Swicth Name</button>
                <Person clickchanger={()=>{this.switchNameHandler("Sekhar")}} name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person changer={this.namechangeHandler} name={this.state.persons[1].name}  age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name}  age={this.state.persons[2].age}/>
            </div>
        )
    }
}

export default App;