export function newInitialValues(
    territories, reportDetail, reportYesterdayDetail, reportItemDetail, activePeriod,
) {
    const initialValues = { items: [] }

    if (territories && territories.results) {
        territories.results.forEach((item) => {
            if (reportDetail) {
                const reportItem = reportItemDetail.filter((i) => (i.territory.id === item.id))[0]
                const newItem = {
                    yesterdayWater: reportItem ? reportItem.amountWater : 0,
                    ...reportItem,
                }

                // eslint-disable-next-line no-unused-expressions
                reportItem && reportItem.periods.forEach((period) => {
                    newItem[`period-${period.activePeriod}`] = period.value
                })

                initialValues.items.push(newItem)
            } else {
                const yesterdayReportItem = reportYesterdayDetail.filter((i) => (i.territory.id === item.id))[0]

                const newItem = {
                    limit: 0,
                    amountWater: 0,
                    capacity: 0,
                    totalAreaDay: 0,
                    watermanCount: 0,
                    yesterdayWater: yesterdayReportItem ? yesterdayReportItem.amountWater : 0,
                }

                if (activePeriod && activePeriod.results) {
                    activePeriod.results.forEach((period) => {
                        newItem[`period-${period.id}`] = 0
                    })
                }

                initialValues.items.push(newItem)
            }
        })
    }
    return initialValues
}
