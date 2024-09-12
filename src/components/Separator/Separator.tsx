import * as RadixSeparator from "@radix-ui/react-separator"
import { cn } from "../../utils"

interface SeparatorProps extends RadixSeparator.SeparatorProps {}

export const Separator = (props: SeparatorProps) => {
    const { className, ...otherProps } = props
    return (
        <RadixSeparator.Root
            {...otherProps}
            className={cn("dino-separator", className)}
        />
    )
}
