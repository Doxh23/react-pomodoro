import React,{useEffect,useState} from 'react'
import Button from "./Button.js"
import Counter from './Counter.js'

export default function app() {
   const [seconds, setSeconds] = useState(10)
   const [paused, setPaused] = useState(false)
   const [display,setdisplay] = useState("block")

   
       
   ;
    return (
       <>
       <div className="trybox"></div>
    <div className="countdown-box">
    <h1>pomodorro</h1>
    <div className="restart">
        <button>restart</button>
        <button>restart</button>
    </div>
    <Counter seconds={seconds} paused={paused} />
    <Button paused={paused} setPaused={setPaused} seconds={seconds} setSeconds={setSeconds} />
    </div>
       </>
    )
}