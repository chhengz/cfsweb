import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./i18n";

// Page
import { Home, Contact, Team, Error404, Dashboard } from "./pages"

// Layout
import RootLayout from "./components/layout/RootLayout"
import AboutLayout from "./components/layout/AboutLayout"

// Network and Notification
import { OfflineNotification } from "./components/customs/alert/OfflineNotification";
import { NetworkProvider } from "./components/context/NetworkContext";
import { OfflineToastNotification } from "./components/customs/alert/OfflineToastNotification";


function App() {
  const routers = createBrowserRouter([
    {
      path: '/',
      errorElement: <Error404 />,
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'about', element: <AboutLayout /> },
        { path: 'feature', element: <div>Feature</div> },
        { path: 'team', element: <Team /> },
        { path: 'contact', element: <Contact /> },
      ]
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    }
  ])

  return (
    <>
      {/* <RouterProvider router={routers} /> */}
      <NetworkProvider>
        <RouterProvider router={routers} />
        {/* <OfflineNotification /> */}
        <OfflineToastNotification />
      </NetworkProvider>
    </>
  )
}

export default App
