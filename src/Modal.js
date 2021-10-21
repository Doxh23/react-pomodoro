import React from 'react'
export default function Modal({setPaused,savesec,setSeconds,setsavesec,div}) {
function rst(){
    document.querySelector(".restart").style.display = "none"
    setSeconds(savesec)
    setPaused(true)

}
function rstcancel(){
    document.querySelector(".restart").style.display = "none"
    setsavesec(0)

}

    return (
        <div >
        <div  ref={div} id="plz" className={"restart"}>
        <button onClick={rst}>restart</button>
        <button onClick={rstcancel} >cancel</button>
    </div>
        </div>
    )

}
