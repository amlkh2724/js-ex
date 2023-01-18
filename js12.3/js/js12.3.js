const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ],
};

//     Take the school object and create the following methods to
// that object:
// 1. A method called “findPerson” takes two arguments, a type
// (either a student or teacher), and an id. It will return a
// particular object of that person.


const findperson = (studentss, id) => {
    return studentss.find(student => {
        if (student.id === id) {
            return student
        }
    })

}
const students = school.students
console.log(findperson(students, 13));




// const findPerson = (typestudent, id) => {
//     return typestudent.find(student => {
//         if (student.id === id) {
//             return student
//         }
//     })
// }
// const students = school.students
// console.log(findPerson(students, 13));



















// 2. A method called “assignStudent” that takes two
// arguments, a student’s id and a subject. Assign all of the
// students to the first available teacher who teaches that
// subject and who is not in full capacity. If all of the teachers
// are in the full capacity log to the console “Sorry, no
// available teachers left”.





// function assignStudent(id, subject) {

//     let student = students.find(student => student.id === id);
//     let teacher = school.teachers.find(teacher => teacher.subjects.includes(subject) && teacher.capacityLeft > 0);
//     if (student && teacher) {
//         teacher.students.push(student);
//         teacher.capacityLeft--;
//         return teacher;
//     } else if (!teacher) {
//         console.log("Sorry, no available teachers left for this subject");
//     }
// }

// console.log(assignStudent(10, 'biology'));
// assignStudent(school, 10, 'history');
