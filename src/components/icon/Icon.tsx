import * as RadixIcon from "@radix-ui/react-accessible-icon"

interface Icon extends RadixIcon.AccessibleIconProps {}
export const Icon = (props: Icon) => {
    return <RadixIcon.Root {...props} />
}
