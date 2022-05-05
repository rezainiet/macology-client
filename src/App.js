import Home from './components/Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import InventoryDetail from './components/Pages/InventoryDetail/InventoryDetail';
import ManageInventories from './components/Pages/ManageInventories/ManageInventories';
import AddInventoryItem from './components/Pages/AddInventoryItem/AddInventoryItem';
import RequireAuth from './components/RequireAuth/RequireAuth';
import NotVerified from './components/NotVerified/NotVerified';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='inventory/:inventoryId' element={
          <RequireAuth>
            <InventoryDetail></InventoryDetail>
          </RequireAuth>
        }></Route>
        <Route path='/notverified' element={<NotVerified></NotVerified>}></Route>
        <Route path='/manageinventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/add-inventory-item' element={<AddInventoryItem></AddInventoryItem>}></Route>
      </Routes>
    </div>
  );
}

export default App;
