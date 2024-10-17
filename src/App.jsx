import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
function App() {
 function handleClick(){
  alert('button clicked')
 }
const handleClick2=()=>{
  alert('2nd button clicked')
}
  const addtoFive=(num)=>{
      alert(num+5);
  } 
  return (
    <>
        <Friends></Friends>
       <Users></Users>
        <Team></Team>
        <Counter></Counter>

      <h3>React concepts 2</h3>
      <button onClick={handleClick}>Click1</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=>{alert('Third Clicked')}}>Click3</button>
      <button onClick={()=>{addtoFive(3)}}>Click4</button>
    </>
  )
}

export default App
