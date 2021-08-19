/* eslint-disable */
import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  //state는 재렌더링이 된다.(자동으로)
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','애플 코딩 react']);
  let [따봉 , 따봉변경] = useState(0);
  let [modal , modal변경] = useState(false);
  let [누른제목 , 누른제목변경] = useState(0);

  function change(){
    var array = [...글제목] //전체복사
    array[0] = '여자 코트 추천'
    글제목변경(array);
  }

  function modalOnOff(){
    modal === true ? modal변경(false) : modal변경(true);
  }

  var 어레이 = [2,3,4];
  var 뉴어레이 = 어레이.map(function(a){
    //a = 에레이 안의 값
    return a * 2;
  })

  //for을 사용한 반목문
  function 반복된UI(){
    var 어레이 = [];
    for(var i = 0 ; i < 3 ; i++){
      어레이.push(<div>안녕</div>);
    }
    return 어레이;
  }



  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={change}> state 변경버튼</button>
      {/* 반복문 */}
      {
        글제목.map( function(글 , i){
          return (
            <div className="list">
              <h3 onClick={ () => { 누른제목변경(i) } }>{글} 
                <span onClick={()=>{따봉변경(따봉 + 1)}}>👍</span> {따봉} 
              </h3>
              <p>2월 7일 발행</p>
              <hr/>
            </div>
          )
        })
      }

     {/*  <button >버튼1</button>
      <button onClick={ () => { 누른제목변경(1) } }>버튼2</button>
      <button onClick={ () => { 누른제목변경(2) } }>버튼3</button> */}

      {/* {
        반복된UI()
      } */}

      <button onClick={modalOnOff}>상세 내용 버튼</button>
      {/* if문 */}
      {
        modal === true ? <Modal 글제목={글제목} 누른제목={누른제목} /> : null
      }
    </div>
  );
}
//Component
//<> </>로 하나의 태그로 묶을수 있다.
function Modal(props){
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
//props 
//부모의 컴포넌트에서 작명 = state 를 정의
//자식의 컴포넌트에서 props를 파라미터로 전달받는다.


export default App;
