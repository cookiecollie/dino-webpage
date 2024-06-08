import {
    AddressBook,
    House,
    IconContext,
    Palette,
    PawPrint,
    User,
} from "@phosphor-icons/react"
import { Card } from "./components/card"
import { Footer } from "./components/footer"
import { Navigation, NavigationLink } from "./components/navigation"
import { CustomRouter } from "./utils"

function App() {
    const navLinks: NavigationLink[] = [
        {
            key: "",
            label: "Home",
            icon: <House />,
        },

        {
            key: "about-me",
            label: "About me",
            icon: <PawPrint />,
        },

        {
            key: "artworks",
            label: "My artworks",
            icon: <Palette />,
        },

        {
            key: "contacts",
            label: "Contacts",
            icon: <AddressBook />,
        },

        {
            key: "viewers",
            label: "Stream viewers",
            icon: <User />,
        },
    ]

    return (
        <IconContext.Provider
            value={{
                size: 24,
                weight: "bold",
            }}
        >
            <div className="flex h-full w-full flex-col px-52">
                <Navigation navLinks={navLinks} />

                <div className="flex w-full flex-1 items-center justify-center">
                    <Card>
                        <CustomRouter />
                    </Card>
                </div>

                <Footer />
            </div>
        </IconContext.Provider>
    )
}

export default App
