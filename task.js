// function greet(name, callback) {
//     console.log("Привет, " + name + "!");
//     callback(); // вызывем переданную функцию
// }

// function sayGoodbye() {
//     console.log("Пока, до скорой встречи!");
// }

// // Передаем sayGoodbye как аргумент БЕЗ круглых скобок
// greet("Алина", sayGoodbye);






// numbers.forEach(num => console.log(num * 2)); 
// // Выведет в консоль: 2, 4, 6, 8, 10





// const doubled = numbers.map(num => num * 2);
// console.log(doubled); // [2, 4, 6, 8, 10]



// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // [2, 4]



// const found = numbers.find(num => num > 3);
// console.log(found); // 4 (первое число, которое больше 3)





// const unsorted = [5, 1, 4, 2, 3];
// const sorted = unsorted.toSorted((a, b) => a - b); // Сортировка по возрастанию
// console.log(sorted);   // [1, 2, 3, 4, 5]
// console.log(unsorted); // [5, 1, 4, 2, 3] (исходный не изменился)




// const sum = numbers.reduce((acc, num) => acc + num, 0); 
// // 0 — это начальное значение аккумулятора
// console.log(sum); // 15




// const hasNegative = numbers.some(num => num < 0);
// console.log(hasNegative); // false (отрицательных чисел нет)



// const allPositive = numbers.every(num => num > 0);
// console.log(allPositive); // true (все числа больше нуля)



// let person = {
//     name: "Tolibjon",
//     age: 13,
// }

// let  keys = Object.entries(person)
// console.log(keys)




// let user = {
//     name: "Tolibjon",
//     age: 17,
//     isAdult: false,
// }





// let obj = {
//     lesson: "JS",
//     time: "16:00" - "18:00",
//     pupils: solution = () => {
//         console.log(13)
//     }
// }






// // Получить значение
// console.log(user.name);

// // Изменить значение
// user.age = 26;

// // Добавить новое свойство
// user.city = "Москва";



// let a = {
//   "max speed": 12000
// }
// console.log(spaceship["max speed"]); // 12000





// const user = { name: 'Алиса', age: 25, country: 'Россия' };
// // Вместо трех строк кода пишем одну:
// const { name, age, country } = user;
// console.log(name); // 'Алиса'





// const { name: userName, age: userAge } = user;
// console.log(userName); // 'Алиса' (переменной name больше нет, есть userName)



// const user = {
//   name: 'Ehson',
//   sayHi() {
//     console.log(`Привет, я ${this.name}`); 
//   }
// };

// user.sayHi()


// function main(name) {
//   this.name = name; // 'this' создается автоматически при вызове через new
// }

// const mainpart = new main('Soft');
// console.log(mainpart.name);


// const obj = {
//   value: 10,
//   arrowFunc: () => {
//     console.log(this.value); // undefined!
//   }
// };
// obj.arrowFunc();



// function introduce(language, town) {
//   console.log(`Меня зовут ${this.name}, я пишу на ${language} в городе ${town}`);
// }

// const developer = { name: 'Иван' };
// introduce.call(developer, 'JavaScript', 'Москва');





// introduce.apply(developer, ['JavaScript', 'Санкт-Петербург']);




const user = { name: 'Ольга' };
function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}
const greetOlga = greet.bind(user);
greetOlga('Добрый день');