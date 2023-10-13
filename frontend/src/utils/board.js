export function changePositionAndColumn(
    items,
    id,
    source,
    destination,
) {
    const sourcePosition = source.index + 1
    const destinationPosition = destination.index + 1

    return items.map((item) => {
        const isStatusChanged = String(source.droppableId) !== String(destination.droppableId)
        const isMovedUp = sourcePosition < destinationPosition && !isStatusChanged
        const isMovedDown = sourcePosition > destinationPosition && !isStatusChanged && !isMovedUp
        const positionGtOldPosition = item.position > sourcePosition
        const positionLtOldPosition = item.position < sourcePosition
        const srcStatusChanged = String(item.status) === source.droppableId
        const destStatusChanged = String(item.status) === destination.droppableId
        const positionGteNewPosition = item.position >= destinationPosition
        const positionLteDestPosition = item.position <= destinationPosition
        const positionGtNewPositionAndStatusEStatus = positionGteNewPosition && destStatusChanged

        if (id === String(item.id)) {
            const status = Number(destination.droppableId) || destination.droppableId
            return { ...item, status, position: destinationPosition }
        }

        if ((isStatusChanged && positionGtOldPosition && srcStatusChanged)
            || (isMovedUp && positionGtOldPosition && positionLteDestPosition && destStatusChanged)) {
            return { ...item, position: item.position - 1 }
        }

        if ((isStatusChanged && positionGtNewPositionAndStatusEStatus)
            || (isMovedDown && positionLtOldPosition && positionGtNewPositionAndStatusEStatus)) {
            return { ...item, position: item.position + 1 }
        }

        return item
    })
}
