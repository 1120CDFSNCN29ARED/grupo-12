import '../App.css';
import ProductsWidget from './ProductsWidget'
import UsersWidget from './UsersWidget'
import CategoriesWidget from './CategoriesWidget'
import LastProductInDb from './LastProductInDb'
import LastUserInDb from './LastUserInDb'
import SellsWidget from './SellsWidget'

function Content() {
  return (
    <div >
      < ProductsWidget />
      <hr />
      < UsersWidget />
      <hr />
      < LastProductInDb /> < LastUserInDb />
      <hr />
      < CategoriesWidget />
      <hr />
      < SellsWidget />
    </div>
  );
}

export default Content;