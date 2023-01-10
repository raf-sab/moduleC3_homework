/* Задание 1
   Написать, функцию, которая принимает в качестве аргумента объект 
   и выводит в консоль все ключи и значения только собственных свойств. 
   Данная функция не должна возвращать значение. */


// РЕШЕНИЕ

function printObj (obj) {
   for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
         console.log(prop, obj[prop]);
      }
   }
}


// ПРОВЕРКА

// создаем объект
const test = {
   propA: "AAA",
   propB: "BBB"
}

// создаем объект с прототипом
const testProt = Object.create(test);

// добавляем собственные свойства объекту testProt
testProt.propC = "CCC";
testProt.propD = "DDD";

// выводим все свойства объекта testProt
console.log('Все свойства объекта testProt:');
for (let prop in testProt) {
   console.log(prop, testProt[prop]);
}

// выводим только собственные свойства объекта testPrototyp с помощью функции
console.log('\nТолько собственные свойства объекта testPrototyp:');
printObj (testProt);
