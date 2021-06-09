import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import '../App.css';

function UserDetail() {
    const { id } = useParams()
    const [detail, setDetail] = useState([]);

    let gender = ""

    if (detail.user_gender_id == 1) {
        gender = "Masculino"
    } else if (detail.user_gender_id == 2) {
        gender = "Femenino"
    } else {
        gender = "Unisex"
    }


    useEffect(() => {
        fetch(`http://localhost:3001/api/user-detail/${id}`)
            .then(response => response.json())
            .then(data => {
                setDetail(data.result)


            })
            .catch(error => console.log(error, 'ERROR'));
    }, [])

    return (
        <div className="ul-prod">
            <div className="li-prod">
                <h3 className="component-title">{detail.user_fullname}</h3>
                <img src={`http://localhost:3001/api/User-image/${id}`} width="200px" height="200px" />
                <p>Genero: {gender}</p>
                <p>Fecha de nacimiento: {detail.user_birthdate}</p>
                <p>Email: {detail.user_email}</p>
            </div>
        </div>
    )

};

export default UserDetail;