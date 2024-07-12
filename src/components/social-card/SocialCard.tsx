import { HTMLAttributes, PropsWithChildren } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../avatar"

interface SocialCardProps extends HTMLAttributes<HTMLDivElement> {}

export const SocialCard = (props: SocialCardProps) => {
    return <div {...props} className="dino-social-card" />
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
        <div className="flex items-center gap-4">
            {pfpSrc && (
                <Avatar>
                    <AvatarImage src={pfpSrc} />
                    <AvatarFallback>{pfpFallback}</AvatarFallback>
                </Avatar>
            )}

            <div>
                {displayName && <p className="font-bold">{displayName}</p>}
                {username && (
                    <p className="text-sm text-neutral-500">{username}</p>
                )}
            </div>
        </div>
    )
}

interface SocialCardContentProps extends PropsWithChildren {}
export const SocialCardContent = (props: SocialCardContentProps) => {
    const { children } = props
    return <div className="flex-1">{children}</div>
}

interface SocialCardLinkButtonProps extends PropsWithChildren {}
export const SocialCardLinkButton = (props: SocialCardLinkButtonProps) => {
    const { children } = props
    return (
        <div className="flex min-h-10 w-full items-center justify-center rounded-full border">
            {children}
        </div>
    )
}
