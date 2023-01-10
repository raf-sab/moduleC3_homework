/* Задание 2
   Написать функцию, которая принимает в качестве аргументов строку и объект, 
   а затем проверяет, есть ли у переданного объекта свойство с данным именем. 
   Функция должна возвращать true или false. */


// РЕШЕНИЕ

function checkProp (str, obj) {
  return (str in obj);
}


// ПРОВЕРКА

// создаем объект
const test = {
  propA: "AAA",
  propB: "BBB"
}

// проверяем наличие свойства propB
str = 'propB'
console.log(checkProp(str, test));
