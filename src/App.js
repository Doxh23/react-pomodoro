import React,{useEffect,useState} from 'react'
import Button from "./Button.js"
import Counter from './Counter.js'

export default function app() {
   const [seconds, setSeconds] = useState(600)
   const [paused, setPaused] = useState(false)

   
       
   ;
    return (
       <>
    <div className="countdown-box">
    <h1>salut les amis</h1>
    <Counter seconds={seconds} paused={paused} />
    <Button paused={paused} setPaused={setPaused} seconds={seconds} setSeconds={setSeconds} />
    </div>
       </>
    )
}