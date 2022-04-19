import React,{useEffect,useState} from 'react'

export default function Counter({seconds,savesec,circle,paused}) {
    const min = Math.floor((seconds /60))
    const secondM = Math.floor((seconds % 60))
  

    const sec = secondM
    return (
<>
        <div className='count-box'>
        <svg width="100%" viewBox="0 0 300 300">
            <circle stroke="#1C1C1E" fill="#1C1C1E" strokeWidth={"5"} r="140" cx="150" cy="150">
                </circle>
                <circle ref={circle} className="circle" stroke="white" fill="transparent" strokeWidth={"5"} strokeDasharray={"879.645943005142 879.645943005142"} r="140" cx="150" cy="150" style={{strokeDashoffset : 879.645943005142 -((879.645943005142/savesec)*(savesec-seconds)) }}></circle></svg>
            <div className={((secondM < 30  ) && ( secondM != 0) && ( paused === true)? "font-color": "" )+ " count"}>
                {min < 10? `0${min}`: min}:{sec < 10?`0${sec}` :sec}</div>
        </div>
    </>
    )
}
