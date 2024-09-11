import { HTMLAttributes, ReactNode } from "react"
import { Icon } from "../icon/Icon"

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
        <div
            className={["dino-icon-group", className]
                .filter((cn) => cn != null && cn != "")
                .join(" ")}
            {...otherProps}
        >
            {items.map(({ children, label, key }) => (
                <Icon label={label} key={key}>
                    {children}
                </Icon>
            ))}
        </div>
    )
}
