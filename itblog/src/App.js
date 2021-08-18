/* eslint-disable */
import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  //state는 재렌더링이 된다.(자동으로)
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','애플 코딩 react']);
  let [따봉 , 따봉변경] = useState(0);
  let [modal , modal변경] = useState(false);

  function change(){
    var array = [...글제목]
    array[0] = '여자 코트 추천'
    글제목변경(array);
  }

  function modalOnOff(){
    modal === true ? modal변경(false) : modal변경(true);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={change}>버튼</button>
      <div className="list">
        <h3>{글제목[0]} <span onClick={()=>{따봉변경(따봉 + 1)}}>👍</span> {따봉} </h3>
        <p>2월 7일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 7일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>2월 7일 발행</p>
        <hr/>
      </div>
      <button onClick={modalOnOff}>버튼</button>
      {
        modal === true ? <Modal /> : null
      }
    </div>
  );
}
//Component
//<> </>로 하나의 태그로 묶을수 있다.
function Modal(){
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
