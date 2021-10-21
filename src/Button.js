import React,{useState,useEffect} from 'react'

export default function Button({seconds,setSeconds,paused,setPaused,savesec,setsavesec,div}) {
    
    if(paused === true && seconds>1){
    useEffect(() => setTimeout(()=> setSeconds(seconds - 0.1),100
   ),[seconds])}
   else if (savesec != 0 && Math.floor(seconds) == 0){
   div.current.style.display = "flex"
useEffect(()=> setPaused(false),[Math.floor(seconds)])
       
    
   }
  

    function add() {
        if(paused === false){
        setSeconds(seconds +60)
       setsavesec(savesec +60)
        }
    }
    function minus() {
            if(paused === false && Math.floor(seconds) > 59){
                setSeconds(seconds -60)
                setsavesec(savesec -60)
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
            <button className="button-modif" onClick={add}> {"plus"}</button>
            <button className="button-modif" onClick={minus}> {"minus"}</button>
            <button className="button-modif" onClick={pause}> {"pause"} {"start"} </button>
            <button className="button-modif" onClick={reset}> {"reset"}</button>
        </div>
        </>
    )
}
