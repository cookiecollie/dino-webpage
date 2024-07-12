import * as RadixAspectRatio from "@radix-ui/react-aspect-ratio"

interface AspectRatioProps extends RadixAspectRatio.AspectRatioProps {}

export const AspectRatio = (props: AspectRatioProps) => {
    const { children, ...others } = props
    return <RadixAspectRatio.Root {...others}>{children}</RadixAspectRatio.Root>
}
