export const role = {
    main: 'Админ',
    branch: 'Насосные станцы',
    district: 'Район',
    districtSector: 'Сектор района',
    reporter: 'Докладчик',
}

export const roleMain = ['main']
export const roleBranch = ['main', 'branch', 'district', 'reporter']
export const roleDistrictSector = ['main', 'districtSector']
export const roleDistrict = ['main', 'district']
export const roleDistrictWithSector = ['main', 'district', 'districtSector']

export function position(name) {
    return role[name]
}

export const reporters = {
    itb: 'Irrigatsiya tizim boshqarmasi',
    district_irrigation_department: 'Tuman irrigatsiya bulimi',
    pump_station: 'Nasos stansiya',
    others: 'Boshqalar',
}
