

import React from 'react'
import ComponentA3 from './ComponentA3'

function ComponentA2({name}) {
  return (
    <div>
      <ComponentA3 name={name}/>  
    </div>
  )
}

export default ComponentA2