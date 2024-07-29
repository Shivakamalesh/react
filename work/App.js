import logo from './logo.svg';
import './App.css'
import { useEffect, useState } from 'react';
import { Button, EditableText, InputGroup, Toaster } from '@blueprintjs/core';

const AppToaster=Toaster.create({
  position:"top" 
})

function App() {

  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newWebsite, setNewWebsite] = useState("")



  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUsers(json))
  }, [])

  function addUser(){
    const name = newName.trim();
    const email = newEmail.trim();
    const website = newWebsite.trim();

    if(name && email && website){
      fetch("https://jsonplaceholder.typicode.com/users",
        {
          method:"POST",
          body:JSON.stringify({
            name,
            email,
            website
          }),
          headers:{
            "Content-Type":"application/json; charset=UTF-8 "
          }
        }
      ).then((response)=>response.json())
      .then(data =>{
        setUsers([...users,data]);
        AppToaster.show({
          message:"User Added Successfully",
          intent:'success',
          timeout:3000
        })

      })
        
    }

  }
  return (
    <div className="App">
      <table className='bp4-html-table modifier'>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Website</th>
          <th>Action</th>
        </thead>
        <tbody>
          {users.map(user =>
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td><EditableText value={user.email} /></td>
              <td><EditableText value={user.website} /></td>
              <td>
                <button type="button" class="btn btn-primary">Update</button>
                <button type="button" class="btn btn-danger">Delete</button>
              </td>

            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <input type="text"
                class="form-control"
                value={newName}
                onChange={(e)=>setNewName(e.target.value)}
                
                placeholder="Enter name" />
            </td>
            <td>
              <input type="email"
                class="form-control"
                value={newEmail}
                onChange={(e)=>setNewEmail(e.target.value)}
                
                placeholder="Enter email" />
            </td>
            <td>
              <input type="text"
                class="form-control"
                value={newWebsite}
                onChange={(e)=>setNewWebsite(e.target.value)}
                
                placeholder="Enter email" />
            </td>
            <td>
            <button type="button" class="btn btn-success" onClick={addUser}>Add user</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default App;
