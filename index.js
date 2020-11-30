// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(drivers, string) {
    const len = string.length
    return drivers.filter(function(driver) {
        return driver.substring(0, len) === string
    })
}

function matchName(drivers, string) {
    return drivers.filter(function(driver) {
        return driver.name === string
    })
}