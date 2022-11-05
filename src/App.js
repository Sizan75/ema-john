import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import Signup from './components/Signup/Signup';
import Main from './layouts/Main/Main';
import { productsAndCartsLoader } from './loaders/productsAndCartsLoader';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const router=createBrowserRouter([
    {path: '/',
    element:<Main></Main>,
    children: [
    {path: '/',
    loader: ()=>fetch('http://localhost:5000/products'),
    element:<Shop></Shop>
    },
    {path: '/shop',
    loader: ()=>fetch('http://localhost:5000/products'),
    element:<Shop></Shop>
    },
    {path: '/orders',
    loader: productsAndCartsLoader ,
    element:<Orders></Orders>
    }
    ,
    {path: '/inventory',
    element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
    }
    ,
    {path: '/shipping',
    element:<PrivateRoute><Shipping></Shipping></PrivateRoute>
    }
    ,
    {path: 'about',
    element:<About></About>
    }
    ,
    {path: 'login',
    element:<Login></Login>
    }
    ,
    {path: 'signup',
    element:<Signup></Signup>
    }
    ]
  } 
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
