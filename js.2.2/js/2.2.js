
function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
    return `you will be a ${jobTitle} in ${location} married to ${partnerName} with ${numberOfChildren}`
}
const fortune = tellFortune("programmer", "New York", "Rana", "2 children");
console.log(fortune);