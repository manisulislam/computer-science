import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Courses from './components/Courses';
import Blog from './components/Blog';
import Register from './components/Register';
import Faq from './components/Faq';
import Erorr from './components/Erorr';
import LogIn from './components/LogIn';
import Home from './components/Home';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/courses',
          element: <Courses></Courses>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/register',
          element:<Register></Register>
        },
        {
          path: '/login',
          element:<LogIn></LogIn>
        },
        {
          path: '/faq',
          element: <Faq></Faq>
        },

      ]
    },
    {
      path: '*',
      element: <Erorr></Erorr>

    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
