import React, { useState, useEffect } from 'react'

function CategoriesWidget() {

    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:3001/api/categories-list')
                .then(response => response.json())
                .then(data => {
                    //console.log(data)
                    setCategories(data.results)
                })
                .catch(error => console.log(error, 'ERROR'));    
    }, [])

    return (
        <div>
            <h3 className="component-title">Categorias totales : {categories.length}</h3>
            <ul className="ul-prod">
                {categories.length === 0 && <p>Cargando...</p>}
                {
                    categories.map((category, i) => {
                        return (
                            <li className="li-cat" key={i}>
                                <h3>{category.category_name}</h3>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )

};

export default CategoriesWidget;