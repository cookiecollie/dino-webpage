import { Grid } from "@radix-ui/themes"
import { createContext, HTMLAttributes, useContext, useRef } from "react"
import { cn, useMountTransition } from "../../utils"

interface InlineSheetProps extends HTMLAttributes<HTMLDivElement> {
    sheetId: string | null
}

export const InlineSheet = (props: InlineSheetProps) => {
    const { className, sheetId, children, ...otherProps } = props
    const { activeSheetId } = useContext(InlineSheetContext)

    const isActive = sheetId === activeSheetId

    const containerRef = useRef<HTMLDivElement>(null)
    const { shouldAnimate } = useMountTransition(containerRef, isActive)

    return (
        <Grid
            {...otherProps}
            className={cn("dino-inline-sheet", className)}
            data-active={sheetId === activeSheetId}
            ref={containerRef}
        >
            {(isActive || shouldAnimate) && children}
        </Grid>
    )
}

interface InlineSheetContextProps {
    activeSheetId: string | null
}
export const InlineSheetContext = createContext<InlineSheetContextProps>(
    {} as InlineSheetContextProps
)
