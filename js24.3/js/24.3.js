// class information {
//     constructor(name, age, life) {
//         this.name = name
//         this.age = age
//         this.life = life
//     }

// }

// Array.prototype.doFilter = function (callFunc) {
//     return information.filter(age => age > 25)
// }

// const getInformation1=new information("asd",20,"happy")
// const getInformation2=new information("asd",20,"happy")
// const getInformation3=new information("asd",20,"happy")

Array.prototype.doFilter = function(callback) {
    return this.filter(callback);
  };
  
  const people = [
    { name: "John", age: 20 },
    { name: "Jane", age: 25 },
    { name: "Jim", age: 30 }
  ];
  
  const youngPeople = people.doFilter(person => person.age < 25);
  
  console.log(youngPeople);
  

