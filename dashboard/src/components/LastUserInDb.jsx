import React, { useState, useEffect } from 'react'
import '../App.css';

function LastUserInDb() {
    const [users, setUsers] = useState([]);
    const lastUser = users[users.length - 1]

    useEffect(() => {
        fetch('http://localhost:3001/api/users-list')
            .then(response => response.json())
            .then(data => {
                setUsers(data.results)
            })
            .catch(error => console.log(error, 'ERROR'));
    }, [])


    console.log(lastUser);

    return (
        <div>
            <h3 className="component-title"> Ultimo usuario agregado a la db:  </h3>
            <ul className="ul-prod">
                {users.length === 0 && <p>Cargando...</p>}
                {
                    users.length > 0 &&
                    <div className="li-prod" >
                        <h3>{lastUser.user_fullname}</h3>
                        <img src={`http://localhost:3001/api/user-image/${lastUser.id}`} width="200px" alt="" />
                        <p>Fecha de nacimiento: {lastUser.user_birthdate}</p>
                        <p>Email: {lastUser.user_email}</p>
                        <p>Genero: {lastUser.user_gender_id}</p>
                    </div>

                }

            </ul>


        </div>
    )

};

export default LastUserInDb;