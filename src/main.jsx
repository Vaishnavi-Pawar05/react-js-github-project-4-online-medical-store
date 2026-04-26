import { createRoot } from 'react-dom/client'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Home from './Views/home/home.jsx'
import Products from './views/Products/products.jsx'
import Order from './Views/order/order.jsx'
import Login from './Views/login/login.jsx'
import Signup from './Views/signup/signup.jsx'
import ProductCard from './Views/Products/productCard/productcard.jsx'
import ProductCardDetails from './Views/Products/productCardDetails/productcarddetails.jsx'

const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/products" element={<Products />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/order/:productId" element={<Order />} />
        <Route path="/products/:productId" element={<ProductCardDetails />} />
      </Routes> 
  </BrowserRouter>
)