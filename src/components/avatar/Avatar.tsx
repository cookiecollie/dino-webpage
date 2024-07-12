import * as RadixAvatar from "@radix-ui/react-avatar"

interface AvatarRootProps extends RadixAvatar.AvatarProps {}
export const Avatar = (props: AvatarRootProps) => {
    return <RadixAvatar.Root {...props} className="dino-avatar" />
}

interface AvatarImageProps extends RadixAvatar.AvatarImageProps {}
export const AvatarImage = (props: AvatarImageProps) => {
    return <RadixAvatar.Image {...props} className="dino-avatar-image" />
}

interface AvatarFallbackProps extends RadixAvatar.AvatarFallbackProps {}
export const AvatarFallback = (props: AvatarFallbackProps) => {
    return <RadixAvatar.Fallback {...props} className="dino-avatar-fallback" />
}
