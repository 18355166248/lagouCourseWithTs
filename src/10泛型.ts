// 10 | 泛型：如何正确使用泛型约束类型变量？

// 泛型指的是类型参数化，即将原来某种具体的类型进行参数化。和定义函数参数一样，我们可以给泛型定义若干个类型参数，并在调用时给泛型传入明确的类型参数。设计泛型的目的在于有效约束类型成员之间的关系，比如函数参数和返回值、类或者接口成员和方法之间的关系。

// 泛型类型参数
{
  function reflect(param: unknown) {
    return param;
  }
  const str = reflect('string'); // str 类型是 unknown
  const num = reflect(1); // num 类型 unknown
  // 这里return永远是unknown 我期望传入的是什么类型 返回的是什么类型
}
{
  // 我们可以通过尖括号<>语法给函数定义个泛型参数P, 并指定param参数的类型为P, 函数返回值的类型为P
  function reflect<P> (param: P): P {
    return param
  }
  reflect(1)
  reflect('123')
  reflect<number>(234) // 尖括号可缺省
  reflect<string>(1)
}
{
  function reflect<P>(params:P[]) {
    return params
  }
  reflect([1,'2']) // reflectArr 是 (string | number)[]
}
{
  function useState<S> (state: S, initialValue?: S) {
    return [state, (s: S) => void 0] as unknown as [S, (s: S) => void]
  }
}
{
  // 可以给函数定义任意个数的泛型入参
  function reflectExtraParams<P, Q>(p1: P, p2: Q): [P, Q] {
    return [p1, p2];
  }
}
// 泛型类
{
  class Memory<S> {
    store: S;
    constructor(store: S) {
      this.store = store;
    }
    set(store: S) {
      this.store = store;
    }
    get() {
      return this.store;
    }
  }
  const numMemory = new Memory<number>(1); // <number> 可缺省
  const getNumMemory = numMemory.get(); // 类型是 number
  numMemory.set(2); // 只能写入 number 类型
  const strMemory = new Memory(''); // 缺省 <string>
  const getStrMemory = strMemory.get(); // 类型是 string
  strMemory.set('string'); // 只能写入 string 类型
}
// 泛型约束
{
  function reflectSpecified<P extends number | string | boolean>(param: P):P {
    return param;
  }
  reflectSpecified('string'); // ok
  reflectSpecified(1); // ok
  reflectSpecified(true); // ok
  reflectSpecified(null); // ts(2345) 'null' 不能赋予类型 'number | string | boolean'

  function fn<State extends { name: string; age?: number}>(params:State):State {
    return params
  }

  fn({name:'11'})
  fn({name:'11', age: 123})
}
{
  interface ObjSetter {
    <O extends {}, K extends keyof O, V extends O[K]>(obj: O, key: K, value: V): V;
  }
  const setValueOfObj: ObjSetter = (obj, key, value) => (obj[key] = value);
  setValueOfObj({ id: 1, name: 'name' }, 'id', 2); // ok
  setValueOfObj({ id: 1, name: 'name' }, 'name', 'new name'); // ok
  setValueOfObj({ id: 1, name: 'name' }, 'age', 2); // ts(2345)
  setValueOfObj({ id: 1, name: 'name' }, 'id', '2'); // ts(2345)
}
{
  interface ReduxModelMixed<State extends {} = { id: number; name: string }> {
    state: State
  }

  interface F<T> {
    (arg: T): T
  }

  const a:F<number> = function<U>(state:U):U {
    return state
  }

  a(1)
}
