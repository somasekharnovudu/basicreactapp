import React,{Component} from 'react';
import "./App.css";
import Person from './Components/Person/Person';
import Radium from 'radium';

class App extends Component{
    state={
        persons:[
            {id:"app1",name:"Max",age:"25"},
            {id:"app2",name:"Manu",age:"28"},
            {id:"app3",name:"Stephine",age:"20"}
        ],
        isPersonsShow:false,
        otherValue:"some other value"
    };
    togglePersonsHandler=()=>{
        var shower=this.state.isPersonsShow;
        this.setState({isPersonsShow:!shower});
    }
    valchanger=(event,id)=>{
        let personIndex=this.state.persons.findIndex(p=>p.id===id);
        var persons=[...this.state.persons];
        persons[personIndex].name=event.target.value;
        this.setState({persons:persons});
    }
    deletePersonHandler=(index)=>{
        let persons=[...this.state.persons];
        persons.splice(index,1);
        this.setState({persons:persons});

    }

    render=()=>{
        let persons=null;
        let buttonClass=[];
        const buttonStyle={
            background:"green",
            color:"white",
            font:"inherit",
            border:"1px solid blue",
            padding :"8px",
            cursor:"pointer"
        };

        if(this.state.isPersonsShow){
            persons=this.state.persons.map((person,index)=>{
                return <Person key={person.id} 
                                clicker={()=>{this.deletePersonHandler(index)}}  
                                name={person.name} 
                                age={person.age}
                                changer={(event)=>{this.valchanger(event,person.id)}}
                        />
            });
            buttonStyle.background="red";
        }
        if(this.state.persons.length<=2){
            buttonClass.push('red')
        }
        if(this.state.persons.length<=1){
            buttonClass.push('bold')
        }


        return(
            <div className="App">
                <h1>Hi, I am React app</h1>
                <p className={buttonClass.join(' ')}>This is really working</p>
                <button style={buttonStyle} className={buttonClass.join(" ")} onClick={this.togglePersonsHandler}>
                    Toggle Persons
                </button>
                {persons}
            </div>
        )
    }
}

export default App;