import { IconContext } from "@phosphor-icons/react"
import { Outlet } from "react-router-dom"
import { Footer } from "./components/footer"

function App() {
    return (
        <IconContext.Provider
            value={{
                size: 24,
                weight: "bold",
            }}
        >
            <div className="flex h-full w-full flex-col px-40">
                <div className="flex w-full flex-1 items-center justify-center">
                    <Outlet />
                </div>

                <Footer />
            </div>
        </IconContext.Provider>
    )
}

export default App
