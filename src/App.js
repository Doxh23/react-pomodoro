import React,{useState,useRef} from 'react'
import Button from "./Button.js"
import Counter from './Counter.js'
import Modal from './Modal.js'
export default function app() {
   const [seconds, setSeconds] = useState(0)
   const [savesec, setsavesec] = useState(0)
   const [paused, setPaused] = useState(false)
   const div = useRef(0)
    return (
       <>
       <div className="trybox"></div>
    <div className="countdown-box">
    <h1>pomodoro</h1>
   <Modal  div={div} setPaused={setPaused} savesec={savesec} setsavesec={setsavesec} setSeconds={setSeconds} />
    <Counter seconds={seconds} savesec={savesec} paused={paused} />
    <Button  div={div} paused={paused} setPaused={setPaused} savesec={savesec} setsavesec={setsavesec} seconds={seconds} setSeconds={setSeconds} />
    </div>
       </>
    )
}