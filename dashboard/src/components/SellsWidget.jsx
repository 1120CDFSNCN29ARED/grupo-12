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

    let previous;
    let repeat = 0;
    let next;

    return (
        <div>
            <h3 className="component-title">Cantidad total de ventas: {sells.length}</h3>
            <ul className="ul-prod">
                {sells.length === 0 && <p>Cargando...</p>}
                {
                    sells.map((sell, i) => {
                        console.log(sells[i])
                        repeat = 1;
                        console.log('----------------------------------------')
                        return (
                            <>
                                <h2>{sell}</h2>
                                <ul className="sells-ul">
                                    {
                                        sell.map((prodId, i) => {
                                            previous = sell[i - 1];
                                            next = sell[i + 1]
                                            if (prodId !== previous && prodId !== next) {
                                                repeat = 1
                                                return (
                                                    <div key={i} className="sellsProdImg">
                                                        <h3>{`${prodId} x ${repeat}`}</h3>
                                                        <img src={`http://localhost:3001/api/product-image/${prodId}`} width="100px" alt="product" />
                                                    </div>
                                                )
                                            } else {
                                                repeat += 1
                                                if (prodId !== next){
                                                    return (
                                                        <div key={i} className="sellsProdImg">
                                                            <h3>{`${prodId} x ${repeat}`}</h3>
                                                            <img src={`http://localhost:3001/api/product-image/${prodId}`} width="100px" alt="product" />
                                                        </div>
                                                    )
                                                }
                                                return
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