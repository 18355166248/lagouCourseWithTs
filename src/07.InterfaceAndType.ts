// 07 | 接口类型与类型别名：这两者的用法与区别分别是什么？

// interface 接口类型
{
  function Study(language: { name: string; age: () => number }) {
    console.log(`ProgramLanguage ${language.name} created ${language.age()} years ago.`);
  }

  Study({
    name: 'TypeScript',
    age: () => new Date().getFullYear() - 2012
  });

  let ts = {
    id: 2,
    name: 'TypeScript',
    age: () => new Date().getFullYear() - 2012
  };
  Study(ts); // ok
}
// 可缺省属性
{
  interface OptionalProgram {
    name: string;
    age?: number;
    readonly sex: string;
  }

  const opt: OptionalProgram = {
    name: 'Megalo',
    sex: 'male'
  }
  opt.sex = 'female'
}
// 索引签名
{
  // 使用索引签名来定义上边提到的对象映射结构，并通过 “[索引名: 类型]”的格式约束索引的类型。
  interface RankInterface {
    [rank: number]: string
  }
  interface YearInterface {
    [name: string]: number
  }
  let rank: RankInterface = {
    1: '11',
    2: '22',
    '0': '000',
    'work': 'work123'
  }
  let year: YearInterface = {
    age: 123,
    name: 456,
    people: '5666'
  }
}
{
  interface StringMap {
    [prop: string]: number;
    age: number; // ok
    name: string; // ts(2411) name 属性的 string 类型不能赋值给字符串索引类型 number
  }
  interface NumberMap {
    [rank: number]: string;
    1: string; // ok
    0: number; // ts(2412) 0 属性的 number 类型不能赋值给数字索引类型 string
  }
  {
    interface LanguageRankInterface {
      name: string; // ok
      0: number; // ok
      [rank: number]: string;
      [name: string]: number;
    }
  }
  {
    interface LanguageRankInterface {
      [rank: number]: string; // ts(2413) 数字索引类型 string 类型不能赋值给字符串索引类型 number
      [prop: string]: number;
    }
  }

  // 怎么解决
  type test1 = {
    age: string;
    [ra: string]: number;
  }
  // 看08.ts
}
// 继承与实现
{
  interface ProgramLanguage {
    name: string;
    age: number;
  }

  // 我们通过使用如下所示的 implements 关键字描述一下类和接口之间的关系。
  class lang implements ProgramLanguage {
    name: string;
    age: number
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
  }
}
// type 类型别名
{
  // 联合
  type MixedType = string | number
  // 交叉
  type IntersectionType = { id: number; name: string } & { age: number; name: string }
  const peo: IntersectionType = {id: 1, name: '222', age: 123}
}
{
  // 重复定义的接口类型，它的属性会叠加
  interface Language {
    id: number;
  }
  interface Language {
    name: string;
  }
  let lang: Language = {
    id: 1, // ok
    name: 'name' // ok
  }
}
{
  // interfave可以重读定义, type(类型别名)不可以
  /** ts(2300) 重复的标志 */
  type Language = {
    id: number;
  }

  /** ts(2300) 重复的标志 */
  type Language = {
    name: string;
  }
  let lang: Language = {
    id: 1,
    name: 'name'
  }
}
