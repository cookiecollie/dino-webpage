import * as RadixIcon from "@radix-ui/react-accessible-icon"

interface IconProps extends RadixIcon.AccessibleIconProps {}
export const Icon = (props: IconProps) => {
    return <RadixIcon.Root {...props} />
}
