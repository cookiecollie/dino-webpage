import { ClassValue, clsx } from "clsx/lite"

export const cn = (...classnames: ClassValue[]) => {
    return clsx(...classnames)
}
