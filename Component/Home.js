import React from 'react'
import { Nav } from './Nav';
import ApiExample from './ApiExample';

function Home  () {
  return (

    <div>
      <Nav />
      <p>Home</p>
    <button type="button" class="btn btn-primary">Primary</button>
    {/* <div  className='container-fluid'>
      <div className='row'>
       <div className='col-sm-1'>
         <p>dsdsd</p>
       </div>
       <div className='col-sm-1'>
         <p>dsdsd</p>
       </div>
       <div className='col-sm-1'>
         <p>dsdsd</p>
       </div>
       <div className='col-sm-1'>
         <p>dsdsd</p>
       </div>
       <div className='col-sm-1'>
         <p>dsdsd</p>
       </div>
       <div className='col-sm-1'>
         <p>dsdsd</p>
       </div>
       <div className='col-sm-1'>
         <p>dsdsd</p>
       </div>
       <div className='col-sm-1'>
         <p>dsdsd</p>
       </div>
       <div className='col-sm-1'>
         <p>dsdsd</p>
       </div>
       <div className='col-sm-1'>
         <p>dsdsd</p>
       </div>
       <div className='col-sm-1'>
         <p>dsdsd</p>
       </div>
       <div className='col-sm-1'>
         <p>dsdsd</p>
       </div>
       <div className='col-sm-1'>
         <p>dsdsd</p>
       </div>
        <div>

        </div>
      </div>

    </div> */}
    <h1>ApiExample</h1>
  <ApiExample />
    </div>
    
  )
}
export default Home;
