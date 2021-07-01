// 08 | 高级类型：如何快速读懂联合类型和交叉类型的含义？

// 联合类型
{
  type s = 'lg' | 'me' | 'sm'
  type s2 = 'px' | 'pm' | 'rem'
  type sT = s | s2

  function format(size: sT) {
    //
  }
  format('sm')
  format('rem')
  format('remm')
}
// 合并接口类型
{
  type IntersectionType = { id: number; name: string; }
    & { age: number; };
  const mixed: IntersectionType = {
    id: 1,
    name: 'name',
    age: 18
  }
}
// 合并联合类型
{
  type UnionA = 'px' | 'em' | 'rem' | '%';
  type UnionB = 'vh' | 'em' | 'rem' | 'pt';
  type IntersectionUnion = UnionA & UnionB;
  const intersectionA: IntersectionUnion = 'em'; // ok
  const intersectionB: IntersectionUnion = 'rem'; // ok
  const intersectionC: IntersectionUnion = 'px'; // ts(2322)
  const intersectionD: IntersectionUnion = 'pt'; // ts(2322)
  // 取交集 也就是取相同值
}
// 类型缩减
{
  type color = 'black' | 'red' | 'blue' | string
  type color1 = 'black' | 'red' | 'blue' | string & {}

  const c: color = ''
  const c1: color1= '' // 这里会精确提示前面3种字符串 让类型缩减被控制
}
// 解决07问题
{
  type test1 = {
    age: number;
  } | {
    age: never;
    [key: string]: string
  }

  const t: test1 = {
    age: 1,
    name: '123'
  }
}
