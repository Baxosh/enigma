export const reorderElement = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
}

export function range(length) {
    return Array.from(Array(length).keys())
}
