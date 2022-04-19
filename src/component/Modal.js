import React from 'react'
export default function Modal({setPaused,savesec,setSeconds,setsavesec,div}) {
function reset(){
    document.querySelector(".restart").style.left = "150%"

    setSeconds(savesec)
    setPaused(true)

}
function cancel(){
    document.querySelector(".restart").style.left = "150%"
    setsavesec(0)

}

    return (
        <div >
        <div  ref={div} id="plz" className={"restart"}>
        <button onClick={reset}>restart</button>
        <button onClick={cancel} >cancel</button>
    </div>
        </div>
    )

}
