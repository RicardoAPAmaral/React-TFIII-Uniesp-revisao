import { useState } from "react"
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const SimpleCounter = () => {

const [count,setCount] = useState(0)
const handlePlus = () => {
    setCount((prev) => prev+1)
}
const handleMinus = () => {
    setCount((prev) => prev-1)
}

  return (
    <div className="counter_container">

<div className="counter_number">
    <h1>{count}</h1>
</div>

<div className="counter_number">
    <button onClick={handlePlus}><FaPlus /></button>
    <button  onClick={handleMinus}><FaMinus /></button>
</div>

    </div>
  )
}

export default SimpleCounter