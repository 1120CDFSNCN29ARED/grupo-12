import React, { useState, useEffect } from 'react'

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
            <h2>Soy el User Widget {users.length}</h2>
            <ul>
                {users.length === 0 && <p>Cargando...</p>}
                {
                    users.map((user, i) => {
                        return (
                            <li key={i}>
                                <h3>{user.user_fullname}</h3>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )

};

export default UsersWidget;