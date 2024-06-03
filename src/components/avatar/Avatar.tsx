import * as RadixAvatar from "@radix-ui/react-avatar"

interface AvatarProps extends RadixAvatar.AvatarProps {}
export const Avatar = (props: AvatarProps) => {
    return <RadixAvatar.Root {...props} className="dino-avatar" />
}

interface ImageProps extends RadixAvatar.AvatarImageProps {}
export const Image = (props: ImageProps) => {
    return <RadixAvatar.Image {...props} />
}

interface FallbackProps extends RadixAvatar.AvatarFallbackProps {}
export const Fallback = (props: FallbackProps) => {
    return <RadixAvatar.Fallback {...props} className="dino-avatar-fallback" />
}
