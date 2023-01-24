// 1. Loop over the array with the forEach method and
// dynamically create an ordered list of the first and last
// names of the objects.
// 2. Remove the bullet points of the ordered list with
// JavaScript.
// 3. Create a custom data attribute called “data-id” and attach
// the id value to each li.
// Your markup should look like this:

const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];


const list = document.createElement("ol");

users.forEach(user => {
    const personName = document.createElement("li");
    personName.innerHTML = `${user.firstName} ${user.lastName}`;
    personName.setAttribute("data-id", user.id);
    list.appendChild(personName);
});

document.body.appendChild(list);

list.style.listStyleType = "none";

