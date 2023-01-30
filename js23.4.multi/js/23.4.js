
const table = document.querySelector("#table tbody");
let output = "";
for (let i = 1; i <= 10; i++) {
    output += "<tr>";
    for (let j = 1; j <= 20; j++) {
        output += "<td>" + i * j + "</td>";
    }
    output += "</tr>";
}
table.innerHTML = output;
