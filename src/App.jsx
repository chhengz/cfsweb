import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./components/layout/RootLayout"
import { About, Home, Contact, Team, Error404 } from "./pages"


function App() {

  const routers = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <Error404 />,
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
        },
        {
          path: 'feature',
          element: <div>Feature</div>
        },
        {
          path: 'members',
          element: <Team />
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
