import React, { useState, useEffect } from 'react'
import '../App.css';

function UsersWidget() {

    const [users, setUsers] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:3001/api/users-list')
                .then(response => response.json())
                .then(data => {
                    //console.log(data)
                    setUsers(data.results)
                })
                .catch(error => console.log(error, 'ERROR'));    
    }, [])

    return (
        <div>
            <h3>Total de usuarios registrados : {users.length}</h3>
            <ul  className="ul-users">
                {users.length === 0 && <p>No hay usuarios registrados.</p>}
                {
                    users.map((user, i) => {
                        return (
                            <li  className="li-users" key={i}>
                                <h3>{user.user_fullname}</h3>
                                <img src={`http://localhost:3001/api/user-image/${user.id}`} width="200px" />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )

};

export default UsersWidget;