import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';
import Quiz from './components/Quiz/Quiz';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader:async()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path: "/home",
          loader:async()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path: "/statistics",
          loader:async()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statistics></Statistics>
        },
        {
          path: "/blogs",
          loader:async()=>fetch('blogs.json'),
          element:<Blogs></Blogs>
        },
        {
          path: "quiz/:quizId",
          loader:async({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element:<Quiz></Quiz>
          
        }
      ]
    },
    {
      path: "*",
      element:<div className='flex align-middle justify-center h-screen'>
                <div className='max-w-md my-auto'>
                  <h1 className='text-9xl font-bold text-pink-700'>Oops!</h1>
                  <p className='font-semibold text-2xl mt-8 text-gray-700'>404 - PAGE NOT FOUND</p>
                  <p className='max-w-md mt-3'>The page your are looking for might have been romoved had its name changed or is temporarily unavaliable.</p>
                </div>
                
              </div>
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position='top-center' />
    </div>
  );
}

export default App;
