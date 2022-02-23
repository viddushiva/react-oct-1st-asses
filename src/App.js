// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import Clas from './Components/Clas';
import Functi from './Components/Functi';
// import {Functi,Sum,Sub,Mul} from './Components/Functi';
// import Second from './Components/Second';
class App extends Component{
 
state={
  displayFunction:false,
  displayClass:false
}
displayFunctio=()=>{
  this.setState({
    displayFunction:!this.state.displayFunction
  })
}
displayClass=()=>{
  this.setState(
    {
      displayClass:!this.state.displayClass
    }
  )
}
render(){
  
  return (
    <div className="App">
        <h1 className='one'> Styling using functional and class component</h1>

   
     <button className="first" onClick={this.displayFunctio}>to see styling in functional component</button>

     <button className="biu" onClick={this.displayClass} >to see styling in class component</button>
     {this.state.displayFunction?<Functi/>:<div>there is no functional component</div>}
     {this.state.displayClass?<Clas/>:<div>there is no class component</div>}



    </div>
  )
}
}

export default App;
