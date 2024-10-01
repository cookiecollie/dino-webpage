import { CSSProperties, HTMLAttributes } from "react"
import { cn } from "../../utils"

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    text?: string
    colorScheme?: string
}

export const Badge = (props: BadgeProps) => {
    const { children, className, text, colorScheme, ...otherProps } = props

    return (
        <div
            className="dino-badge-wrapper"
            style={{ "--color": colorScheme } as CSSProperties}
        >
            {children}
            {text && (
                <span {...otherProps} className={cn("dino-badge", className)}>
                    {text}
                </span>
            )}
        </div>
    )
}
