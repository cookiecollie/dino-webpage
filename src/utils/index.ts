import type { PolymorphicProps, PolymorphicRef } from "./Polymorpher"
export { PolymorphicProps, PolymorphicRef }

export const mergeRefs = <T>(
    refs: Array<React.MutableRefObject<T> | React.LegacyRef<T> | null>
): React.RefCallback<T> => {
    return (value) => {
        refs.forEach((ref) => {
            if (typeof ref === "function") {
                ref(value)
            } else if (ref != null) {
                ;(ref as React.MutableRefObject<T | null>).current = value
            }
        })
    }
}
