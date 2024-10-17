// Використовуючи фунуцію if...else , напишіть код, який запитуватиме:
// "Яка офіційна назва JS"
// Якщо користувач вводить  "ECMAScript", то показати через алерт "Вірно!"
// інакше відобразити: "Незнаєте? ECMAScript!"


const answer = prompt("Яка офіційна назва JS").trim()
console.log(answer)
    const CORRECT_VALUE="ECMAScript"
    if (answer===CORRECT_VALUE) {
        alert("Вірно!")
    } else {
        alert("Незнаєте? ECMAScript!")
    }
