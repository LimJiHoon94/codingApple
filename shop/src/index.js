/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{ BrowserRouter , HashRouter } from 'react-router-dom'
//HashRouter 라우팅을 안전하게 할 수 있게 도와줌
import {Provider} from 'react-redux';
import { createStore } from 'redux';


let 초기값 = [
  { id : 0 , name : '멋진신발0' , quan : 2 },
  { id : 1 , name : '멋진신발1' , quan : 3 },
  { id : 2 , name : '멋진신발2' , quan : 4 },
  { id : 3 , name : '멋진신발3' , quan : 5 },
  { id : 4 , name : '멋진신발4' , quan : 6 }

]

function reducer(state = 초기값 , 액션){
  if(액션.type === '수량증가'){
      let copy = [...state];
      copy[0].quan++;
     return copy //수정된 state
  }else if(액션.type === '수량감소'){
    let copy = [...state];
      copy[0].quan--;
     return copy //수정된 state
  }else{
    return state
  }
    
}


let store = createStore(reducer);


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
