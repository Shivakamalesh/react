import React, { useEffect,useState } from 'react'

export const Book= () => {
  const [count,setCount]=useState(0);
    useEffect(()=>{
       console.log('Screen rendered');
    // checkCount()
    // setCount(2)

      setTimeout(()=>{
        setCount((previousState)=>{return previousState + 1})
      }, 1000)

    })
 
 function checkCount(){
  if(count>10){
    setCount(1);
  }
 }

 function updateCount(){
  setCount((previousCount)=>{return previousCount+1})
 }
 
  return (
    <>
        <h1>I have rendered {count} times</h1>
        <button onClick={updateCount}>increase</button>
    </>
  )
}
export default Book;