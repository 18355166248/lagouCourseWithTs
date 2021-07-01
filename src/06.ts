// 06 | 类类型：如何高效使用类型化的面向对象编程利器？

// 继承
{
  class Animal {
    type = 'Animal';
    public firstName: string = 'first'
    private lastName: string = 'last'
    constructor(type: string) {
      this.type = type
    }
     say(name: string) {
       console.log(`I'm ${name}!`);
     }
   }

  class Dog extends Animal {
    name: string
    constructor(name: string) {
      super(name)
      this.name = name
     }
     bark() {
       console.log('Woof! Woof!');
     }
   }

   const dog = new Dog('2');
   dog.bark(); // => 'Woof! Woof!'
   dog.say('Q'); // => I'm Q!
  dog.type; // => Animal
  dog.firstName = '123'
  dog.lastName
}
// 抽象类
{
  abstract class Addder {
    abstract x: number;
    abstract y: number;
    abstract add (): number;
    displayname = 'Adder'
  }

  class AdderNum extends Addder {
    x: number;
    y: number;
    constructor(x: number, y: number) {
      super()
      this.x = x
      this.y = y
    }
    add():number {
      return this.x + this.y
    }
  }
}
{
  interface IAdder {
    x: number;
    y: number;
    add: () => number;
  }

  class IAdderNumber implements IAdder {
    x: number;
    y: number;
    constructor(x: number, y: number) {
      this.x = x
      this.y = y
    }
    add () {
      return this.x + this.y
    }
  }
}
// 类的类型
{
  class A {
    name: string;
    constructor(name: string) {
      this.name = name
    }
  }

  const a: A = {}
  const b: A = { name: '12'}
}

// public哪都能用，private只有基类可以用，protected基类和派生类中可以用
