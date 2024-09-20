import { AnchorHTMLAttributes } from "react"
import { cn } from "../../utils"

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Link = (props: LinkProps) => {
    const { className, ...otherProps } = props

    return <a className={cn("dino-link", className)} {...otherProps} />
}
