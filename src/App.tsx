import { RouterProvider, createHashRouter } from 'react-router-dom'
import './App.css'

function App() {
  const router = createHashRouter([
    {
      path: '',
      element: <>Hello world</>,
    },
    {
      path: 'blog',
      children: [
        {
          index: true,

          element: <>blog</>,
        },
        {
          path: 'wtf',
          element: <>wtf</>,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
