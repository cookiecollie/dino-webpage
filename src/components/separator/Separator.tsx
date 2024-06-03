import * as RadixSeparator from "@radix-ui/react-separator"

interface SeparatorProps extends RadixSeparator.SeparatorProps {}

export const Separator = (props: SeparatorProps) => {
    return <RadixSeparator.Root {...props} className="dino-separator" />
}
