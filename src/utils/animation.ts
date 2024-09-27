import { RefObject, useEffect, useState } from "react"

export const useMountTransition = (
    ref: RefObject<HTMLElement>,
    isMounted: boolean
) => {
    const [shouldAnimate, setShouldAnimate] = useState(false)

    const handleUnmountAnimation = async () => {
        if (ref.current) {
            await Promise.allSettled(
                ref.current.getAnimations().map((a) => a.finished)
            )
            setShouldAnimate(false)
        }
    }

    useEffect(() => {
        if (isMounted && !shouldAnimate) {
            setShouldAnimate(true)
        } else if (!isMounted && shouldAnimate) {
            handleUnmountAnimation()
        }
    }, [isMounted])

    return { state: isMounted && shouldAnimate, shouldAnimate }
}
