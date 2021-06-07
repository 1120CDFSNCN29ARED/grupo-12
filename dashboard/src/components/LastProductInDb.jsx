import React, { useState, useEffect } from 'react'



function LastProductInDb(){
      const [products, setProducts] = useState([]);
      const lastProduct = products[products.length - 1]
     
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
            <h3 className="component-title">Ultimo producto agregado a la db:  </h3>
            <ul className="ul-prod">
                {products.length === 0 && <p>Cargando...</p>}
                {
                   products.length > 0 &&
                       
                            <li className="li-prod" >
                                <h3>{lastProduct.product_name}</h3>
                                <img src={`http://localhost:3001/api/product-image/${lastProduct.id}`} width="200px" alt=""/>
                            </li>
                      
                    }
               
            </ul>
            
            
        </div>
    )
}

export default LastProductInDb;
