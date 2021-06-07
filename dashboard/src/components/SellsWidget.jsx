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
                        let previous = sells[i];
                        let repeat = 1;
                        let repeat2 = 0;
                        sell.forEach(pId => {
                            if (pId === previous) {
                                repeat2 +=1
                                console.log(`La id ${pId} se repite ${repeat2} veces`)
                            } else if (pId != previous){                        
                                repeat2 = 1              
                                previous = pId   
                            }
                            return repeat2                    
                        });
                        return (
                            <li key={i} className="sells-li">
                                <h3>{`${sell}`}</h3>
                                {
                                    sell.map((prodId, i) => {
                                        if (prodId === previous) {
                                            repeat++
                                        } else {
                                            previous = prodId
                                            return (
                                                <div key={i} className="sellsProdImg">
                                                    <h3>{`x${repeat}`}</h3>
                                                    <img src={`http://localhost:3001/api/product-image/${prodId}`} width="100px" alt="product" />
                                                </div>
                                            )
                                        }
                                    })
                                }

                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )

};

export default SellsWidget;