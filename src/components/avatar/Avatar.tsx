import * as RadixAvatar from "@radix-ui/react-avatar"
import { useEffect, useRef } from "react"

interface AvatarProps extends RadixAvatar.AvatarProps {
    size?: string | number
}
export const Avatar = (props: AvatarProps) => {
    const { size = 24, ...others } = props

    const avatarRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        if (avatarRef.current)
            avatarRef.current.style.setProperty(
                "--dino-avatar-size",
                typeof size === "string" ? size : `${size}px`
            )
    }, [size])

    return (
        <RadixAvatar.Root {...others} className="dino-avatar" ref={avatarRef} />
    )
}

interface ImageProps extends RadixAvatar.AvatarImageProps {}
export const Image = (props: ImageProps) => {
    return <RadixAvatar.Image {...props} />
}

interface FallbackProps extends RadixAvatar.AvatarFallbackProps {
    size?: number | string
}
export const Fallback = (props: FallbackProps) => {
    const { size = 12, ...others } = props

    const fallbackRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        if (fallbackRef.current)
            fallbackRef.current.style.setProperty(
                "--dino-avatar-fallback-size",
                typeof size === "string" ? size : `${size}px`
            )
    }, [size])

    return (
        <RadixAvatar.Fallback
            {...others}
            className="dino-avatar-fallback"
            ref={fallbackRef}
        />
    )
}
