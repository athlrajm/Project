import React, { useReducer } from 'react'

function UseReducer() {
    const InitialState=0;
    const reducer=(state,action)=>{
          switch (action.type){
            case 'increase':
                return state=state+1;

            case 'decrease':
                return state=state>0&&state-1;

            case 'increment2':
                return state=state+2;
                default:
                    return state


          }
    }
     const [state,dispatch]=useReducer(reducer,InitialState)
  return (
    <div>
        <h1>{state}</h1>
   <button onClick={()=>dispatch({type:'increase'})}>increment</button>
   <button onClick={()=>dispatch({type:'decrease'})}>decrement</button>
   <button onClick={()=>dispatch({type:'increment2'})}>increment2</button>
    </div>
  )
}

export default UseReducer