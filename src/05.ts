// 05 | 函数类型：返回值类型和参数类型到底如何定义？

{
  function fn (): void {

  }

  type People = (age: number, name: string) => number

  const p: People = (age, name) => {
    return age
  }

  interface Enti {
    add: (a: number, b: number) => number,
    del: (a: number, b: number) => number
  }
  const enti: Enti = {
    add: (a, b) => a + b,
    del: (a, b) => a - b
  }
}
// 可选参数和默认参数
{
  // 在类型标签的:前添加?表示log函数的参数params就是可缺省的
  function log(params?: string) {
    return params
  }
  log() // undefined
  log(1)
  log('12') // 12
}
{
  function log(x?: string) {
    console.log(x);
  }
  function log1(x: string | undefined) {
    console.log(x);
  }
  log();
  log(undefined);
  // 这里表示联合类型表示函数参数不可缺省且类型必须是string或者undefined
  log1(); // ts(2554) Expected 1 arguments, but got 0
  log1(undefined);

  function log2(x = 'hellow') {
    return x
  }
  log2()
  log(1) // 支持string | undefined
}
{
  function sum(...nums:number[]) {
    return nums.reduce((total,num) => total + num, 0)
  }
  sum(1, 2)
  sum(1, 2, '3')

  function sum1(...nums:(string | number)[]) {
    return nums.reduce<number>((total, num) => total + Number(num), 0)
  }
  sum1(1, 2)
  sum1(1, 2, '3')
}
// this
{
  function say(this: window, name: string) {
    console.log(this.name)
  }
  window.say = say
  window.say('hi')
  const obj = { say }
  obj.say('hh')
}
{
  class Component {
    onClick(this: Component) {}
  }
  const component = new Component()
  interface UI {
    addClick(onClick: (this: void) => void): void
  }
  const ui: UI = {
    addClick() {}
  }
  ui.addClick(component.onClick)
}
// 函数重载
{
  function fn(x: string): string
  function fn(x: number): number
  function fn (x: null): -1
  function fn (x: string | number | null): any  {
    if (typeof x === 'string') {
      return String(x)
    } else if (typeof x === 'number') {
      return Number(x)
    }

    return -1
  }

  fn('1')
  fn(1)
  fn(null)
  fn(undefined)
  // 注意：函数重载列表的各个成员（即示例中的 1 ~ 3 行）必须是函数实现（即示例中的第 4 行）的子集，例如 “function convert(x: string): number”是“function convert(x: string | number | null): any”的子集。
}
// 类型谓词
{
  function isString(s): s is string { // 类型谓词
    return typeof s === 'string';
  }
  function isNumber(n: number) {
    return typeof n === 'number';
  }
  function operator(x: unknown) {
    if(isString(x)) { // ok x 类型缩小为 string
    }
    if (isNumber(x)) { // ts(2345) unknown 不能赋值给 number
    }
  }
}
