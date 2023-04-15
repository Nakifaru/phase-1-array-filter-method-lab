// Code your solution here
function findMatching(drivers, driverName) {
    return drivers.filter( driver => driver.toLowerCase() === driverName.toLowerCase());
};

function fuzzyMatch(drivers, firstLetter) {
    return drivers.filter( (driver) => driver.startsWith(firstLetter));
}

function matchName(drivers, driverName) {
    return drivers.filter((driver) => driver.name === driverName);
}
