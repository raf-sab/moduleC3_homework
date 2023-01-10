/* Задание 4
   Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. 
   Реализуйте его на прототипах.
   Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
   Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
   Выбрав прибор, подумайте, какими свойствами он обладает. */

/* План:
   1. Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
   2. Создать делегирующую связь [[Prototype]] для конкретных приборов.
   3. У каждого из приборов должны быть собственные свойства и 
      методы, отличные от родительских методов.
   4. Создать экземпляры каждого прибора.
   5. Вывести в консоль и посмотреть результаты работы 
   6. Вывести в консоль сумарную мощность подключенных приборов */


// РЕШЕНИЕ

// родительская функция приборов
function Appliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

// метод - включает прибор
Appliance.prototype.plugIn = function() {
    console.log(this.name + " is plugged");
    this.isPlugged = true;
};

// метод - выключает прибор
Appliance.prototype.unplug = function() {
    console.log(this.name + " is unplugged");
    this.isPlugged = false;
};

// прибор - Computer
function Computer(name, brand, power, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
}

Computer.prototype = new Appliance();  // делегирующая связь для прибора - Computer

// прибор - Monitor
function Monitor(name, brand, power, type, diagonal, resolution) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.diagonal = diagonal;
    this.resolution = resolution;
    this.isPlugged = false;
}

Monitor.prototype = new Appliance();  // делегирующая связь для прибора - Monitor

// прибор - Printer
function Printer(name, brand, power, type, color) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.color = color;
    this.isPlugged = false;
}

Printer.prototype = new Appliance();  // делегирующая связь для прибора - Printer

// прибор - Lamp
function Lamp(name, brand, power, bulbType) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.bulbType = bulbType;
    this.isPlugged = true;
}

Lamp.prototype = new Appliance();  // делегирующая связь для прибора - Lamp

// экземпляры приборов
const myComputer = new Computer("Lenovo Legion T5 Gen 8", "Lenovo", 450, "Stationary", "WorkStation");
const myMonitor = new Monitor("Mateview SE", "Huawei", 20, "IPS", 24, "1920x1080");
const myPrinter = new Printer("Brother Hl-l2340DWR", "Brother", 455, "Laser", "Black and white");
const myLamp = new Lamp("Colby LED Desk Lamp", "Adesso", 9, "LED");

console.log();

// включаю приборы в розетку
myComputer.plugIn();
myMonitor.plugIn();
myPrinter.plugIn();
myLamp.plugIn();

console.log();

// отключаю лампу от розетки
myLamp.unplug();

console.log();

// результат
console.log(myComputer);
console.log(myMonitor);
console.log(myPrinter);
console.log(myLamp);

// потребляемая мощность всех включенных в розетку приборов
const apps = [myComputer, myMonitor, myPrinter, myLamp];
let allPluggedPower = 0;  // счетчик мощности подключенных приборов
for (let i in apps) {
    if (apps[i].isPlugged) {
        allPluggedPower = allPluggedPower + apps[i].power;
    }
  }

console.log();
console.log('Мощность (power) всех включенных в розетку приборов:');
console.log(allPluggedPower);