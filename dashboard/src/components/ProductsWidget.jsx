import React, { useState, useEffect } from 'react'
import '../App.css';

function ProductsWidget() {

    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:3001/api/products-list')
                .then(response => response.json())
                .then(data => {
                    //console.log(data)
                    setProducts(data.results)
                })
                .catch(error => console.log(error, 'ERROR'));    
    }, [])

    return (
        <div>
            <h3>Total de productos: {products.length}</h3>
            <ul className="ul-prod">
                {products.length === 0 && <p>Cargando...</p>}
                {
                    products.map((product, i) => {
                        return (
                            <li className="li-prod" key={i}>
                                <h3>{product.product_name}</h3>
                                <img src={`http://localhost:3001/api/product-image/${product.id}`} width="200px" alt=""/>
                            </li>
                        )
                    })
                }
            </ul>
            
            
        </div>
    )

};

export default ProductsWidget;