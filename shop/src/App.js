/* eslint-disable */
import logo from './logo.svg';
import {Navbar , Container ,Nav , Button } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import Data from './data.js';
import { Link ,Route , Switch} from 'react-router-dom';
import Detail from './Detail.js';


//중요한 데이터는 맨 상위의 컴포넌트에 보관할 것 (국룰)
function App() {

  let [shoes , setShoes] = useState(Data);
  //console.log(shoes);



  return (
    <div className="App">
       <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">SHOP</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <Nav.Link ><Link to="/detail">Detail</Link></Nav.Link>
          {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
        </Container>
      </Navbar>

     

      <Switch>
        <Route exact path="/">
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
        </Route>

        <Route path="/detail/:id"> {/* url parameter */}
          <Detail shoes={shoes}/>
        </Route>
      </Switch>
      {/* <Route path="/" component={Modal} ></Route> */}
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
