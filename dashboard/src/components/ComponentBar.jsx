import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import '../App.css';
import ProductsWidget from './ProductsWidget'
import UsersWidget from './UsersWidget'
import CategoriesWidget from './CategoriesWidget'
import SellsWidget from './SellsWidget'
import LastProductInDb from './LastProductInDb'
import LastUserInDb from './LastUserInDb'
import Content from './Content'
import ProductDetail from './ProductDetail'
import NotFound from './NotFound'

function ComponentBar() {
    return (
        <React.Fragment>
            <ul className="comp-ul">
                <li className="comp-li">
                    <Link to="/">
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className="comp-li">
                    <Link to="/ProductsWidget">
                        <span>Productos</span>
                    </Link>
                </li>
                 <li className="comp-li">
                    <Link to="/LastProductInDb">
                        <span>Ultimo producto </span>
                    </Link>
                </li>
                 <li className="comp-li">
                 <Link to="/UsersWidget">
                        <span>Usuarios</span>
                    </Link>
                </li>
                <li className="comp-li">
                <Link to="/LastUserInDb">
                        <span>Ultimo usuario </span>
                    </Link>
                </li>
                <li className="comp-li">
                    <Link to="/CategoriesWidget">
                        <span>Categorias</span>
                    </Link>
                </li>
                <li className="comp-li">
                    <Link to="/SellsWidget">
                        <span>Ventas</span>
                    </Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/">
                    <Content />
                </Route>
                <Route path="/ProductsWidget">
                    <ProductsWidget />
                </Route>
                 <Route path="/LastProductInDb">
                    <LastProductInDb />
                </Route>
                <Route path="/LastUserInDb">
                    <LastUserInDb />
                </Route>
                <Route path="/UsersWidget">
                    <UsersWidget />
                </Route>
                <Route path="/CategoriesWidget">
                    <CategoriesWidget />
                </Route>
                <Route path="/SellsWidget">
                    <SellsWidget />
                </Route>
                <Route path="/ProductDetail/:id">
                    <ProductDetail />
                </Route>
                <Route component={NotFound} />
            </Switch>
        </React.Fragment>
    );
}

export default ComponentBar;