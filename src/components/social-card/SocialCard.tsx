import { AnchorHTMLAttributes, PropsWithChildren } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../avatar"

interface SocialCardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    noHoverFx?: boolean
}

export const SocialCard = (props: SocialCardProps) => {
    const { noHoverFx = false, ...others } = props

    return (
        <a {...others} className="dino-social-card" data-no-hover={noHoverFx} />
    )
}

interface SocialCardInfoProps {
    pfpSrc?: string
    pfpFallback?: string
    displayName?: string
    username?: string
}
export const SocialCardInfo = (props: SocialCardInfoProps) => {
    const { displayName, pfpFallback, pfpSrc, username } = props

    return (
        <div className="dino-social-card-info">
            {pfpSrc && (
                <Avatar>
                    <AvatarImage src={pfpSrc} />
                    <AvatarFallback>{pfpFallback}</AvatarFallback>
                </Avatar>
            )}

            <div>
                {displayName && <p className="displayName">{displayName}</p>}
                {username && <p className="userName">{username}</p>}
            </div>
        </div>
    )
}

interface SocialCardContentProps extends PropsWithChildren {}
export const SocialCardContent = (props: SocialCardContentProps) => {
    const { children } = props
    return <div className="dino-social-card-content">{children}</div>
}

interface SocialCardLinkButtonProps extends PropsWithChildren {}
export const SocialCardLinkButton = (props: SocialCardLinkButtonProps) => {
    const { children } = props
    return <div className="dino-social-card-link-button">{children}</div>
}
