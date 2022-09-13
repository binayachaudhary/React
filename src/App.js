import { Component } from 'react';
import logo from './logo.svg';
import CardList from './components/card_list/card_list.componet';
import SearchBox from './components/search/search_box.componet';
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
      <SearchBox onSearchHadler={onSearchChange} placeholder='Search Box' className='monster_search_box'/>
         <CardList moster={filtersMosters}/>
        
        </header>
      </div>
    );
  }
  
}

export default App;
