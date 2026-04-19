// import React, { useState } from 'react'

// const App = () => {
//   const [title, setTitle] = useState('');
//   const [arr, setarr] = useState([]); 

//    const DelteTask =(idx)=>{
//        console.log(idx)
//    }
 
// localStorage.setItem("user",{name : "ritik",age : 23});


//   return (
//     <div>
//       <form onSubmit={(e)=>{
//            e.preventDefault();
//            let newArr= [...arr,title];
//              setarr(newArr)
//            console.log(arr)
//            setTitle('');
//       }} >
//         <input type="text" placeholder='Enter your name' value={title}  onChange={(e)=>setTitle(e.target.value)} />
//         <button>Submit</button>
//       </form>

//       {arr.map((ele,key)=>{
//         return <div key={key} >
//           <h1 >title is {ele} </h1>
//             <button onClick={()=>{DelteTask(key)}} >delete</button>
//         </div> 
//       })}
//     </div>
//   )
// }

// export default App



import {React ,useEffect, useState} from "react"

const App = () => {
  const [count, setcount] = useState(0)
  useEffect(()=>{
    console.log("useeffict is calling ")
  },[])
  useEffect(()=>{
    console.log("second useeffect is calling ")
  },[])

  const likeme = ()=>{
    console.log("yes")
  }
  console.log("check revert is working or not ")
  return (
    <div>
          <h2>{count}</h2>
          <h1>apple </h1>
      <button onClick={()=>setcount(count+1)}>click me !</button>
      <button onClick={()=>setcount(count-1)}>dont click me </button>
      <button onClick={likeme}>you like me !</button>
    </div>
  )
}

export default App