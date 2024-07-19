import React, { useState } from 'react'

export const List = () => {
    const [list, setList] = useState([])
    const [count, setCount] = useState(1)

console.log(list,"list")

    function addItem() {
        const itemName = 'Item' + count;
        console.log(itemName,"itemName")
        setList((previousState) =>
             { return [...previousState,itemName]})
                setCount((previousState) => 
                { return previousState + 1 })
    }

    return (<>
        <h1>List</h1>
        <button onClick={addItem}>add</button>
       {list.map((u,index)=>
<li key={index}>{u}</li>
       )

       }
    </>

    )
}
export default List;