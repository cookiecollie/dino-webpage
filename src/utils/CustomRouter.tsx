import { AnimatePresence } from "framer-motion"
import { Route, Routes, useLocation } from "react-router-dom"
import { AboutMe, Artworks, Contacts, Home, Viewers } from "../pages"

const CustomRoutes = () => {
    const location = useLocation()

    return (
        <Routes location={location} key={location.key}>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/artworks" element={<Artworks />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/viewers" element={<Viewers />} />
        </Routes>
    )
}

export const CustomRouter = () => {
    return (
        <AnimatePresence>
            <CustomRoutes />
        </AnimatePresence>
    )
}
