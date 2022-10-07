import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import Main from './layouts/Main/Main';
import { productsAndCartsLoader } from './loaders/productsAndCartsLoader';

function App() {
  const router=createBrowserRouter([
    {path: '/',
    element:<Main></Main>,
    children: [
    {path: '/',
    element:<Shop></Shop>
    },
    {path: '/shop',
    loader: ()=>fetch('products.json'),
    element:<Shop></Shop>
    },
    {path: '/orders',
    loader: productsAndCartsLoader ,
    element:<Orders></Orders>
    }
    ,
    {path: '/inventory',
    element:<Inventory></Inventory>
    }
    ,
    {path: 'about',
    element:<About></About>
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
