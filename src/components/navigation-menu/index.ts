import { useState } from "react"
import { NavigationItems, NavigationMenu } from "./NavigationMenu"
export { NavigationMenu, type NavigationItems }

export const useNavigationPill = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    return { activeIndex, setActiveIndex }
}
