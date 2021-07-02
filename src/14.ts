// 14 | 掌握 TypeScript 这些官方工具类型，让你的开发事半功倍

{
  type Partial<T> = {
    [P in keyof T]?: T[P];
  };
  interface Person {
    name: string;
    age?: number;
    weight?: number;
  }
  type PartialPerson = Partial<Person>;
  // 相当于
  // interface PartialPerson {
  //   name?: string;
  //   age?: number;
  //   weight?: number;
  // }

  type Required<T> = {
    [P in keyof T]-?: T[P];
  };
  // 在上述示例中，映射类型在键值的后面使用了一个 - 符号，- 与 ? 组合起来表示去除类型的可选属性，因此给定类型的所有属性都变为了必填。
  type RequiredPerson = Required<Person>;
  // 相当于
  // interface RequiredPerson {
  //   name: string;
  //   age: number;
  //   weight: number;
  // }

  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };
  type ReadonlyPerson = Readonly<Person>;
  // 相当于
  // interface ReadonlyPerson {
  //   readonly name: string;
  //   readonly age?: number;
  //   readonly weight?: number;
  // }

  type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  }
  type NewPerson = Pick<Person, 'name' | 'age'>;
  // 相当于
  // interface NewPerson {
  //   name: string;
  //   age?: number;
  // }

  //   Omit
  // 与 Pick 类型相反，Omit 工具类型的功能是返回去除指定的键值之后返回的新类型，下面我们看一个具体的示例：

  type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
  type NewPersonOmit = Omit<Person, 'weight'>;
  // 相当于
  // interface NewPersonOmit {
  //   name: string;
  //   age?: number;
  // }
}

// 联合类型
{
  // Exclude
  type Exclude<T, U> = T extends U ? never : T;
  type T = Exclude<'a' | 'b' | 'c', 'a'>; // => 'b' | 'c'
  // a extends a true 所以是never
  // b extends a false 所以是b
  // c extends a false 所以是c

  // Extract 获取交集
  type Intersect<T, U> = {
    [K in Extract<keyof T, keyof U>]: T[K];
  }
  interface Person {
    name: string;
    age?: number;
    weight?: number;
  }
  interface NewPerson {
    name: string;
    age: number;
  }
  type TT = Intersect<Person, NewPerson>;
  // 相当于
  // type TT = {
  //   name: string;
  //   age?: number
  // }
}
{
  // NonNullable 从联合类型中去除null或者undefined类型
  type NonNullable<T> = T extends null | undefined ? never : T;
  // 等同于适应Exclude
  // type NonNullable<T> = Exclude<T, null | undefined>;
  type T = NonNullable<string|null|undefined|boolean> // string | boolean
}
{
  // 在 TypeScript 中，keyof any 指代可以作为对象键的属性，如下示例：

  type T = keyof any; // => string | number | symbol
}
