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
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )

};

export default SellsWidget;