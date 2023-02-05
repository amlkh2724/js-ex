class information {
    constructor(name, age, life) {
        this.name = name
        this.age = age
        this.life = life
    }

}
Array.prototype.doFilter = function () {
    return this.filter(info => info.age > 25)
}


const getInformation1=new information("asd",30,"happy")
const getInformation2=new information("asd",60,"happy")
const getInformation3=new information("asd",20,"happy")

const informationArray = [getInformation1, getInformation2, getInformation3];
const filteredArray = informationArray.doFilter();
console.log(filteredArray);


