import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "../styles/main.css"
import App from "./App.tsx"
import {
    AboutMe,
    Artworks,
    Contacts,
    Error,
    Home,
    Viewers,
} from "./pages/index.ts"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                errorElement: <Error />,
                children: [
                    { path: "/about-me", element: <AboutMe /> },
                    { path: "/artworks", element: <Artworks /> },
                    { path: "/contacts", element: <Contacts /> },
                    { path: "/viewers", element: <Viewers /> },
                    { index: true, element: <Home /> },
                ],
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
