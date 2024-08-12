import * as RadixSeparator from "@radix-ui/react-separator"

interface Separator extends RadixSeparator.SeparatorProps {}
export const Separator = (props: Separator) => {
    return <RadixSeparator.Root {...props} className="dino-separator" />
}
