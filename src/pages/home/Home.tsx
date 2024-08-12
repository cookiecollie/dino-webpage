import { Footer } from "../../components/footer"
import { About, Artworks, Hero, Socials } from "../../fragments"

export const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Artworks />
            <Socials />
            <Footer />
        </div>
    )
}
