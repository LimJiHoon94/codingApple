/* eslint-disable */
import React from "react";
import { Table } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";
import './Detail.scss';


function Cart(props){
  //redux state 받아오기
  let state =  useSelector((state)=> state.reducer );
  let alertVal =  useSelector((state)=> state.reducer2 );
  console.log(state);

  //dispatch 이걸로 줄여서 사용가능하다.
  let dispatch = useDispatch();



    return(
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경</th>
              </tr>
            </thead>
            <tbody>
              {
                state.map((item,i)=>{
                  return(
                    <tr key={i+1}>
                      <td>{item.id + 1}</td>
                      <td>{ item.name }</td>
                      <td>{ item.quan }</td>
                      <td>
                          <button onClick={()=>{dispatch({type : '수량증가' })}}>+</button>
                            &nbsp;&nbsp;
                          <button onClick={()=>{dispatch({type : '수량감소' })}}>-</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
          {
            alertVal === true ? 
              <div className="my-alert-2">
                <p>지금 구매하시면 신규할인 20%</p>
                <button onClick={()=>{dispatch({type : 'alert닫기'})}}>닫기</button>
              </div>
          :null
          }
        </div>
    )
}


//state를 props화
/* function state를props화(state){
  console.log(state);
  return {
    //state : state
    state : state.reducer,
    alertValue : state.reducer2
  }
}

export default connect(state를props화)(Cart) */

export default Cart;
//export default Cart;