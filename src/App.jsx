import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import Country from "./pages/Country"
import { DarkModeProvider } from "./contexs/DarkModeContex"



const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/country/:nameCountry',
        element: <Country />
      }
    ]
  }
])

function App() {
  return (
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  )
}

export default App
