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
        isPersonsShow:false,
        otherValue:"some other value"
    };
    togglePersonsHandler=()=>{
        var shower=this.state.isPersonsShow;
        this.setState({isPersonsShow:!shower});
    }
    valchanger=(event,index)=>{
        let persons=this.state.persons;
        persons[index].name=event.target.value;
        this.setState({
                            persons:persons
                        });
    }

    render=()=>{
        let persons=null;
        if(this.state.isPersonsShow){
            persons=this.state.persons.map((person,index)=>{
                return <Person key={index} 
                                changer={(event,key)=>{this.valchanger(event,index)}}  
                                name={person.name} 
                                age={person.age}
                        />
            });
        }

        const buttonStyle={
            background:"white",
            font:"inherit",
            border:"1px solid blue",
            padding :"8px",
            cursor:"pointer"
        };

        return(
            <div className="App">
                <h1>Hi, I am React app</h1>
                <p>This is really working</p>
                <button style={buttonStyle} onClick={this.togglePersonsHandler}>Swicth Name</button>
                {persons}
            </div>
        )
    }
}

export default App;