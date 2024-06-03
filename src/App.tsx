import { ExclamationMark, IconContext } from "@phosphor-icons/react"
import { FAB } from "./components/fab"
import { Home } from "./pages/home"

function App() {
    return (
        <IconContext.Provider
            value={{
                size: 24,
                weight: "bold",
            }}
        >
            <div className="h-[100vh] w-full px-40">
                <div className="flex flex-col">
                    <div className="flex h-[100vh] w-full items-center justify-center">
                        <Home />
                    </div>
                </div>

                <FAB label="FAB">
                    <ExclamationMark />
                </FAB>
            </div>
        </IconContext.Provider>
    )
}

export default App
