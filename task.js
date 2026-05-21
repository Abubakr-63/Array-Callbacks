function greet(name, callback) {
    console.log("Привет, " + name + "!");
    callback(); // вызывем переданную функцию
}

function sayGoodbye() {
    console.log("Пока, до скорой встречи!");
}

// Передаем sayGoodbye как аргумент БЕЗ круглых скобок
greet("Алина", sayGoodbye);






numbers.forEach(num => console.log(num * 2)); 
// Выведет в консоль: 2, 4, 6, 8, 10





const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]



const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]



const found = numbers.find(num => num > 3);
console.log(found); // 4 (первое число, которое больше 3)





const unsorted = [5, 1, 4, 2, 3];
const sorted = unsorted.toSorted((a, b) => a - b); // Сортировка по возрастанию
console.log(sorted);   // [1, 2, 3, 4, 5]
console.log(unsorted); // [5, 1, 4, 2, 3] (исходный не изменился)




const sum = numbers.reduce((acc, num) => acc + num, 0); 
// 0 — это начальное значение аккумулятора
console.log(sum); // 15




const hasNegative = numbers.some(num => num < 0);
console.log(hasNegative); // false (отрицательных чисел нет)



const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true (все числа больше нуля)