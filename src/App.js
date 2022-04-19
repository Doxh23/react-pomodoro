import React,{useState,useRef} from 'react'
import Button from "./component/Button.js"
import Counter from './component/Counter.js'
import Modal from './component/Modal.js'
export default function app() {
   const [seconds, setSeconds] = useState(0)
   const [savesec, setsavesec] = useState(0)
   const [paused, setPaused] = useState(false)
   const div = useRef(0)
   const circle = useRef(1)
    return (
       <>
   <div className="trybox"></div>
    <div className="countdown-box">
    <h1 className='title'>pomodoro</h1>
   <Modal  div={div} setPaused={setPaused} savesec={savesec} setsavesec={setsavesec} setSeconds={setSeconds} />
    <Counter paused={paused} circle={circle}  seconds={seconds} savesec={savesec} />
    <Button circle={circle}   div={div} paused={paused} setPaused={setPaused} savesec={savesec} setsavesec={setsavesec} seconds={seconds} setSeconds={setSeconds} />
    </div>
       </>
    )
}