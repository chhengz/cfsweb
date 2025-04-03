import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import { About, Home, Contact } from "./pages"


function App() {

  const routers = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <div>Error</div>,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'contact',
          element: <Contact />
        }

      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

export default App
