import { HTMLAttributes, ReactNode } from "react"
import { Icon } from "../icon/Icon"
import { Tooltip } from "../tooltip"
import { cn } from "../../utils"

interface IconGroup extends HTMLAttributes<HTMLDivElement> {
    items: IconGroupItem[]
}

export interface IconGroupItem {
    children: ReactNode
    label: string
    key: string
}

export const IconGroup = (props: IconGroup) => {
    const { items, className, ...otherProps } = props
    return (
        <div className={cn("dino-icon-group", className)} {...otherProps}>
            {items.map(({ children, label, key }) => (
                <Tooltip label={label} key={key}>
                    <Icon label={label}>{children}</Icon>
                </Tooltip>
            ))}
        </div>
    )
}
