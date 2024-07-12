import { HTMLAttributes } from "react"

interface SocialCardProps extends HTMLAttributes<HTMLAnchorElement> {}

export const SocialCard = (props: SocialCardProps) => {
    return <a {...props} className="dino-social-card" />
}
