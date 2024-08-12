import { AccessibleIconProps } from "@radix-ui/react-accessible-icon"
import { AnchorHTMLAttributes } from "react"
import { Icon } from "../icon/Icon"

interface IconLinkProps
    extends AccessibleIconProps,
        AnchorHTMLAttributes<HTMLAnchorElement> {}

export const IconLink = (props: IconLinkProps) => {
    const { label, children, ...anchorProps } = props
    return (
        <a {...anchorProps}>
            <Icon label={label}>{children}</Icon>
        </a>
    )
}
