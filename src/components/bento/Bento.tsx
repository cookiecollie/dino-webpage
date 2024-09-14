import { CSSProperties, HTMLAttributes } from "react"
import { cn } from "../../utils"

interface BentoProps extends HTMLAttributes<HTMLDivElement> {
    template: string
    columns: number
}

export const Bento = (props: BentoProps) => {
    const { children, template, columns, className, ...otherProps } = props

    return (
        <div
            {...otherProps}
            style={
                {
                    "--template": template,
                    "--columns": columns,
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
