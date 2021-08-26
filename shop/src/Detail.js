/* eslint-disable */

import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import { Nav } from "react-bootstrap";
import { useHistory , useParams} from "react-router-dom";
import styled from 'styled-components';
import { 재고context } from "./App";    //context API
import './Detail.scss';
import {CSSTransition} from "react-transition-group"
import { connect } from "react-redux";

 let 박스 = styled.div` 
    padding : 20px;
`;
let 제목 = styled.h4`
    font-size : 25px;
    color : ${props => props.Fcolor}
`;
 




function Detail(props){

    let [alert , setAlert] = useState(true);
    let [test , setTest] = useState('');
    let 재고 = useContext(재고context);
    let [탭 , 탭변경] = useState(0);
    let [스위치 , 스위치변경] = useState(false);

    //컴포넌트 life cycle HOOK
    //컴포넌트가 마운트되었을때  , 컴포넌트가 업데이트 되었을때 실행
    //useEffect는 다수의 호출가능 / 상단의 기능부터 실행된다.
    useEffect(()=>{
      //원하는 기능 추가
      //console.log('11111');
      let timer = setTimeout(()=>{
        //document.getElementById("alert1").style.display = 'none';
        //document.getElementById("alert2").style.display = 'none';
        setAlert(false);
      },2000);
      //컴포너트가 사라질때 실행할 함수
      return ()=>{
        //기능정의
        clearTimeout(timer);//버그 떄문에 clear 한다.
      }
    },[alert]);//조건추가 가능 alert가 변경될때만 
    //실행 빈칸인 경우 업데이트시 실행하지 않는다. 최초만 실행한다는 뜻

    
    useEffect(()=>{
      //컴포넌트 첫 실행시 로드한다.
      axios.get();
    },[]);



    let { id } = useParams();
    let history = useHistory();

    //순서가 다를경우 props에서 현재 파라미터로 받은 id와 같은 아이디값을 가진 props를 선택해서 뿌려준다. 
    let item = props.shoes.find(function(i){
        return i.id == id;
    })

    return(
        <div className="container">
            <박스>
                <제목 className="red">Detail</제목>
            </박스> 

            <input onChange={(e)=>{
              setTest(e.target.value);
              console.log(test);
            }}/>


            { //2초후 없어짐
              alert === true  ? (
                <div className="my-alert" id="alert1">
                  <p>재고가 얼마 안남음</p>
                </div>
              ) : null
            }
           
           {/*  <div className="my-alert-2" id="alert2">
              <p>재고가 얼마 안남음</p>
            </div> */}


            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes"+( Number(id) + 1 )+".jpg"} width="100%" />
                </div>
                <div className="col-md-6 mt-4 container">
                  <h4 className="pt-5">{item.title}</h4>
                  <p>{item.content}</p>
                  <p>{item.price} 원</p>
                  <Info 재고={props.재고}/>
                  <button className="btn btn-danger" onClick={()=>{
                    props.재고변경([9,11,12]);
                    
                    props.dispatch({type : '항목추가' , payload : {id : item.id , name : item.title , quan: 1}});

                    history.push('/cart');

                  }}>주문하기</button> 
                  <br />
                  <br />
                  <button className="btn btn-danger" onClick={()=>{ 
                    history.goBack() 
                    /*  history.push('/') */
                  }}>뒤로가기</button> 
                </div>
            </div>
            <Nav variant="tabs" defaultActiveKey="link-0" className="mt-5">
              <Nav.Item>
                <Nav.Link eventKey="link-0" onClick={()=>{ 스위치변경(false); 탭변경(0) }}>Option 0</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1" onClick={()=>{ 스위치변경(false); 탭변경(1) }}>Option 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2" onClick={()=>{ 스위치변경(false); 탭변경(2) }}>Option 2</Nav.Link>
              </Nav.Item>
            </Nav>

            {/* CSS애니메이션 효과 */}
            <CSSTransition in={스위치} classNames="wow" timeout={3000}>
              <TabContent  탭={탭} 스위치변경={스위치변경}/>
            </CSSTransition>
        </div> 

    );

}

function TabContent(props){

  useEffect(()=>{
    props.스위치변경(true);
  })

  if(props.탭 === 0){
    return  <div>000</div>
  }else if(props.탭 === 1 ){
    return  <div>111</div>
  }else if(props.탭 === 2){
    return  <div>222</div>
  }

}


function Info(props){

  return(
    <p>재고 : {props.재고[0]}</p>
  )
}

function state를props화(state){
    console.log(state);
    return {
      state : state.reducer , 
      alertValue : state.reducer2
    }
}


export default connect(state를props화)(Detail);