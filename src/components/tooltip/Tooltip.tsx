import {
    arrow,
    autoUpdate,
    flip,
    FloatingArrow,
    offset,
    shift,
    useDismiss,
    useFloating,
    useFocus,
    useHover,
    useInteractions,
    useRole,
} from "@floating-ui/react"
import { PropsWithChildren, useRef, useState } from "react"
import { useMountTransition } from "../../utils"

interface TooltipProps extends PropsWithChildren {
    label: string
}

const ARROW_HEIGHT = 8,
    ARROW_GAP = 8

export const Tooltip = (props: TooltipProps) => {
    const { label, children } = props

    const [isOpen, setIsOpen] = useState(false)

    const arrowRef = useRef(null)

    const { context, refs, floatingStyles } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        middleware: [
            arrow({ element: arrowRef }),
            offset(ARROW_HEIGHT + ARROW_GAP),
            flip(),
            shift(),
        ],
        whileElementsMounted: autoUpdate,
        placement: "top",
    })

    const hover = useHover(context, { move: false })
    const focus = useFocus(context)
    const dismiss = useDismiss(context)
    const role = useRole(context, { role: "tooltip" })

    const { getFloatingProps, getReferenceProps } = useInteractions([
        hover,
        focus,
        dismiss,
        role,
    ])

    const tooltipRef = useRef<HTMLSpanElement>(null)
    const { state, shouldAnimate } = useMountTransition(tooltipRef, isOpen)

    return (
        <>
            <div ref={refs.setReference} {...getReferenceProps()}>
                {children}
            </div>

            {(isOpen || shouldAnimate) && (
                <div
                    ref={refs.setFloating}
                    {...getFloatingProps()}
                    style={floatingStyles}
                >
                    <span
                        className="dino-tooltip-floating"
                        data-animate={state}
                        ref={tooltipRef}
                    >
                        <FloatingArrow
                            ref={arrowRef}
                            context={context}
                            width={ARROW_HEIGHT * 2}
                            height={ARROW_HEIGHT}
                            tipRadius={2}
                            className="fill-neutral-50"
                        />
                        {label}
                    </span>
                </div>
            )}
        </>
    )
}
