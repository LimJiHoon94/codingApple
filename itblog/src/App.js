import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '강남 고기 맛집';
  //state는 재렌더링이 된다.(자동으로)
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','애플 코딩 react']);



  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{글제목[0]}</h3>
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
    </div>
  );
}

export default App;
