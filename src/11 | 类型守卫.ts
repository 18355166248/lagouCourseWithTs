// 11 | 类型守卫：如何有效地保障类型的安全性？

{
  const convertToUpperCase = (strOrArray: string | string[]) => {
    if (typeof strOrArray === 'string') {
      return strOrArray.toUpperCase();
    } else if (Array.isArray(strOrArray)) {
      return strOrArray.map(item => item.toUpperCase());
    }
  }
  // 这里的 typeof、Array.isArray 条件判断就是类型守卫。
}
// instanceof
{
  class Cat {
    miao = 'miaomiao'
  }
  class Dog {
    wang = 'wangwang'
  }
  const getName = (animal: Dog | Cat) => {
    if ( animal instanceof Dog ) {
      return animal.wang
    } else if (animal instanceof Cat) {
      return animal.miao
    }
  }

  const isDog = function (animal: Dog | Cat): animal is Dog {
    return 'wang' in animal;
  }

  const getName1 = <T extends Dog | Cat>(animal: T) => {
    // if (isDog(animal)) { // instanceOf 亦可
      if (animal instanceof Dog) { // instanceOf 亦可
      return animal.wang; // ok
    }
    return (animal as Cat).miao; // ts(2339)
  };
}
