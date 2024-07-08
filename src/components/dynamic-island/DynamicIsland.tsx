import { useMotionValueEvent, useScroll } from "framer-motion"
import { CSSProperties, useRef, useState } from "react"

interface DynamicIslandProps {
    paddingTop?: number
}

export const DynamicIsland = (props: DynamicIslandProps) => {
    const { paddingTop = 16 } = props

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
                marginBottom: paddingTop,
            }}
        >
            <div
                className="dino-dynamic-island"
                style={
                    {
                        "--dino-dynamic-island-expand": islandPinned ? 1 : 0,
                        position: islandPinned ? "fixed" : "absolute",
                        top: paddingTop,
                    } as CSSProperties
                }
            >
                <div>Left</div>
                <div className="dino-dynamic-island-content">Content</div>
                <div>Right</div>
            </div>
        </div>
    )
}
