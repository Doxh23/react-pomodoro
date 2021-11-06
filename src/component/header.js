import React from 'react'

export default function header({settest}) {
    function home(){
        settest(0)
    }

    function project(){
        settest(1)
    }
    function footer(){
        settest(2)
    }
    function contact(){
        settest(3)
    }
    return (
        
        <>
        <header>
            <ul>
                <li><button onClick={home} >home</button></li>
                <li><button onClick={project}>project</button></li>
                <li><button onClick={footer}>footer</button> </li>
                <li><button onClick={contact}>contact</button> </li>
            </ul>
        </header>
        </>
    )
}
