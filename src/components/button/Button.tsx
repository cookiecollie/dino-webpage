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
    hasVFX?: boolean
}

type ButtonProps<C extends ElementType> = PolymorphicProps<C, CustomProps>

export const Button: <C extends ElementType>(
    props: ButtonProps<C>
) => ReactNode | null = forwardRef(function Button<C extends ElementType>(
    props: ButtonProps<C>,
    ref?: PolymorphicRef<C>
) {
    const { children, as, icon, iconPosition, hasVFX = true, ...others } = props
    const Component = as || "button"

    return (
        <Component
            {...others}
            ref={ref}
            className="dino-button"
            data-icon-position={iconPosition}
            data-vfx={hasVFX}
        >
            {icon && <span>{icon}</span>}
            <span>{children}</span>
        </Component>
    )
})
