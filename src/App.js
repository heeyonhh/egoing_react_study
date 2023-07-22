import { useState } from 'react';
import './App.css';

//리액트는 사용자 정의 태그를 만드는 기술이다
//사용자 정의 태그를 컴포넌트 : 함수
//함수의 리턴값이 컴포넌트의 ui

//props : 입력값 외부값 / state : 내부값 , 상태, 배열
//{} 데이터 타입 / '' 문자열 타입
function Counter(props){
  let countState = useState(props.initValue);
  let count = countState[0];
  let setCount = countState[1];

  function up(){
    setCount(count+1)
  };

  return <div>
      <h1>{props.title}</h1>
      <button onClick={up}>+</button> {count}
    </div>
};

function App() {
  return (
    <div>
     <Counter title="불면증 카운터" initValue={10}></Counter>
    </div>
  );
}

export default App;