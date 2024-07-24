import React, { useEffect, useState } from 'react'

import { Component} from 'react'

function ApiExample(){
    const [datas,getDatas] =useState([])
    console.log(datas,"datas")
 const getdata =()=>{
    let url="https://jsonplaceholder.typicode.com/posts"
    fetch(url)
    .then((response)=>
        response.json())
    .then((data)=>{
        getDatas(data)
    })
 }
 useEffect(()=>{
    getdata()
 },[])
    
        return(
<div>
   <ul>
 {
    datas.map((item)=>(
       <li key={item.id}>{item.title}</li>
    ))
 }
 </ul>


 </div>
           
        )
    }

export default ApiExample;