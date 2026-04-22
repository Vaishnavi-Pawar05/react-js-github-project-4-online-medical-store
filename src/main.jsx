import { createRoot } from 'react-dom/client'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Home from './views/Home/home.jsx'
import Products from './views/Products/products.jsx'
import Order from './views/Order/order.jsx'
import Login from './views/Login/login.jsx'
import Signup from './views/Signup/signup.jsx'


const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/products" element={<Products />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes> 
  </BrowserRouter>
)