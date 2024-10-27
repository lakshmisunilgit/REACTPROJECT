import React from 'react'
import FirstCompChild1 from './FirstComp-child1'

const FirstComp = (props) => {
  return (
    <div>
        {props.name}
        <FirstCompChild1 name={props.name}/>
    </div>
  )
}

export default FirstComp
