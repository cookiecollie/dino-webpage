import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "../styles/main.css"
import App from "./App.tsx"
import { Commission } from "./pages/commission/Commission.tsx"
import { Home } from "./pages/home/Home.tsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <>error</>,
        children: [
            { index: true, element: <Home /> },
            { path: "/commission", element: <Commission /> },
        ],
    },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
