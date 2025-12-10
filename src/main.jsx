
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Suspense,lazy } from 'react'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const Home = lazy(()=>import('../src/pages/Home.jsx'));
const Email = lazy(()=> import('../src/pages/Email.jsx'));
const Contact = lazy(()=>import('../src/pages/Contact.jsx'));
const AboutUs = lazy(()=>import('../src/pages/AboutUs.jsx'));
const NotFound = lazy(()=>import('./components/NotFound.jsx'));
import { Provider } from 'react-redux';
import appStore from './store/store.js'
import '../src/Style.css';
const ProductDetails = lazy(()=>import('./components/ProductDetails.jsx'));
const Cart = lazy(()=>import('./components/Cart.jsx'));
const Checkout = lazy(()=>import('./pages/Checkout.jsx'))
const ProductList = lazy(()=>import('./components/ProductList.jsx'))



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/allProducts',
        element: <ProductList />,
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/email',
        element: <Email />
      },
      {
        path: '/contact',
        element: <Home/>
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/products/:id',
        element: <ProductDetails />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/checkout',
        element: <Checkout />
      }
    ]
  },

])
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={appStore}>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </Provider>
  // </StrictMode>,
)
