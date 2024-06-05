import {
    CSSProperties,
    HTMLAttributes,
    useEffect,
    useRef,
    useState,
} from "react"

interface IndicatorStyleType
    extends Pick<CSSProperties, "backgroundColor" | "borderRadius"> {}

interface MagnetGroupProps extends HTMLAttributes<HTMLDivElement> {
    indicatorStyle?: IndicatorStyleType
}

export const MagnetGroup = (props: MagnetGroupProps) => {
    const { children, style, indicatorStyle, ...others } = props

    const magnetGroupRef = useRef<HTMLDivElement>(null)
    const hoveringRef = useRef<Element | null>(null)

    const [indicatorBaseStyle, setIndicatorBaseStyle] = useState<CSSProperties>(
        {}
    )

    useEffect(() => {
        const sync = () => {
            if (hoveringRef.current) {
                const bounds = hoveringRef.current.getBoundingClientRect()
                const cssVars = {
                    "--dino-magnet-group-indicator-top": bounds.top,
                    "--dino-magnet-group-indicator-right": bounds.right,
                    "--dino-magnet-group-indicator-bottom": bounds.bottom,
                    "--dino-magnet-group-indicator-left": bounds.left,

                    "--dino-magnet-group-indicator-height": bounds.height,
                    "--dino-magnet-group-indicator-width": bounds.width,

                    "--dino-magnet-group-indicator-color":
                        indicatorStyle?.backgroundColor,
                    "--dino-magnet-group-indicator-rounded":
                        indicatorStyle?.borderRadius,
                }

                setIndicatorBaseStyle(cssVars as CSSProperties)
            }
        }

        const update = ({ x, y }: { x: number; y: number }) => {
            const element = document
                .elementFromPoint(x, y)
                ?.closest(".dino-magnet-group-item")

            if (element !== hoveringRef.current) {
                hoveringRef.current = element as Element
                sync()
            }
        }

        magnetGroupRef.current?.addEventListener("pointermove", update)
        window.addEventListener("resize", sync)
        return () => {
            magnetGroupRef.current?.removeEventListener("pointermove", update)
            window.removeEventListener("resize", sync)
        }
    }, [])

    return (
        <div
            {...others}
            className="dino-magnet-group-wrapper"
            style={{ ...indicatorBaseStyle, ...style }}
            ref={magnetGroupRef}
        >
            {children}
        </div>
    )
}

interface MagnetItemProps extends HTMLAttributes<HTMLDivElement> {}

export const MagnetItem = (props: MagnetItemProps) => {
    const { children, ...others } = props

    return (
        <div {...others} className="dino-magnet-group-item">
            {children}
        </div>
    )
}
