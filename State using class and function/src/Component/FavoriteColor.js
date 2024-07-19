import React from 'react'


import {useState} from "react";
export const FavoriteColor = () => {
  // let color="red";
  const [color ,setColor] =useState('red')
  return (
    <>
    <h1>My Favorite Color is {color}</h1>
    <button onClick={()=>{setColor('blue')}}>ChangeColor</button>
    </>

  )
}
export default FavoriteColor;