import { IconContext } from "@phosphor-icons/react"
import { useMotionValueEvent, useScroll } from "framer-motion"
import {
    CSSProperties,
    PropsWithChildren,
    ReactElement,
    useRef,
    useState,
} from "react"
import { getCSSVal } from "../../utils"

interface DynamicIslandProps extends PropsWithChildren {
    paddingTop?: number | string
    cta: ReactElement
    icon?: ReactElement
    contentWidth?: number | string
}

export const DynamicIsland = (props: DynamicIslandProps) => {
    const { paddingTop = 16, icon, cta, children, contentWidth = 240 } = props

    const wrapperRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: wrapperRef,
        offset: ["end end", "start start"],
    })

    const [islandPinned, setIslandPinned] = useState(false)

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const progress = Math.floor(latest)
        progress ? setIslandPinned(true) : setIslandPinned(false)
    })

    return (
        <div
            className="dino-dynamic-island-wrapper"
            ref={wrapperRef}
            style={{
                top: `-${getCSSVal(paddingTop)}`,
            }}
        >
            <div
                className="dino-dynamic-island"
                style={
                    {
                        "--dino-dynamic-island-expand": islandPinned ? 1 : 0,
                        "--dino-dynamic-island-width": getCSSVal(contentWidth),
                        position: islandPinned ? "fixed" : "absolute",
                        top: getCSSVal(paddingTop),
                    } as CSSProperties
                }
            >
                <span>
                    <IconContext.Provider value={{ size: 18, weight: "bold" }}>
                        {icon}
                    </IconContext.Provider>
                </span>
                <div
                    className="dino-dynamic-island-content"
                    style={{
                        margin: `0px 2rem 0px ${icon ? "1" : "0"}rem`,
                    }}
                >
                    {children}
                </div>
                <div>{cta}</div>
            </div>
        </div>
    )
}
