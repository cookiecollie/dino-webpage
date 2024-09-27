import { ClassValue, clsx } from "clsx/lite"

import { useMountTransition } from "./animation"
import { styleInjector } from "./styleInjector"

export { styleInjector, useMountTransition }

export const cn = (...classnames: ClassValue[]) => {
    return clsx(...classnames)
}
