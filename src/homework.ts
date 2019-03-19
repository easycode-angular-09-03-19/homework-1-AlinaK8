//1. Создать функцию которая принимает число и считает факториал этого числа.

function getFactorial(value:number):number{
    let result;
    for (let i =1; i <= value; i++) {
        result *= i;
    }
    return result;
}

//2.Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)

// function multiply():number {

//     if (!arguments.length) {
//         return 0
//     }

//     let result = 1
//     for (let i = 0; i <= arguments.length; i++) {
//         result *= arguments[i];
//     }
//     return result;
// }

function multiply(...numbers: number[]): number {
    if (numbers.length == 0) return 0;

    return numbers.reduce((a, b) => a * b);
}

//3. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

function reverseString(value:string):string {
//     let updatedStr = value.split('').reverse().join('');
//     return updatedStr;
    
    return value.split('').reverse().join('');
}


//4. Создать интерфейс Админа.

interface Admin {
    name: string,
    email: string,
    password: string,
    type?: string
}



//1. Создайте абстрактный класс Car с двумя методами drive (ехать) и refuel (заправка) а также с двумя свойствами mileage (общий пробег машины) и fuel (количество бензина в машине).

abstract class Car {

    mileage: number;
    fuel: number;

    abstract public drive():void;
    
    abstract public refuel():void;
}

//2. Наследоваться от абстрактного класса Car и реализовать методы абстрактного класса drive (ехать) и refuel (заправка). Метод drive должен принимать количество километров и обновлять свойство mileage и уменьшать значение свойства fuel если бензин закончился то нужно вернуть сообщение о том что нужно заправиться. Метод refuel должен увеличивать свойство fuel. Обязательно делать проверку переданных данных. Свойства fuel и mileage должны быть protected.
//3. Создать публичный get для получения свойств fuel и mileage.

class MiniCooper extends Car {

    constructor(public name:string, public model: string, public mileage:number, public fuel:number) {
        super();
    }

   public  drive(mileage:number):void {
       if (typeof mileage !=== 'number') return 'please provide a valid value! it should be a number!';
        this.mileage = mileage;
        this.fuel--;
    }

    public refuel():void {
        return fuel++;
    }

    public get stats():string {
        return `fuel: ${this.fuel} and mileage: ${this.mileage}`
    }
 
}



