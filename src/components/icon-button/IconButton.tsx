import { IconContext, IconProps } from "@phosphor-icons/react"
import { AccessibleIconProps } from "@radix-ui/react-accessible-icon"
import { ElementType, ReactNode, forwardRef, useEffect } from "react"
import { PolymorphicProps, PolymorphicRef } from "../../utils"
import { Icon } from "../icon/Icon"

interface AccessibleIBProps
    extends AccessibleIconProps,
        Pick<IconProps, "weight"> {
    size?: number
}

type IconButtonProps<C extends ElementType> = PolymorphicProps<
    C,
    AccessibleIBProps
>

export const IconButton: <C extends ElementType>(
    props: IconButtonProps<C>
) => ReactNode | null = forwardRef(function IconButton<C extends ElementType>(
    props: IconButtonProps<C>,
    ref?: PolymorphicRef<C>
) {
    const { children, label, size = 40, as, weight = "fill", ...others } = props

    const Component = as || "button"

    useEffect(() => {
        const element = document.querySelector(
            ".dino-icon-button"
        ) as HTMLElement

        element.style.setProperty("--dino-icon-button-size", `${size}px`)
    }, [size])

    return (
        <Icon label={label}>
            <IconContext.Provider value={{ size: size - 18, weight }}>
                <Component className="dino-icon-button" ref={ref} {...others}>
                    {children}
                </Component>
            </IconContext.Provider>
        </Icon>
    )
})
