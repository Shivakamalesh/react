import React, { useState } from 'react'

export const Scooter = () => {

    //    const [color,setColor]= useState("red")
    //    const [Brand,setBrand]= useState("honda")
    //    const [Model,setModel]= useState("Activa")
    //    const [year,setyear]= useState("2020")

    const [scooter, setScooter] = useState(
        {
            color: "red",
            Brand: "honda",
            Model: "activa",
            year: "2020"
        }
    )

    function updateColor() {
        setScooter(previousState =>{
            return{...previousState,color:"yellow"}
         })
    }
//  function ex (...b) {
    
//     const [first,second,...res] = b
//     console.log(first);
//  }
// ex('epp','app','sss','apple')
console.log("Current State",scooter);
    return (
        <>
            <h1>My scooter</h1>
            <p>color:{scooter.color}</p>
            {/* <button onClick={()=>{setColor("blue")}}>change</button> */}
            <p>Brand:{scooter.Brand}</p>
            <p>Model:{scooter.Model}</p>
            <p>year:{scooter.year}</p>

            <button onClick={updateColor}>change</button>

            {/* <button onClick={()=>{{setColor("red")}
                                setBrand("blue")}}>change</button> */}
        </>
    )
}
export default Scooter;