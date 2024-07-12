import { HTMLAttributes } from "react"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export const Button = (props: ButtonProps) => {
    const { children, ...others } = props
    return (
        <button {...others} className="dino-button">
            {children}
        </button>
    )
}
