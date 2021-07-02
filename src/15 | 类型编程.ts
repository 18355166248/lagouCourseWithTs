// 15 | 类型编程：如何打造属于自己的工具类型？

{
  type isSubTying<Child, Par> = Child extends Par ? true : false;
  type isXX2 = isSubTying<1, number>; // true
  type isYY2 = isSubTying<'string', string>; // true
  type isZZ2 = isSubTying<true, boolean>; // true
}
{
  type BooleanOrString = string | boolean;
  type StringOrNumberArray<E> = E extends string | number ? E[] : E;
  type WhatIsThis = StringOrNumberArray<BooleanOrString>; // boolean | string[]
  type BooleanOrStringGot = BooleanOrString extends string | number ? BooleanOrString[] : BooleanOrString; //  string | boolean
  // 在非泛型条件类型中（示例中的第 4 行），因为 BooleanOrString 被当成了一个整体对待，所以 BooleanOrStringGot 的类型是 string | boolean。
}
