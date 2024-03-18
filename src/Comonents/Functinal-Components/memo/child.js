

import React from 'react'

function ChildMemo() {
  return (
    <div>
  
  child

    </div>
  )
}

export default React.memo(ChildMemo)
//so react dot memo used ntg bt
//HOC: higher order component
//child re-renders only when childern passed to prop or state changes to the "re-rendering doing"  
//a componenet passed as a argument to the other component which gives the "enhanced component formed" so
//   functional re-usebility 
//ex: redering 'prement chesukovadniki'react.memo ()