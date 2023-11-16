import React from 'react'

const UsecallbackChild=({values})=> {
    console.log("child rendered");
  return (
    <div>

    </div>
  )
}
export default UsecallbackChild
export const ChildM=React.memo(UsecallbackChild)
