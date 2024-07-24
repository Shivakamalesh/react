import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import  Home  from './Home'
import {Nav} from './Nav'
import { Project } from './Project'
import { About } from './About'
 function Routing () {
  return (
   <Routes>
    <Route path="/" element={<Home/>} exact />
    <Route path="/About" element={<About/>}/>
    <Route path="/Project" element={<Project/>}/>
    
    <Route path="/Nav" element={<Nav/>}  />
    </Routes>
   
  )
}
export default Routing
