/**
Напишіть код, який запитуватиме
логін за допомогою prompt та логуватиме результат
у консоль браузера

Якщо відвідувач вводить "Адмін",
то промпт запитує пароль.promptЯкщо нічого не ввели або натиснуто Esc 
вивести рядок "Скасовано"
В іншому випадку вивести рядок "Я вас не знаю"

Пароль перевіряти так:
Якщо введено пароль "Я головний",
то вивести рядок "Вітаю!"
інакше вивести рядок "Невірний пароль!"
**/

const que = prompt("Your login?");
console.log(que);
const adm = "Admin";
const validPassword = "Я головний"
if (que === adm) {
    const password = prompt("Enter password please!");
    if (password) {
        if (password === validPassword) {
            alert("Вітаю!");
        }
        else {
            alert("Невірний пароль!");
        }
    } else {
        alert("Canseled")
    }
} else {
    alert("I don't know you!");
}
    // console.log();
