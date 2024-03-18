

import React  from 'react'

function CustomButton({Children,onClick}) {
    console.log(Children)
  return (
    <div>
<button onClick={onClick}>{Children}  </button>
    </div>
  )
}

export default React.memo(CustomButton)
