import React, { useState, useEffect } from 'react'

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
            <h2>Soy el Product Widget {products.length}</h2>
            <ul>
                {products.length === 0 && <p>Cargando...</p>}
                {
                    products.map((product, i) => {
                        return (
                            <li key={i}>
                                <h3>{product.product_name}</h3>
                                <img src={`http://localhost:3001/api/product-image/${product.id}`} width="200px" alt="product image" />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )

};

export default ProductsWidget;