import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import FlowCart from './components/FlowCart/FlowCart';
import { GetQuizAndDynamicId } from './components/GetQuizAndDynamicId/GetQuizAndDynamicId';
import Home from './components/Home/Home';
import { QuizPractice } from './components/QuizPractice/QuizPractice';
import Root from './components/Root/Root';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      loader: GetQuizAndDynamicId,
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: 'home',
          element: <Home></Home>,
        },


        {
          path: '/quiz/:id',
          loader: ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <QuizPractice></QuizPractice>,
        },

        {
          path: 'flowCart',
          element: <FlowCart></FlowCart>,
        },

        {
          path: 'blog',
          element: <Blog></Blog>
        }
       
      ]
    }
  ])

  return (
    <div className="App bg-slate-200">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
