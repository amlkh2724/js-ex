// The following exercise contains the following subjects:
// ● events
// Instructions
// Create a webpage that has a form (asks the user for its name,
// age, and email address) and when the user clicks submit, open
// a text window that writes all the information and asks for his
// confirmation. If he clicks on the confirm button, tell him
// “congratulations you successfully sent this form” if he clicks on
// change information, give him the possibility to change the
// information, and ask again for his confirmation
function clickSubmit() {
    const getName = document.querySelector(".name").value;
    const getAge = document.querySelector(".age").value;
    const getEmail = document.querySelector(".email").value;
    const dataInformation = confirm(`Name: ${getName}\nAge: ${getAge}\nEmail: ${getEmail}`);
    if (dataInformation) {
        alert("Congratulations! You successfully sent this form.");
        return true;
    } else {
        return false;
    }
}
