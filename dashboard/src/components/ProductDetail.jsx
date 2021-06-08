import React, { useState, useEffect } from 'react'
import { Link, Route, Switch, useParams } from 'react-router-dom';
import '../App.css';

function ProductDetail() {
    const { id } = useParams()

    const [detail, setDetail] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/api/product-detail/${id}`)
            .then(response => response.json())
            .then(data => {
                setDetail(data)


            })
            .catch(error => console.log(error, 'ERROR'));
    }, [])

    return (
        <div className="ul-prod">
            <div className="li-prod">
                <h3 className="component-title">{detail.name}</h3>
                <img src={`http://localhost:3001/api/product-image/${detail.id}`} width="200px" height="200px" />
                <p>{detail.description}</p>
                <p> ${detail.price}</p>
            </div>
        </div>
    )

};

export default ProductDetail;