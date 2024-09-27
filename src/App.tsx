import { House, IconContext, Palette, Placeholder } from "@phosphor-icons/react"
import { Outlet } from "react-router-dom"
import { Icon } from "./components/icon"
import { NavigationItems, NavigationMenu } from "./components/navigation-menu"

function App() {
    const navigationItems: NavigationItems[] = [
        {
            element: (
                <Icon label="House Icon">
                    <House />
                </Icon>
            ),
            key: "nav-item-home",
            to: "/",
        },

        {
            element: (
                <Icon label="Palette Icon">
                    <Palette />
                </Icon>
            ),
            key: "nav-item-commission",
            to: "/commission",
        },

        {
            element: (
                <Icon label="placeholder">
                    <Placeholder />
                </Icon>
            ),
            key: "nav-item-placeholder1",
            to: "#",
        },

        {
            element: (
                <Icon label="placeholder">
                    <Placeholder />
                </Icon>
            ),
            key: "nav-item-placeholder2",
            to: "#",
        },
    ]

    return (
        <>
            <div className="fixed left-[50%] top-0 z-[1] mt-10 translate-x-[-50%]">
                <IconContext.Provider value={{ size: 24 }}>
                    <NavigationMenu items={navigationItems} />
                </IconContext.Provider>
            </div>

            <div className="mx-auto w-full sm:max-w-2xl">
                <Outlet />
            </div>

            <div className="mb-12 mt-24 flex w-full flex-col items-center text-sm text-shellby-brown-300">
                <p>
                    Designed and implemented by{" "}
                    <a
                        href="https://bsky.app/profile/nikkoscribblo.bsky.social"
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-shellby-brown-500"
                    >
                        Berry
                    </a>
                </p>
            </div>
        </>
    )
}

export default App
