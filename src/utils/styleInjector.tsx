import { Children, HTMLAttributes, ReactNode } from "react"

interface StylizedChildren
    extends Pick<HTMLAttributes<unknown>, "className" | "children"> {}

export const styleInjector = ({
    children,
    className = "",
}: StylizedChildren) => {
    if (children == null) return null

    className = className.trim()
    if (!className) return <>{children}</>

    return (
        <>
            {Children.map(children, (child) => classAppender(child, className))}
        </>
    )
}

const classAppender = (node: ReactNode, className: string): ReactNode => {
    if (node == null) {
        node satisfies null | undefined
        return node
    }

    if (typeof node !== "object") {
        node satisfies string | number | boolean
        return <span className={className}>{node}</span>
    }
}
