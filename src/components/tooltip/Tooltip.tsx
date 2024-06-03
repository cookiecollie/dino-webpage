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
import {
    Children,
    PropsWithChildren,
    ReactElement,
    useEffect,
    useLayoutEffect,
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
    }, [])

    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    const contentRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        if (isOpen) setMounted(isOpen)
        else {
            if (contentRef.current) {
                Promise.allSettled(
                    contentRef.current.getAnimations().map((a) => a.finished)
                ).then(() => setMounted(isOpen))
            }
        }
    }, [isOpen])

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
                {...getReferenceProps}
                className="dino-tooltip-anchor"
            >
                {anchor}
            </div>

            {mounted && (
                <FloatingPortal>
                    <div
                        ref={refs.setFloating}
                        style={floatingStyles}
                        {...getFloatingProps}
                    >
                        <div
                            className="dino-tooltip-content"
                            data-is-open={isOpen}
                            ref={contentRef}
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
                        </div>
                    </div>
                </FloatingPortal>
            )}
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
