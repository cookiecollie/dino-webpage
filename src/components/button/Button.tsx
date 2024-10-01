import { Slot } from "@radix-ui/react-slot"
import { CSSProperties, HTMLAttributes } from "react"
import { cn } from "../../utils"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
    themeColor?: string
    fit?: boolean
}

export const Button = (props: ButtonProps) => {
    const { className, asChild, themeColor, fit = false, ...otherProps } = props
    const Component = asChild ? Slot : "button"
    return (
        <Component
            {...otherProps}
            className={cn("dino-button", className)}
            style={{ "--theme-color": themeColor } as CSSProperties}
            data-fit={fit}
        />
    )
}
