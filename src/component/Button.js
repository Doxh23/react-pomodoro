import React,{useState,useEffect} from 'react'

export default function Button({seconds,setSeconds,paused,setPaused,savesec,setsavesec,div,circle}) {
    
    if(paused === true && seconds>0){
    useEffect(() => setTimeout(()=> setSeconds(seconds - 1)
    ,1000
   )
,[seconds])}
   else if (savesec != 0 && Math.floor(seconds) == 0){
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
            } else if(seconds < 59){
              setSeconds(0)  
              setsavesec(0)
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
            setsavesec(0)

        }, 10)}

    }
    
    return (
        <>
        <div className="button-section">
            <button className="button-modif" onClick={add}> {"+ 1:00"}</button>
            <button className="button-modif" onClick={minus}> {"- 1:00"}</button>
            <button className="button-modif" onClick={pause}> {(paused && seconds>0) ? "break":"start"} </button>
            <button className="button-modif" onClick={reset}> {"reset"}</button>
        </div>
        </>
    )
}
