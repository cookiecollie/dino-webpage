import { IconContext, IconProps } from "@phosphor-icons/react"
import { AccessibleIconProps } from "@radix-ui/react-accessible-icon"
import { ElementType, useCallback } from "react"
import { PolymorphicPropsWithoutRef } from "../../utils/Polymorpher"
import { Icon } from "../icon/Icon"

interface AccessibleIBProps
    extends AccessibleIconProps,
        Pick<IconProps, "weight"> {
    size?: number
    colorScheme?: "neutral" | "primary"
    iconColor?: string
}

export const IconButton = <C extends ElementType>(
    props: PolymorphicPropsWithoutRef<C, AccessibleIBProps>
) => {
    const {
        children,
        label,
        size = 40,
        as,
        weight = "fill",
        colorScheme = "primary",
        iconColor,
        ...others
    } = props

    const Component = as || "button"

    const setStyle = useCallback((node: HTMLElement | null) => {
        if (node != null) {
            node.style.setProperty("--dino-icon-button-size", `${size}px`)
            if (iconColor)
                node.style.setProperty("--dino-icon-button-color", iconColor)
        }
    }, [])

    return (
        <Icon label={label}>
            <IconContext.Provider value={{ size: size - 18, weight }}>
                <Component
                    className="dino-icon-button"
                    data-color={iconColor ?? colorScheme}
                    ref={setStyle}
                    {...others}
                >
                    {children}
                </Component>
            </IconContext.Provider>
        </Icon>
    )
}
