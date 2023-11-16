import React from "react";

const Childchild=({value})=>{
    console.log('child rendered');

    return(
        <div>
        <h1>{value}</h1>
        </div>
    )
}
export default Childchild
export const MemororizedChild=React.memo(Childchild)