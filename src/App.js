import './App.css'
import Home from './components/Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import InventoryDetail from './components/Pages/InventoryDetail/InventoryDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='inventory/:inventoryId' element={<InventoryDetail></InventoryDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
