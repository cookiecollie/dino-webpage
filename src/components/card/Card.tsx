import { PropsWithChildren } from "react"

interface CardProps extends PropsWithChildren {}

export const Card = (props: CardProps) => {
    const { children } = props

    return <div className="dino-card">{children}</div>
}
