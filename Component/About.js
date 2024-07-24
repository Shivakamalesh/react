import React, { useEffect, useState } from 'react'
import { Nav } from './Nav';
export const About = () => {
  <Nav />
    const [data,setData] =useState([])
  
    const getData=()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      console.log(res,"ss")
        return res.json();
        
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
    }
    console.log(data,"dads")
//         ,{    
//     }).then( (response) =>{
// console.log(response)
// setData(response.data)
//     }).catch((error)=>{
//         console.log(error)
//     })
//     }

    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
    <Nav />
    <hi>About</hi>
    </div>
  )
}
export default About;