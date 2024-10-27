import React from 'react'
import './App.css'
import FirstComp from './propcontainer/FirstComp'
import SecondComp from './propcontainer/SecondComp'
import ThirdComp from './propcontainer/ThirdComp'
import FourthComp from './propcontainer/FourthComp'
import StateMgm from './StateMgm'

const user = {
  name: "Devi",
  city: "Bangkok",
  area: "Onnut"
}

function App() {
  return (
    <div className = "container">

     <FirstComp name = {user.name}/>
     <SecondComp name = "Sunil"/>
     <ThirdComp name = "Kumar"/>
     <FourthComp name = {user.city}/>
     <StateMgm />

    </div>
  )
}

export default App
