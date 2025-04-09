import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./i18n";

// Page
import { Home, Contact, Team, Error404 } from "./pages"

// Layout
import RootLayout from "./components/layout/RootLayout"
import AboutLayout from "./components/layout/AboutLayout"


function App() {
  const routers = createBrowserRouter([
    {
      path: '/',
      errorElement: <Error404 />,
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/home',
          element: <Home />
        },
        {
          path: 'about',
          element: <AboutLayout />
        },
        {
          path: 'feature',
          element: <div>Feature</div>
        },
        {
          path: 'team',
          element: <Team />
        },
        {
          path: 'contact',
          element: <Contact />
        },
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
