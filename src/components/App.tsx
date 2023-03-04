import {useState} from 'react'
import "../styles/index.scss"

const App =  () => {
  const [count, setCount] = useState(0); 
  
  const handleClick = (eventType: "-" | "+") => {
    setCount(prev => eventType == "-" ? prev - 1 : prev + 1)
  }
  return (
    <div>
      <button onClick={() => handleClick("-")}>-</button>
      <span>{count}</span>
      <button onClick={() => handleClick("+")}>+</button>

    </div>
  )
}

export default App