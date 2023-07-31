import { useState } from 'react'
import './App.css'



function App() {
  const Main = () => {
    const { stateValue, updateStateValue } = useContext(StateContext)
  
    const handleClick = () => {
      updateStateValue('new value')
    }
  }
  return (
    <>
    </>
  )
}

export default App
