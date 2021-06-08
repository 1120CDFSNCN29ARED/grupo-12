import React, { useState, useEffect } from 'react'
import '../App.css';

function LastUserInDb() {

    const [users, setUsers] = useState([]);
    const lastUser = users[users.length - 1]
    console.log(lastUser);

    let gender = ""
    if (users.user_gender_id = 1) {
        gender = "Masculino"
    } else if (users.user_gender_id = 2) {
        gender = "Femenino"
    } else {
        gender = "Unisex"
    }




    useEffect(() => {
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
            <h3 className="component-title"> Ultimo usuario agregado a la db:  </h3>
            <ul className="ul-prod">
                {users.length === 0 && <p>Cargando...</p>}
                {
                    users.length > 0 &&

                    <div className="li-prod" >
                        <h3>{lastUser.user_fullname}</h3>
                        <img src={`http://localhost:3001/api/user-image/${lastUser.id}`} width="200px" alt="" />
                        <p>Genero: {gender}</p>
                        <p>Fecha de nacimiento: {lastUser.user_birthdate}</p>
                        <p>Email: {lastUser.user_email}</p>
                    </div>

                }

            </ul>


        </div>
    )

};

export default LastUserInDb;