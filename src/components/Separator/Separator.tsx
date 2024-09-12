import * as RadixSeparator from "@radix-ui/react-separator"

interface SeparatorProps extends RadixSeparator.SeparatorProps {}

export const Separator = (props: SeparatorProps) => {
    const { className, ...otherProps } = props
    return (
        <RadixSeparator.Root
            {...otherProps}
            className={["dino-separator", className]
                .filter((cn) => cn != null && cn != "")
                .join(" ")}
        />
    )
}
