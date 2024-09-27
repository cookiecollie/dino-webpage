import { Slot } from "@radix-ui/react-slot"
import {
    CSSProperties,
    HTMLAttributes,
    useEffect,
    useRef,
    useState,
} from "react"
import { cn } from "../../utils"

interface MagnetGroupProps extends HTMLAttributes<HTMLElement> {}

export const MagnetGroup = (props: MagnetGroupProps) => {
    const { className, ...otherProps } = props

    const [cssVars, setCssVars] = useState<CSSProperties>({})

    const wrapperRef = useRef<HTMLDivElement>(null)
    const hoverRef = useRef<Element | null>(null)

    useEffect(() => {
        const controller = new AbortController()

        const sync = () => {
            if (hoverRef.current) {
                const hoverEl = hoverRef.current as HTMLElement
                setCssVars({
                    "--top": hoverEl.offsetTop,
                    "--right": hoverEl.offsetLeft + hoverEl.offsetWidth,
                    "--bottom": hoverEl.offsetTop + hoverEl.offsetHeight,
                    "--left": hoverEl.offsetLeft,
                } as CSSProperties)
            }
        }

        const update = ({ x, y }: { x: number; y: number }) => {
            const element = document
                .elementFromPoint(x, y)
                ?.closest(".dino-magnet-item")

            if (element !== hoverRef.current) {
                hoverRef.current = element as Element
                sync()
            }
        }

        wrapperRef.current?.addEventListener("pointermove", update, {
            signal: controller.signal,
        })
        window.addEventListener("resize", sync, { signal: controller.signal })
        window.addEventListener("scroll", sync, { signal: controller.signal })

        return () => {
            controller.abort()
        }
    }, [])

    return (
        <div
            {...otherProps}
            className={cn("dino-magnet", className)}
            ref={wrapperRef}
            style={cssVars}
        />
    )
}

interface MagnetItemProps extends HTMLAttributes<HTMLDivElement> {}

export const MagnetItem = (props: MagnetItemProps) => {
    const { className, ...otherProps } = props
    return (
        <Slot {...otherProps} className={cn("dino-magnet-item", className)} />
    )
}
