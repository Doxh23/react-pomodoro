import React,{useEffect,useState} from 'react'

export default function Counter({seconds,paused}) {
    const min = Math.floor((seconds /60))
    seconds = Math.floor((seconds % 60))

    const sec = seconds
    return (
<>
        <div>
            <p className="count">
                {min < 10? `0${min}`: min}:{sec < 10?`0${sec}` :sec} </p>
        </div>
    </>
    )
}
