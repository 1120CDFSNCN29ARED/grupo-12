import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

function UsersWidget() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/users-list')
            .then(response => response.json())
            .then(data => {
                setUsers(data.results)
            })
            .catch(error => console.log(error, 'ERROR'));
    }, [])

    return (
        <div>
            <h3 className="component-title">Total de usuarios registrados : {users.length}</h3>
            <ul className="ul-users">
                {users.length === 0 && <p>cargando...</p>}
                {
                    users.map((user, i) => {
                        return (
                            <li className="li-users" key={i}>
                                <Link className="prod-title" to={`/UserDetail/${user.id}`}>
                                    <h3>{user.user_fullname}</h3>
                                    <img src={`http://localhost:3001/api/user-image/${user.id}`} width="200px" height="200px" alt="" />
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )

};

export default UsersWidget;