import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    // this.state = {
    //   name: 'Binaya', //State is used
    // };
    this.state = {
      name: {firstname:'Binaya', lastname:'Chaudhary'},
      company:'Ironhide'
    };
   
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello {this.state.name.firstname} {this.state.name.lastname} 
             at {this.state.company}
          </p>
          <button onClick={()=> 
          {
            this.setState(()=>{
              return {
                name:{firstname:'Sonybinaya',lastname:'Chaudhary'}
              }
            })
          }
          }>Change Name</button>
        </header>
      </div>
    );
  }
  
}

export default App;
