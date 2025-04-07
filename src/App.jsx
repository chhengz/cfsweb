import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Page
import { About, Home, Contact, Team, Error404 } from "./pages"

// Layout
import RootLayout from "./components/layout/RootLayout"
import AboutLayout from "./components/layout/AboutLayout"


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
          element: <AboutLayout />
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
          path: 'team',
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
