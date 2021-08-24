/* eslint-disable */
import logo from './logo.svg';
import {Navbar , Container ,Nav , Button , Spinner } from 'react-bootstrap';
import './App.css';
import { useContext, useState } from 'react';
import Data from './data.js';
import { Link ,Route , Switch} from 'react-router-dom';
import Detail from './Detail.js';
import axios from 'axios';
import React from 'react';
import Cart from './Cart';





//context API 1
export let 재고context = React.createContext();




//중요한 데이터는 맨 상위의 컴포넌트에 보관할 것 (국룰)
function App() {

  let [shoes , setShoes] = useState(Data);
  //console.log(shoes);
  let [loding , setLoding] = useState(false);
  let [재고 , 재고변경] = useState([10,11,12]);



  return (
    <div className="App">
       <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">SHOP</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/detail/0">Detail </Nav.Link>
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
            {/* //context API 2 */}
            <재고context.Provider value={재고}>
              <div className="row">
                {  
                  shoes.map((shoes , i )=>{
                    return <ShoesItems shoes={shoes} i={i} key={i} />
                  })
                } 
              </div>
              { loding === true ? (<Spinner animation="border" variant="primary" />) : null  }
            </재고context.Provider>
            <br/>


            <button className="btn btn-primary" onClick={()=>{
              //axios POST 요청 예제 
             /*  
             axios.post('서버URL' , {id : 'codingapple' , pw : 1234})
              .then(); 
              
              */


              //로딩중 UI 생성
              setLoding(true);
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                //로딩중 UI 삭제
                setLoding(false);
                setShoes([...shoes , ...result.data ]);
                console.log(shoes) 
              })//성공
              .catch(()=>{
                //로딩중 UI 삭제
                setLoding(false);
                console.log('실패');
              })//실패
            }}>더보기</button>
          </div>
        </Route>

        <Route path="/detail/:id"> {/* url parameter */}
        {/* Context API */}
          <재고context.Provider value={재고}>
            <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}/>
          </재고context.Provider>
        </Route>


        <Route path="/cart">
          <Cart />
        </Route>


      </Switch>
      {/* <Route path="/" component={Modal} ></Route> */}
    </div>
  );
}




function ShoesItems(props){
  //context API 3
  let 재고 = useContext(재고context);

  return(
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes"+ (props.i + 1) +".jpg"} width="100%"/>  
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}원</p>
      {/* contextAPI 4 */}
      {/* {재고[props.i]} */}
      <Test></Test>
    </div>
  )
}

function Test(){
  //context API 5 
  let 재고 = useContext(재고context)
  return<p>재고 : {재고}</p>
}


 
export default App;
