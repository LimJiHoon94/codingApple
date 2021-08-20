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
  let [newTitle , setNewTitle ] = useState('');

  function change(){
    var array = [...글제목] //전체복사
    array[0] = '여자 코트 추천'
    글제목변경(array);
  }

  function newTitleAdd(){
    var titleArr = [...글제목];
    titleArr.unshift(newTitle);
    //console.log(titleArr);
    글제목변경(titleArr);
    
  }

  function modalOnOff(){
    modal === true ? modal변경(false) : modal변경(true);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {//반목문
        글제목.map( function(글 , i){
          return (
            <div className="list" key={i}>
              <h3 onClick={ () => { 누른제목변경(i) } }>{글} 
                <span onClick={()=>{따봉변경(따봉 + 1)}}>👍</span> {따봉} 
              </h3>
              <p>2월 7일 발행</p>
              <hr/>
            </div>
          )
        })
      }

      <div className="publish">
        <input onChange={(e)=>{setNewTitle(e.target.value)}}/>
        <button onClick={newTitleAdd}>저장</button>
      </div>


      {      /* input 사용법 */    }
      {/* <input onChange={ (e)=>{입력값변경(e.target.value)} } /> */}

      <button onClick={modalOnOff}>상세 내용 버튼</button>
      {//if문
        modal === true ? <Modal 글제목={글제목} 누른제목={누른제목} /> : null
      }
      <Profile />
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


//예전 문법
class Profile extends React.Component{
  constructor(){
    super();
    this.state = {name : 'Kim' , age : 30}
  }
  changeName = () => {
    this.setState({name : 'Park'});
  }
  
  render(){
    return(
      <div>
        <h3>프로필</h3>
        <p>저는 { this.state.name } 입니다.</p>
        <button onClick={ this.changeName }>버튼</button>
      </div>
    )
  }

}





export default App;
