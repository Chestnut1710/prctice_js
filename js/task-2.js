// Напишіть програму, яка отримає від користувача
// число(к - ть хвилин) та виведе у консоль рядок
// у форматі годин та хвилин
// 70 === 01: 10

// padStart - метод для таймера, працює на рядку String!

// const MINUTES = 70;
// const MINUTES2 = 75;
// const hours = String(Math.floor(MINUTES / 60)).padStart(2, "0");
// console.log(hours);
// const minutes = String(MINUTES % 60).padStart(2, "0");
// console.log(minutes);


// console.log(`${hours}:${minutes}`);

function convertTime(time) {
    const hours = String(Math.floor(time / 60)).padStart(2, "0");
console.log(hours);
const minutes = String(time % 60).padStart(2, "0");
console.log(minutes);


return `${hours}:${minutes}`;
}
console.log(convertTime(70));
console.log(convertTime(75));