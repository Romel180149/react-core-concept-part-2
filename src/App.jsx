import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './users'
import Friends from './friends'


function App() {
function handleclick(params) {
  alert('button clicked')
}
const handleclick2 = ()=>{
alert('button 2 clicked')
}
const addToFive =(num) =>{
  alert(num+5)
}

  return (
    <>
    
      <h3>Core concept 2</h3>
  
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleclick}>Click me</button>
      <button onClick={handleclick2}>click 2</button>
      <button onClick={()=>{alert('third clicked')}}>Third</button>
      <button onClick={()=>addToFive(3)}>Four</button>
    
    
    </>
  )
}

export default App
