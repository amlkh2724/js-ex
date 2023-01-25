// The following exercise contains the following subjects:
// ● the dom
// Instructions
// Create a webpage that has part of the application
// process for a job. This page should have a text area
// field and a button. Your user must enter at least 100
// characters before clicking the button. If he didn’t, please
// give him the appropriate message. (using alert is
// forbidden)
function checkText() {
    const textArea = document.getElementById("textType").value.length
    if (textArea > 100) {
        alert("Your message has been sent successfully")
    } else {
        alert("type more //TIP--information about your self")
    }

}