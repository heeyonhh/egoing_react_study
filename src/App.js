import './App.css';

//리액트는 사용자 정의 태그를 만드는 기술이다
//사용자 정의 태그를 컴포넌트 : 함수
//함수의 리턴값이 컴포넌트의 ui

function Counter(props){
  console.log(props);
  
  return <div>
      <h1>Counter</h1>
      <button>+</button> 0
    </div>
};

function App() {
  return (
    <div>
     <Counter title="불면증 카운터"></Counter>
    </div>
  );
}

export default App;