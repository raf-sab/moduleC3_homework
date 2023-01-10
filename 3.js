/* Задание 3
   Написать функцию, которая создает пустой объект, но без прототипа. */


// РЕШЕНИЕ

function createObjNull() {
    return Object.create(null);
  }


// ПРОВЕРКА

// создаем объект test с помощью функции
const test = createObjNull();

// пытаемся вывести свойства объекта test
console.log('Количество свойств в пустом объекте:');
n = 0;  // счетчик
for (let prop in test) {
  console.log(test[prop]);
  n++;
}
console.log(n);

// для проверки добавим свойства и повторим вывод
test.propA = "AAA";
test.propB = "BBB";

console.log('\nДобавленные свойства (значения):');
n = 0;  // счетчик
for (let prop in test) {
  console.log(test[prop]);
  n++;
}
console.log('\nКоличество свойств после добавления свойств:');
console.log(n);