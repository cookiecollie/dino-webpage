import * as RadixAspectRatio from "@radix-ui/react-aspect-ratio"

interface AspectRatioProps extends RadixAspectRatio.AspectRatioProps {}

export const AspectRatio = (props: AspectRatioProps) => {
    return <RadixAspectRatio.Root {...props} />
}
