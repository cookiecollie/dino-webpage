import { CSSProperties, HTMLAttributes } from "react"
import { cn } from "../../utils"

interface BentoProps extends HTMLAttributes<HTMLDivElement> {
    areaTemplate: string
    columnsTemplate?: string
    rowsTemplate?: string
}

export const Bento = (props: BentoProps) => {
    const {
        children,
        areaTemplate,
        columnsTemplate,
        rowsTemplate,
        className,
        ...otherProps
    } = props

    return (
        <div
            {...otherProps}
            style={
                {
                    "--area-template": areaTemplate,
                    "--columns-template": columnsTemplate,
                    "--rows-template": rowsTemplate,
                } as CSSProperties
            }
            className={cn("dino-bento", className)}
        >
            {children}
        </div>
    )
}

interface BentoSlotProps extends HTMLAttributes<HTMLDivElement> {
    slotName: string
}

export const BentoSlot = (props: BentoSlotProps) => {
    const { children, slotName, ...otherProps } = props
    return (
        <div
            {...otherProps}
            style={
                {
                    "--slot-name": slotName,
                } as CSSProperties
            }
            className="dino-bento-slot"
        >
            {children}
        </div>
    )
}
