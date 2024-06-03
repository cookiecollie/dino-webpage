import { IconProps } from "@phosphor-icons/react"
import { AccessibleIconProps } from "@radix-ui/react-accessible-icon"
import { IconButton } from "../icon-button"

interface FABProps extends AccessibleIconProps, Pick<IconProps, "weight"> {
    size?: number
}

export const FAB = (props: FABProps) => {
    const { children, label, size = 48, weight } = props
    return (
        <span className="dino-fab-wrapper">
            <IconButton label={label} size={size} weight={weight}>
                {children}
            </IconButton>
        </span>
    )
}
