import React from 'react'
import Project from './component/Project'
import Footer from './component/footer'
import Home from './component/Home'
import Contact from './component/Contact'
export default function Components({test}) {
    if(test === 0){
    return (
       <Home />
    )
    }
    else if(test === 1) {
        return(
            <Project />
        )
    }
    else if(test === 2) {
        return(
            <Footer />
        )
    }
    else if(test === 3) {
        return(
            <Contact />
        )
    }
}
