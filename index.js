const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    const newObject = {...driver}
    newObject[key] = value
    return newObject
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key) {
    const newObj = {...driver}
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}