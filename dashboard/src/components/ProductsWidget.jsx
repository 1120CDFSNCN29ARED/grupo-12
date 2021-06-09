import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

function ProductsWidget() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/products-list')
            .then(response => response.json())
            .then(data => {
                setProducts(data.results)
            })
            .catch(error => console.log(error, 'ERROR'));
    }, [])

    return (
        <div>
            <h3 className="component-title">Total de productos: {products.length}</h3>
            <ul className="ul-prod">
                {products.length === 0 && <p>Cargando...</p>}
                {
                    products.map((product, i) => {
                        return (
                            <li className="li-prod" key={i}>
                                <Link className="prod-title" to={`/ProductDetail/${product.id}`}>
                                    <h3>{product.product_name}</h3>
                                    <img src={`http://localhost:3001/api/product-image/${product.id}`} width="200px" height="200px" alt="" />
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )

};

export default ProductsWidget;