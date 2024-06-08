import {
    ElementType,
    HTMLAttributes,
    ReactElement,
    ReactNode,
    forwardRef,
} from "react"
import { PolymorphicProps, PolymorphicRef } from "../../utils"

interface CustomProps extends HTMLAttributes<HTMLButtonElement> {
    icon?: ReactElement
    iconPosition?: "left" | "right"
    variants?: "fill" | "outline" | "ghost"
    colorScheme?: "primary" | "neutral"
}

type ButtonProps<C extends ElementType> = PolymorphicProps<C, CustomProps>

export const Button: <C extends ElementType>(
    props: ButtonProps<C>
) => ReactNode | null = forwardRef(function Button<C extends ElementType>(
    props: ButtonProps<C>,
    ref?: PolymorphicRef<C>
) {
    const {
        children,
        as,
        icon,
        iconPosition,
        variants = "fill",
        colorScheme = "primary",
        ...others
    } = props
    const Component = as || "button"

    return (
        <Component
            {...others}
            ref={ref}
            className="dino-button"
            data-icon-position={iconPosition}
            data-variant={variants}
            data-color={colorScheme}
        >
            {icon && <span>{icon}</span>}
            <span>{children}</span>
        </Component>
    )
})
