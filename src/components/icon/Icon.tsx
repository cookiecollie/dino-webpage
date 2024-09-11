import { IconContext } from "@phosphor-icons/react"
import * as RadixIcon from "@radix-ui/react-accessible-icon"

interface IconProps extends RadixIcon.AccessibleIconProps {}

export const Icon = (props: IconProps) => {
    return (
        <IconContext.Provider value={{ size: 24, weight: "fill" }}>
            <RadixIcon.Root {...props} />
        </IconContext.Provider>
    )
}
