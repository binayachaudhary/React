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

      moster:[
        
      ],
      searchField:''
      // name: {firstname:'Binaya', lastname:'Chaudhary'},
      // company:'Ironhide'
    };
    console.log('1');
   
  }
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(()=> {
      return { searchField}; 
    });
 }

  componentDidMount(){
    console.log('2');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return {moster: users}
    },
    ));
  }
  render() {
    const {moster,searchField}=this.state;
    const {onSearchChange}= this;
    const filtersMosters = moster.filter((moster)=> {
      return moster.name.toLocaleLowerCase().includes(searchField);
    }) 
 
  
    return (
      <div className="App">
        <header className="App-header">
         <input
         className='search_box'
         type='search'
         placeholder='Search Monsters'
         onChange={onSearchChange}
         />
          {filtersMosters.map((moster) => {
            return <h1 key={moster.id}>{moster.name}</h1>;
          })}
        
        </header>
      </div>
    );
  }
  
}

export default App;
