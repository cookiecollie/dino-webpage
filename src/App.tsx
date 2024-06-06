import { IconContext } from "@phosphor-icons/react"
import { AnimatePresence, motion } from "framer-motion"
import { Outlet, useLocation } from "react-router-dom"
import { Card } from "./components/card"
import { Footer } from "./components/footer"

function App() {
    const location = useLocation()

    return (
        <IconContext.Provider
            value={{
                size: 24,
                weight: "bold",
            }}
        >
            <div className="flex h-full w-full flex-col px-40">
                <div className="flex w-full flex-1 items-center justify-center">
                    <motion.div
                        className="h-fit w-full"
                        animate={{ height: "fit-content" }}
                        layout
                    >
                        <Card>
                            <AnimatePresence>
                                <Outlet />
                            </AnimatePresence>
                        </Card>
                    </motion.div>
                </div>

                <Footer />
            </div>
        </IconContext.Provider>
    )
}

export default App
