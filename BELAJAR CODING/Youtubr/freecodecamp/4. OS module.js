const os = require("os")
const user = os.userInfo()
// console.log(user)


// show uptime users in seconds using os module
console.log(`Your uptime pc is ${os.uptime()} seconds`)

// show current os status
const currentOS = {
    name:os.type(),
    release:os.release(),
    freeMemory:os.freemem(),
    totalMemory:os.totalmem(),
}
console.log(currentOS)