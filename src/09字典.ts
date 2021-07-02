// 09 | 枚举类型：详解常见枚举类型的 7 种用法

// 枚举类型
{
  enum Day {
    Sunday = 1,
    Monday,
    Tuesday,
    Wednesday = 2 ,
    Thursday,
    Friday,
    Saturday
  }
  // 后面的默认值都会基于前一个值递增加1初始化声明
}
// 字符串枚举
{
  enum Day {
    Sunday = 'SUNDAY'
  }
}
// 异构枚举
{
  // 应该无卵用
  enum Day {
    SUNDAY = 'SUNDAY',
    MONDAY = 2,
    // ...
  }
}
//
{
  enum FileAccess {
    // 常量成员
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // 计算成员
    G = "123".length,
  }
}
//
{
  enum Day {
    SUNDAY,
    MONDAY,
  }
  enum MyDay {
    SUNDAY,
    MONDAY = Day.MONDAY
  }

  let mondayIsSunday = MyDay.SUNDAY; //  ok: 类型是 MyDay，MyDay.SUNDAY 仅仅是值
  mondayIsSunday = MyDay.MONDAY
}
// 常量枚举
{
  // 常量枚举定义转译为 JavaScript 之后会被移除
  const enum Day {
    SUNDAY = 7,
    MONDAY = 1,
  }

  const work = (d: Day) => {
    switch (d) {
      case Day.SUNDAY:
        return '星期天';
      case Day.MONDAY:
        return '周一'
    }
  }
}
// 外部枚举（Ambient enums）
// 外部枚举的定义也会像常量枚举一样被抹除
declare enum Day {
  SUNDAY,
  MONDAY,
}
const work = (x: Day) => {
  if (x === Day.SUNDAY) {
    x; // 类型是 Day
  }
}
