import React,{useRef,useState} from 'react'
import Header from './component/header'
import Components from './Components'
export default function app() {
  const [test, settest] = useState(0)
  const div = useRef(0)
    return (
       <>
   <Header settest={settest } />
   <Components test={test}  />
       </>
    )
}