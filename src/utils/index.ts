import { ItemList, useListItem } from "./ItemList"
export { ItemList, useListItem }

export const getCSSVal = (value: number | string) => {
    return typeof value === "number" ? `${value}px` : value
}

export const omit = <T extends NonNullable<unknown>, K extends keyof T>(
    obj: T,
    ...keys: K[]
) =>
    Object.fromEntries(
        Object.entries(obj).filter(([key]) => !keys.includes(key as K))
    ) as Omit<T, K>
