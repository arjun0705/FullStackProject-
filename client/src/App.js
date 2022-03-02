import logo from './logo.svg';
import './App.css';
import ShowProduct from './components/ShowProduct';
import AddProduct from './components/AddProduct';
import ProductDetail from './components/ProductDetail';
import UpdateProduct from './components/Updateproduct';
import { Routes,Route,Link} from 'react-router-dom';
import  Navv  from './components/Nav';

function App() {
  return (
    <div className="App">
      {/* <Link to="/addProduct"><button >Add Products</button></Link>
      <Link to ="/"><button>Home</button></Link> */}
  <Navv />
      <Routes>
        
          <Route exact path='/' element = {<ShowProduct/>}/>
          <Route exact path='/addProduct' element = {<AddProduct/>}/>
          <Route exact path='preview/:id' element = {<ProductDetail/>}/>
          <Route exact path='/update/:id' element = {<UpdateProduct/>}/>
      </Routes>

      {/* <ShowProduct /> */}
      {/* <AddProduct /> */}
    </div>
  );
}

export default App;
