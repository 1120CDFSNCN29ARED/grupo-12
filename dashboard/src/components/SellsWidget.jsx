import React, { useState, useEffect } from 'react'

function SellsWidget() {

    const [sells, setSells] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:3001/api/sells-list')
                .then(response => response.json())
                .then(data => {
                    //console.log(data)
                    setSells(data.results)
                })
                .catch(error => console.log(error, 'ERROR'));    
    }, [])

    //let productsId = sells.split('-')

    return (
        <div>
            <h2>Soy el Sells Widget {sells.length}</h2>
            <ul>
                {sells.length === 0 && <p>Cargando...</p>}
                {
                    sells.map((sell, i) => {
                        return (
                            <li key={i}>
                                <h3>{sell.products_id}</h3>
                                {/*sell.products_id.split('-').map((prodId, i) => {
                                    return (
                                        <div key={i} class="sellsProdImg">
                                            <h3>{prodId}</h3>
                                            <img src={`http://localhost:3001/api/product-image/${prodId}`} width="100px" alt="product" />
                                        </div>
                                        
                                    )
                                })*/}
                                
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )

};

export default SellsWidget;