import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { CartDrawer } from './components/layout/CartDrawer'
import { ScrollToTop } from './components/layout/ScrollToTop'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'
import CustomOrders from './pages/CustomOrders'
import HowItWorks from './pages/HowItWorks'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Shipping from './pages/Shipping'
import Returns from './pages/Returns'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import CheckoutSuccess from './pages/CheckoutSuccess'
import CheckoutCancel from './pages/CheckoutCancel'
import NotFound from './pages/NotFound'
import RestaurantMenuPage from './pages/RestaurantMenuPage'

// Storefront pages keep the ecommerce header/footer/cart. Restaurant menu pages
// (/menu/:restaurantSlug) render standalone, below, without any of that chrome —
// someone opening a menu just tapped an NFC stand and wants the menu immediately.
function StorefrontLayout() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <CartProvider>
        <ScrollToTop />
        <Routes>
          <Route element={<StorefrontLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products/:slug" element={<Product />} />
            <Route path="/custom-orders" element={<CustomOrders />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/checkout/success" element={<CheckoutSuccess />} />
            <Route path="/checkout/cancel" element={<CheckoutCancel />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/menu/:restaurantSlug" element={<RestaurantMenuPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}
