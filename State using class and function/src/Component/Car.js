import React from "react";
class Car extends React.Component{
    constructor(){
        super();
        this.state = {colors:"red",model:"ford"}
        
    }

    render(){
        return <>
        <h1>My car color is {this.state.colors} and model {this.state.model}</h1>
        <button onClick={()=>{this.setState({colors:"blue"})}}>change</button>

        </>
    }
}
export default Car;