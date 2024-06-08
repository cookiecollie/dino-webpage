import { IconContext } from "@phosphor-icons/react"
import { ReactElement } from "react"
import { Link, useLocation } from "react-router-dom"

export type NavigationLink = {
    key: string
    icon?: ReactElement
    label: string
}

interface NavigationProps {
    navLinks: NavigationLink[]
}

export const Navigation = (props: NavigationProps) => {
    const { navLinks } = props

    const { pathname } = useLocation()

    const pathkey = pathname.replace("/", "")

    return (
        <div className="dino-navigation-wrapper">
            <IconContext.Provider value={{ size: 16, weight: "bold" }}>
                {navLinks.map((l) => (
                    <Link
                        to={l.key}
                        className="dino-navigation-link"
                        key={l.key}
                        data-active={pathkey === l.key}
                        onClick={(e) => {
                            if (pathkey === l.key) e.preventDefault()
                        }}
                    >
                        <span>{l.icon}</span>
                        <span>{l.label}</span>
                    </Link>
                ))}
            </IconContext.Provider>
        </div>
    )
}
