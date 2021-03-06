import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const products = [
    {name : 'Photoshop', price : '$90.99'},
    {name : 'illustrator', price: '$39.88'},
    {name : 'pdf reader', price: '20.99'}
]
  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
        <Counter></Counter>
        <Name name="Jasim"></Name>
        <Name name="Karim"></Name>
        <Name name="Jamil"></Name>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <MovieCounter></MovieCounter>
       
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}



function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}


function Name(props) {
  const style = {
    border:'2px solid yellow',
    margin: '20px', 
    padding:'20px'
  }
  return(
    <div style={style}>
      <h1>Hello Word</h1>
      <p>My name is {props.name}</p>
    </div>
  )
}





function Product(props) {
  const productStyle={
    border:'1px solid gray',
    borderRedius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left',
    margin:'20px'
    
  }
  return(
    <div style={productStyle}>
      <h5>{props.product.name}</h5>
      <h4>{props.product.price}</h4>
      <button>Buy Now</button>
    </div>
  )
}
function MovieCounter() {
  const nice = {
    marginTop: '5rem'
  }
  const [count, setCount] = useState(5);
  const handleClick = () => setCount(count + 1);
  return(
    <div style={nice}>
      <button onClick={handleClick}>Add movie</button>
      <h3>Number of movies: {count}</h3>
    </div>
  )
}
export default App;
