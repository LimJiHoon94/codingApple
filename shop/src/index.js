/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{ BrowserRouter , HashRouter } from 'react-router-dom'
//HashRouter 라우팅을 안전하게 할 수 있게 도와줌
import {Provider} from 'react-redux';
import { combineReducers, createStore } from 'redux';






let alert초기값 = true;

function reducer2(state = alert초기값 , action){
  if(action.type === 'alert닫기'){
    state = false;
    return state
  }else{
    return state
  }
    
}

let 초기값 = [
  { id : 0 , name : '멋진신발0' , quan : 2 },
  { id : 1 , name : '멋진신발1' , quan : 3 },
 
]


function reducer(state = 초기값 , 액션){
  if(액션.type === '항목추가'){
    
    let found =  state.findIndex((a)=>{
      return a.id === 액션.payload.id;
    })
    //중복예외 처리
    if(found >= 0){
      
      let copy = [...state];
      copy[found].quan++;
      return copy;

    }else{
      let copy = [...state];
      copy.push(액션.payload);
      return copy;
    }
    
  }else if(액션.type === '수량증가'){
      let copy = [...state];
      copy[액션.payload].quan++;
      
     return copy //수정된 state
  }else if(액션.type === '수량감소'){
    let copy = [...state];
      copy[액션.payload].quan--;
     return copy //수정된 state
  }else{
    return state
  }
}


//let store = createStore(reducer);
let store = createStore(combineReducers({reducer, reducer2})); //여러개의 reducer를 사용하는 방법


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}> {/* 같은 스테이트 공유 */}
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
