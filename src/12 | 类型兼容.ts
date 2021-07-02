// 12 | 类型兼容：如何判断一个类型是否可以赋值给其他类型？

{
  interface I1 {
    name: string;
  }
  interface I2 {
    id: number;
    name: string;
  }
  class C2 {
    id = 1;
    name = '1';
  }
  let O1: I1;
  let O2: I2;
  let InstC2: C2;
  O1 = O2;
  O1 = InstC2

  // 通过使用变量接收对象字面量或使用类型断言解除 freshness
  let O3 = {
    id: 2,
    name: 'name'
  };
  O1 = O3; // ok
  O1 = {
    id: 2,
    name: 'name'
  } as I2; // ok
}
