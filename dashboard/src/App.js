import './App.css';
import ProductsWidget from './components/ProductsWidget'
import UsersWidget from './components/UsersWidget'
import CategoriesWidget from './components/CategoriesWidget'
import SellsWidget from './components/SellsWidget'

function App() {
  return (
    <div className="App">
      <hr/>
      <ProductsWidget />
      <UsersWidget />
      <CategoriesWidget />
      <SellsWidget />
    </div>
  );
}

export default App;
