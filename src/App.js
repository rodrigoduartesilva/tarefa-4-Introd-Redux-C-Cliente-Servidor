import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Contato from './pages/Contato';
import Login from './pages/Login';
import ServiceList from './components/ServiceList';
import CatShowerServiceItemInformation from './components/CatShowerServiceItemInformation';
import CatVetServiceItemInformation from './components/CatVetServiceItemInformation';
import CatGroomingServiceItemInformation from './components/CatGroomingServiceItemInformation';
import DogShowerServiceItemInformation from './components/DogShowerServiceItemInformation';
import DogGroomingServiceItemInformation from './components/DogGroomingServiceItemInformation';
import DogVetServiceItemInformation from './components/DogVetServiceItemInformation';
import Cadastro from './pages/Cadastro';
import NotFound from './pages/NotFound';
import CadSuccess from './components/CadSuccess';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import Admin from './pages/Admin';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import ProdutoInfo from './pages/ProdutoInfo';
import Cart from './pages/Cart';
import Complete from './pages/Complete';

function App() {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/admin' element={<Admin />} />
          {/* <Route path='/admin' element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } /> */}
          <Route path='/admin/add-product' element={<AddProduct />} />
          {/* <Route path='/add-product' element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          } /> */}
          <Route path='/produto/:id' element={<ProdutoInfo />} />
          {/* <Route path='/produto/:id' element={
            <ProtectedRoute>
              <ProdutoInfo/>
            </ProtectedRoute>
          } /> */}
          <Route path='/carrinho' element={<Cart />} />
          {/* <Route path='/carrinho' element={
            <ProtectedRoute>
              <Cart/>
            </ProtectedRoute>
          } /> */}
          <Route path='/complete' element={<Complete />} />
          {/* <Route path='/complete' element={
            <ProtectedRoute>
              <Complete/>
            </ProtectedRoute>
          } /> */}
          <Route path='/admin/edit-product/:id' element={<EditProduct />} />
          {/* <Route path='/edit-product/:id' element={
            <ProtectedRoute>
              <EditProduct />
            </ProtectedRoute>
          } /> */}
          <Route path='/contato' element={<Contato />} />
          <Route path='/servicelist' element={<ServiceList />} />
          {/* <Route path='/servicelist' element={
            <ProtectedRoute>
              <ServiceList />
            </ProtectedRoute>
          } /> */}

          <Route path='/gatomenu/:id' element={<CatShowerServiceItemInformation />} />
          <Route path='/gatomenu_/:id' element={<CatVetServiceItemInformation />} />
          <Route path='/gatomenu_i/:id' element={<CatGroomingServiceItemInformation />} />

          <Route path='/dogmenu/:id' element={<DogShowerServiceItemInformation />} />
          <Route path='/dogmenu_/:id' element={<DogGroomingServiceItemInformation />} />
          <Route path='/dogmenu_i/:id' element={<DogVetServiceItemInformation />} />

          <Route path='/sucessoCad' element={<CadSuccess>Cadastro realizado com sucesso!</CadSuccess>} />
          <Route path='/sucessoContact' element={<CadSuccess>Mensagem enviada com sucesso. Em breve entraremos em contato com você!</CadSuccess>} />
          <Route path='/sucessoLogin' element={<CadSuccess>Login realizado com sucesso! Seja bem-vindo!</CadSuccess>} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
