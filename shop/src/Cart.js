/* eslint-disable */
import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";



function Cart(props){

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
                props.state.map((item,i)=>{
                  return(
                    <tr key={i+1}>
                      <td>{item.id + 1}</td>
                      <td>{ item.name }</td>
                      <td>{ item.quan }</td>
                      <td>
                          <button onClick={()=>{props.dispatch({type : '수량증가'})}}>+</button>
                            &nbsp;&nbsp;
                          <button onClick={()=>{props.dispatch({type : '수량감소'})}}>-</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </div>
    )
}


//state를 props화
function state를props화(state){
  return {
    state : state
  }
}

export default connect(state를props화)(Cart)
//export default Cart;