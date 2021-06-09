import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

function LastUserInDb() {

    const [users, setUsers] = useState([]);
    const lastUser = users[users.length - 1]

    let gender = ""




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
                        <Link className="prod-title" to={`/UserDetail/${lastUser.id}`}>
                            <h3>{lastUser.user_fullname}</h3>
                            <img src={`http://localhost:3001/api/user-image/${lastUser.id}`} width="200px" alt="" />
                        </Link>
                    </div>

                }

            </ul>


        </div>
    )

};

export default LastUserInDb;