import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [count2, setCount2] = useState(0)

  useEffect(()=> {
    alert('Counter1 Mounted')
    },[])

    useEffect(()=> {
      alert('Counter2 Mounted')
      },[])

    useEffect(()=> {
      alert('Mounting & Updating Counter 1')
      },[count])

    useEffect(()=> {
        alert('Mounting & Updating Counter 2')
        },[count2])

      // useEffect(()=> {

      //   alert('Run over any state update')
      //   })
    
  

  return (
    <>
    <h1 onClick={() => setCount(count + 1)}>Counter 1: {count}</h1>

    <h1 onClick={() => setCount2(count2 + 1)}>Counter 2: {count}</h1>


    
    </>
  )
}

export default App
