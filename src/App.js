import { Component } from 'react';
import './App.css';
//import fetch from 'cross-fetch';
import axios from 'axios';


class App extends Component{
  componentDidMount(){

      //Get using cross-fetch
      // fetch('https://jsonplaceholder.typicode.com/posts')
      // .then(response => response.json())
      // .then(data => console.log(data));

    //Get using axis
    //  axios.get('http://localhost:3001/dishes')
    // .then(response => response.data)
    // .then(data => console.log(data))
    // .catch(error =>console.log(error.message));

    //Post
  //   axios.post('http://localhost:3001/dishes', {name: "Momo", price: "45"})
  //  .then(response => console.log(response));
  
  //Put
  // axios.put('http://localhost:3001/dishes/0', {name: "Burger", price: "80"})
  // .then(response => console.log(response));

  //Delete
  // axios.delete('http://localhost:3001/dishes/0')
  // .then(response => console.log(response));
  
  }

  render(){
  return (
    <div className="App">
    <h1>API Process</h1>
    </div>
  );
 }
}

export default App;
