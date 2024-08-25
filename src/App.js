import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';
import GrandSonBox from './component/GrandSonBox';

function App() {
  let count = useSelector(state=>state.count)
  let id = useSelector(state=>state.id)
  let password = useSelector(state=>state.password)
  let dispatch = useDispatch()

  const increse =()=>{
    dispatch({type:"INCREMENT",payload:{num:5}}) //type action의 이름
    
  }
  const decrese =()=>{
    dispatch({type:"DECREMENT"})
  }
  const login = ()=>{
    dispatch({type:"login",payload:{id:"JJH",password:"123"}})
  }

  return (
    <div>
      <h1>{id},{password}</h1>
      <h1>{count}</h1>
      <button onClick={increse}>증가!</button>
      <button onClick={decrese}>감소!</button>
      <button onClick={login}>login</button>
      <Box />
      <GrandSonBox />
    </div>
  );
}

export default App;
