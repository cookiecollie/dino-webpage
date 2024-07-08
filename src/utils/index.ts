export const getCSSVal = (value: number | string) => {
    return typeof value === "number" ? `${value}px` : value
}
