// 类型推断、字面量类型、类型拓宽、类型缩小

{
  // 通过let定义的变量类型是string
  let str = 'this is string'
  let num = 1
  let bool = false
}
{
  // 通过const定义的变量类型是 'this is string' (字符串字面量类型)
  const str = 'this is string'
  const num = 1
  const bool = false

  // 类型推断
  // 自定义函数类型
  type Adder = (a: number, b: number) => number
  const add: Adder = (a,b) => {
   return a+b
  }
  add(1, 2)
  add(1, '3')
}
{
  // 目前TypeScript支持三种字面量类型: 字符串字面量类型、数字字面量类型、布尔字面量类型
  let str1: 'this is String' = 'this is String'
  let num1: 1 = 1
  let bool1: false = false
}
{
   // 而 string 类型不一定是 'this is string'（这里表示一个字符串字面量类型）类型
   let specifiedStr: 'this is string' = 'this is string';
   let str: string = 'any string';
   specifiedStr = str; // ts(2322) 类型 '"string"' 不能赋值给类型 'this is string'
   str = specifiedStr; // ok
}
{
  // 因此，相较于使用 string 类型，使用字面量类型（组合的联合类型）可以将函数的参数限定为更具体的类型。这不仅提升了程序的可读性，还保证了函数的参数类型，可谓一举两得。
  type Dir = 'left' | 'right'
  function move (dit: Dir) {
    //..
  }
  move('left')
  move('right')
  move('2')
}
{
  // 数字字面量类型及布尔字面量类型
  interface PeopleConfig {
    name: String,
    gender: 'male' | 'female',
    isLine?: true | false,
    age: 0 | 10 | 20
  }

  const people: PeopleConfig = {
    name: 'Megalo',
    gender: 'male',
    age: 2,
  }
}
{
  // 字面量类型拓宽
  let str = 'this is string'; // 类型是 string
  let strFun = (str = 'this is string') => str; // 类型是 (str?: string) => string;
  const specifiedStr = 'this is string'; // 类型是 'this is string'
  let str2 = specifiedStr; // 类型是 'string'
  let strFun2 = (str = specifiedStr) => str; // 类型是 (str?: string) => string;
}
{
  // 类型拓宽 Type Widening
  let x = null // 类型拓宽成 any
  let y = undefined // 类型拓宽成 any
  /** 分界线 */
  const z = null // 类型拓宽成null
  /** 分界线 */
  let fn = (param = null) => null // 形参类型是null

  fn(undefined)
  fn(null)
  fn(2)
  let z2 = z
  let x2 = x
  let y2 = y
}
{
  // 类型缩小 Type Narrowing
  let fn = (param: any) => {
    if (typeof param === 'string') return 'string' + param
    if (typeof param === 'number') return param++
    return null
  }

  fn('1')
  fn(2)
  fn(undefined)
}
{
  const namespace = 'namespace11'
  const a = '11'
  type A = typeof a // type A = '11'

  const b1 = `${namespace}22`;
  type B1 = typeof b1; // type B = string B

  const b = `${namespace}22` as const;
  type B = typeof b; // type B = namespace1122
}
