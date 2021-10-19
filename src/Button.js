import React,{useState,useEffect} from 'react'

export default function Button({seconds,setSeconds,paused,setPaused}) {
    if(paused === true && seconds>1){
    useEffect(() => setTimeout(()=> setSeconds(seconds - 0.1),100
   ),[seconds])}
   else{
       setPaused(false)
   }

    function add() {
        if(paused === false){
        setSeconds(seconds + 60)
        }
    }
    function minus() {
            if(paused === false && Math.floor(seconds) > 59){
                console.log(seconds)
                setSeconds(seconds -60)
            } 
    }
    function pause() {
        if(paused === true){
        setPaused(false)
        }
        else{
            setPaused(true)
        }
    }
    function reset(){
        if(paused === false){
        setPaused(false);
        setTimeout(() => {
            setSeconds(0)
        }, 10)}

    }
    
    return (
        <>
        <div className="button-section">
            <button onClick={add}> {"plus"}</button>
            <button onClick={minus}> {"minus"}</button>
            <button onClick={pause}> {"pause/start"} </button>
            <button onClick={reset}> {"reset"}</button>
        </div>
        </>
    )
}
