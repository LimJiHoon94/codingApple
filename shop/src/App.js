/* eslint-disable */
import logo from './logo.svg';
import {Navbar , Container ,Nav , Button } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import Data from './data.js'
import data from './data.js';



function App() {

  let [shoes , setShoes] = useState(Data);
  //console.log(shoes);



  return (
    <div className="App">
       <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">SHOP</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <div className="jumboTron">
        <h3>30% Season Off</h3>
        <p> 
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab eveniet temporibus ipsam corrupti nulla 
          perferendis est eligendi laboriosam expedita atque rerum, voluptatibus similique?
        </p>
        <Button variant="primary">Learn more</Button>{' '}
      </div>
     
      <div className="container">
        <div className="row">
         {  
            shoes.map((shoes , i )=>{
              return <ShoesItems shoes={shoes} i={i} key={i} />
            })
          } 
        </div>
      </div>
    </div>
  );
}

function ShoesItems(props){
  return(
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes"+ (props.i + 1) +".jpg"} width="100%"/>  
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}원</p>
    </div>
  )

}

export default App;
