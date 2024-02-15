function isMinnesotaZip(code){
    // All MN zip are between these numbers: 55001 and 56763
    if (code >= 55001 && code <= 56763) {
        return true
    } else {
        return false
    }
}
console.log(isMinnesotaZip(55403))
console.log(isMinnesotaZip(55000))
console.log(isMinnesotaZip(56764))
console.log(isMinnesotaZip(9999999))
console.log(isMinnesotaZip(554))

