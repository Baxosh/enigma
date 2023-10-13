export const irrigationTypes = [{
    key: 'grain',
    active: 'grainActive',
    name: 'grain',
    season: 'no_vegetation',
}, {
    key: 'cotton',
    active: 'cottonActive',
    name: 'cotton',
    season: 'no_vegetation',
}, {
    key: 'repeatIrrigation',
    active: 'repeatIrrigationActive',
    name: 'repeatIrrigation',
    season: 'no_vegetation',
}, {
    key: 'garden',
    active: 'gardenActive',
    name: 'garden',
    season: 'no_vegetation',
}, {
    key: 'grainPreparation',
    active: 'grainPreparationActive',
    name: 'grainPreparation',
    season: 'vegetation',
}, {
    key: 'saltWash',
    active: 'saltWashActive',
    name: 'saltWash',
    season: 'vegetation',
}, {
    key: 'saltWashPlow',
    active: 'saltWashPlowActive',
    name: 'saltWashPlow',
    season: 'vegetation',
}, {
    key: 'cottonWash',
    active: 'cottonWashActive',
    name: 'cottonWash',
    season: 'vegetation',
}, {
    key: 'preparation',
    active: 'preparationActive',
    name: 'preparation',
    season: 'vegetation',
}, {
    key: 'potatoPreparation',
    active: 'potatoPreparationActive',
    name: 'potatoPreparation',
    season: 'vegetation',
}]

export function getIrrigationType(type) {
    return irrigationTypes.filter((item) => item.season === type)
}

export function getActiveIrrigation(period) {
    if (!period || period === '') {
        return []
    }

    return irrigationTypes.filter((item) => period[item.active])
}
