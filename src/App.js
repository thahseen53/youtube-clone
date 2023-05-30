
import { Provider } from 'react-redux';
import Header from './components/Header';
import MainLayout from './layouts/MainLayout';
import store from './store/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Watch from './pages/Watch';
function App() {


  const router=createBrowserRouter([{
    path:"/",
    element:<MainLayout />,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'watch',
        element:<Watch/>
      }
    ]
  }])
  return (

    <Provider store={store}>
     <Header />
     <RouterProvider router={router}>
     <MainLayout/>
     </RouterProvider>
    </Provider>
  );
}

export default App;
