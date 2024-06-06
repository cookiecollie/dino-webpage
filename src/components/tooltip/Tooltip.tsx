import {
    FloatingArrow,
    FloatingPortal,
    arrow,
    autoUpdate,
    flip,
    offset,
    shift,
    useDismiss,
    useFloating,
    useFocus,
    useHover,
    useInteractions,
    useRole,
} from "@floating-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import {
    Children,
    PropsWithChildren,
    ReactElement,
    useEffect,
    useRef,
    useState,
} from "react"

interface TooltipProps extends PropsWithChildren {}

const ARROW_HEIGHT = 8
const GAP = 4
const ARROW_TIP_RADIUS = 2

export const Tooltip = (props: TooltipProps) => {
    const { children } = props

    const [anchor, setAnchor] = useState<ReactElement | null>(null)
    const [content, setContent] = useState<ReactElement | null>(null)

    useEffect(() => {
        Children.forEach(children, (c) => {
            const element = c as ReactElement
            if (element.type === Anchor) setAnchor(element)
            else if (element.type === Content) setContent(element)
        })
    }, [children])

    const [isOpen, setIsOpen] = useState(false)

    const arrowRef = useRef(null)

    const { context, refs, floatingStyles } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        middleware: [
            offset(ARROW_HEIGHT + GAP),
            flip(),
            shift(),
            arrow({ element: arrowRef }),
        ],
        whileElementsMounted: autoUpdate,
    })

    const hover = useHover(context, { move: false })
    const focus = useFocus(context)
    const dismiss = useDismiss(context)
    const roles = useRole(context, {
        role: "label",
    })

    const { getFloatingProps, getReferenceProps } = useInteractions([
        hover,
        focus,
        dismiss,
        roles,
    ])

    return (
        <>
            <div
                ref={refs.setReference}
                {...getReferenceProps()}
                className="dino-tooltip-anchor"
            >
                {anchor}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <FloatingPortal>
                        <div
                            ref={refs.setFloating}
                            style={floatingStyles}
                            {...getFloatingProps()}
                        >
                            <motion.div
                                className="dino-tooltip-content"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ delay: 0.1 }}
                            >
                                {content}{" "}
                                <FloatingArrow
                                    ref={arrowRef}
                                    context={context}
                                    height={ARROW_HEIGHT}
                                    width={ARROW_HEIGHT * 2}
                                    tipRadius={ARROW_TIP_RADIUS}
                                    className="dino-tooltip-arrow"
                                />
                            </motion.div>
                        </div>
                    </FloatingPortal>
                )}
            </AnimatePresence>
        </>
    )
}

interface TooltipChildren extends PropsWithChildren {}
export const Anchor = (props: TooltipChildren) => {
    return <>{props.children}</>
}
export const Content = (props: TooltipChildren) => {
    return <>{props.children}</>
}
