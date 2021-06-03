import '../App.css';
import ProductsWidget from './ProductsWidget'
import UsersWidget from './UsersWidget'
import CategoriesWidget from './CategoriesWidget'
import SellsWidget from './SellsWidget'

function Content() {
  return (
    <div >
     < ProductsWidget /> 
     <hr />
     < UsersWidget />
     <hr />
     < CategoriesWidget />
     <hr />
     < SellsWidget />
    </div>
  );
}

export default Content;