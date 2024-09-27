import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu"
import {
    createContext,
    CSSProperties,
    ReactElement,
    useContext,
    useEffect,
} from "react"
import { Link, LinkProps, useLocation } from "react-router-dom"
import { useNavigationPill } from "."

export interface NavigationItems {
    key: string
    to: LinkProps["to"]
    element: ReactElement
}

interface PillContextProps {
    setActiveIndex: (index: number) => void
}
const PillContext = createContext<PillContextProps>({} as PillContextProps)

interface OrderContextProps {
    order: number
}
const OrderContext = createContext<OrderContextProps>({} as OrderContextProps)

interface NavigationMenuProps
    extends RadixNavigationMenu.NavigationMenuListProps {
    items: NavigationItems[]
}
export const NavigationMenu = (props: NavigationMenuProps) => {
    const { items, ...otherProps } = props
    const { activeIndex, setActiveIndex } = useNavigationPill()

    return (
        <RadixNavigationMenu.Root className="dino-navigation-root">
            <RadixNavigationMenu.List
                {...otherProps}
                className="dino-navigation-list"
            >
                <PillContext.Provider value={{ setActiveIndex }}>
                    {items.map((i, idx) => (
                        <NavigationMenu.Item key={i.key}>
                            <OrderContext.Provider value={{ order: idx + 1 }}>
                                <NavigationMenu.RouterLink to={i.to}>
                                    {i.element}
                                </NavigationMenu.RouterLink>
                            </OrderContext.Provider>
                        </NavigationMenu.Item>
                    ))}
                </PillContext.Provider>
            </RadixNavigationMenu.List>

            <NavigationPill
                items={items}
                indicatorStyle={
                    {
                        "--active-index": activeIndex,
                        "--items-number": items.length,
                    } as CSSProperties
                }
            />
        </RadixNavigationMenu.Root>
    )
}

interface NavigationPillProps {
    items: NavigationItems[]
    indicatorStyle: CSSProperties
}
const NavigationPill = (props: NavigationPillProps) => {
    const { items, indicatorStyle } = props

    return (
        <div className="dino-navigation-pill" style={indicatorStyle}>
            <ul>
                {items.map((i) => (
                    <li key={i.key}>{i.element}</li>
                ))}
            </ul>
        </div>
    )
}

interface NavigationMenuItemProps
    extends RadixNavigationMenu.NavigationMenuItemProps {}
const NavigationMenuItem = (props: NavigationMenuItemProps) => {
    return <RadixNavigationMenu.Item {...props} />
}
NavigationMenu.Item = NavigationMenuItem

interface NavigationMenuLinkProps
    extends RadixNavigationMenu.NavigationMenuLinkProps {}
const NavigationMenuLink = (props: NavigationMenuLinkProps) => {
    return (
        <RadixNavigationMenu.Link {...props} className="dino-navigation-link" />
    )
}
NavigationMenu.Link = NavigationMenuLink

interface NavigationMenuRouterLinkProps extends LinkProps {}
const NavigationMenuRouterLink = (props: NavigationMenuRouterLinkProps) => {
    const { to } = props
    const { pathname } = useLocation()
    const isActive = to.toString() === pathname
    const { order } = useContext(OrderContext)
    const { setActiveIndex } = useContext(PillContext)

    useEffect(() => {
        console.log(order)
        if (isActive) setActiveIndex(order)
    }, [isActive])

    return (
        <NavigationMenu.Link asChild active={isActive}>
            <Link {...props} />
        </NavigationMenu.Link>
    )
}
NavigationMenu.RouterLink = NavigationMenuRouterLink
