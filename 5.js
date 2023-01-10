/* Задание 5
   Переписать консольное приложение из предыдущего (4-го) задания на классы. */

// РЕШЕНИЕ

// Классы
class Appliance {
  constructor(name, brand, power){
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.isPlugged = false;
  }
  // метод - включает прибор
  plugIn() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
  }
  
  // метод - выключает прибор
  unplug() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
  }
}

// Прибор 1 - Computer
class Computer extends Appliance {
  constructor (name, brand, power, type, functionality) {
    super(name, brand, power);
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
  }
}

// Прибор 2 - Monitor
class Monitor extends Appliance {
  constructor(name, brand, power, type, diagonal, resolution) {
    super(name, brand, power);
    this.type = type;
    this.diagonal = diagonal;
    this.resolution = resolution;
    this.isPlugged = false;
  }
}

// Прибор 3 - Printer
class Printer extends Appliance {
  constructor(name, brand, power, bulbType) {
    super(name, brand, power);
    this.bulbType = bulbType;
    this.isPlugged = true;
  }
}

// Прибор 4 - Lamp
class Lamp extends Appliance {
  constructor (name, brand, power, bulbType) {
    super(name, brand, power);
    this.bulbType = bulbType;
    this.isPlugged = true;
  }
}

// создаем экземпляры приборов
const myComputer = new Computer("Lenovo Legion T5 Gen 8", "Lenovo", 450, "Stationary", "WorkStation");
const myMonitor = new Monitor("Mateview SE", "Huawei", 20, "IPS", 24, "1920x1080");
const myPrinter = new Printer("Brother Hl-l2340DWR", "Brother", 455, "Laser", "Black and white");
const myLamp = new Lamp("Colby LED Desk Lamp", "Adesso", 9, "LED");

// включаю приборы в розетку
myComputer.plugIn();
myMonitor.plugIn();
myPrinter.plugIn();
myLamp.plugIn();

console.log();

// отключаю лампу от розетки
myLamp.unplug();

// результат
console.log();
console.log(myComputer)
console.log(myMonitor)
console.log(myPrinter)
console.log(myLamp)

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
