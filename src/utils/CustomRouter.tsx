import { AnimatePresence, motion } from "framer-motion"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { Card } from "../components/card"
import { AboutMe, Artworks, Contacts, Home, Viewers } from "../pages"

const CustomRoutes = () => {
    const location = useLocation()

    return (
        <motion.div layout className="w-full">
            <Card>
                <Routes location={location} key={location.key}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/artworks" element={<Artworks />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/viewers" element={<Viewers />} />
                </Routes>
            </Card>
        </motion.div>
    )
}

export const CustomRouter = () => {
    return (
        <BrowserRouter>
            <AnimatePresence>
                <CustomRoutes />
            </AnimatePresence>
        </BrowserRouter>
    )
}
