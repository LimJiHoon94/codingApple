/* eslint-disable */

import React, {useState} from "react";
import { useHistory , useParams} from "react-router-dom";
import styled from 'styled-components';
import './Detail.scss';

let 박스 = styled.div` 
    padding : 20px;
`;
let 제목 = styled.h4`
    font-size : 25px;
    color : ${props => props.Fcolor}
`;


function Detail(props){


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
            <div className="my-alert">
              <p>재고가 얼마 안남음</p>
            </div>
            <div className="my-alert-2">
              <p>재고가 얼마 안남음</p>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes"+( Number(id) + 1 )+".jpg"} width="100%" />
                </div>
                <div className="col-md-6 mt-4 container">
                  <h4 className="pt-5">{item.title}</h4>
                  <p>{item.content}</p>
                  <p>{item.price} 원</p>
                  <button className="btn btn-danger">주문하기</button> 
                  <br />
                  <br />
                  <button className="btn btn-danger" onClick={()=>{ 
                    history.goBack() 
                    /*  history.push('/') */
                  }}>뒤로가기</button> 
                </div>
            </div>
        </div> 

    );

}
export default Detail;