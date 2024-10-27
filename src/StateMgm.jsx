

import React from 'react'

import {useState, useEffect} from 'react'

const StateMgm = () => { 

    const[city, setCity] = useState("Hyderabad")
    useEffect( ()=>{
        if (city === "hyderabad") {
            setCity ("Bangalore")
        }else{
            setCity("Delhi")
        }
    },[city])

    


  return (
    <h1>I live in {city}</h1>
  )
}

export default StateMgm
