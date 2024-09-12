import { Slot } from "@radix-ui/react-slot"
import { HTMLAttributes } from "react"
import { cn } from "../../utils"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
}

export const Button = (props: ButtonProps) => {
    const { className, asChild, ...otherProps } = props
    const Component = asChild ? Slot : "button"
    return (
        <Component {...otherProps} className={cn("dino-button", className)} />
    )
}
