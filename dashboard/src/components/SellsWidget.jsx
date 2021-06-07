import React, { useState, useEffect } from 'react'
import '../App.css';

function SellsWidget() {

    const [sells, setSells] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/sells-list')
            .then(response => response.json())
            .then(data => {
                let carts = []
                data.results.map((sell, i) => {
                    let soldItems = sell.products_id.split('-').sort()
                    carts.push(soldItems)
                })
                setSells(carts)
            })
            .catch(error => console.log(error, 'ERROR'));
    }, [])

    //let productsId = sells.split('-')

    return (
        <div>
            <h3 className="component-title">Cantidad total de ventas: {sells.length}</h3>
            <ul className="ul-prod">
                {sells.length === 0 && <p>Cargando...</p>}
                {
                    sells.map((sell, i) => {
                        let repeat = 0;
                        return (
                            <>
                                <ul className="sells-ul">
                                    {
                                        sell.map((prodId, i) => {
                                            let previous = sell[i - 1];
                                            let next = sell[i + 1]
                                            if (prodId !== previous && prodId !== next) {
                                                repeat = 1;
                                                return (
                                                    <div key={i} className="sellsProdImg">
                                                        <h3>{`${prodId} x 1`}</h3>
                                                        <img src={`http://localhost:3001/api/product-image/${prodId}`} width="100px" alt="product" />
                                                    </div>
                                                )
                                            } else if (prodId === previous && prodId !== next) {
                                                repeat += 1
                                                return (
                                                    <div key={i} className="sellsProdImg">
                                                        <h3>{`${prodId} x ${repeat}`}</h3>
                                                        <img src={`http://localhost:3001/api/product-image/${prodId}`} width="100px" alt="product" />
                                                    </div>
                                                )
                                            } else if (prodId === previous && prodId === next) {
                                                repeat += 1                                                
                                            }else if(prodId !== previous && prodId === next) {
                                                repeat = 1 
                                            }
                                        })
                                    }
                                </ul>
                            </>
                        )
                    })
                }
            </ul>
        </div>
    )

};

export default SellsWidget;