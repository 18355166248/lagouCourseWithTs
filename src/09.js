// 09 | 枚举类型：详解常见枚举类型的 7 种用法
// 枚举类型
{
    var Day_1 = void 0;
    (function (Day) {
        Day[Day["Sunday"] = 1] = "Sunday";
        Day[Day["Monday"] = 2] = "Monday";
        Day[Day["Tuesday"] = 3] = "Tuesday";
        Day[Day["Wednesday"] = 2] = "Wednesday";
        Day[Day["Thursday"] = 3] = "Thursday";
        Day[Day["Friday"] = 4] = "Friday";
        Day[Day["Saturday"] = 5] = "Saturday";
    })(Day_1 || (Day_1 = {}));
    // 后面的默认值都会基于前一个值递增加1初始化声明
}
// 字符串枚举
{
    var Day_2 = void 0;
    (function (Day) {
        Day["Sunday"] = "SUNDAY";
    })(Day_2 || (Day_2 = {}));
}
// 异构枚举
{
    // 应该无卵用
    var Day_3 = void 0;
    (function (Day) {
        Day["SUNDAY"] = "SUNDAY";
        Day[Day["MONDAY"] = 2] = "MONDAY";
        // ...
    })(Day_3 || (Day_3 = {}));
}
//
{
    var FileAccess = void 0;
    (function (FileAccess) {
        // 常量成员
        FileAccess[FileAccess["None"] = 0] = "None";
        FileAccess[FileAccess["Read"] = 2] = "Read";
        FileAccess[FileAccess["Write"] = 4] = "Write";
        FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
        // 计算成员
        FileAccess[FileAccess["G"] = "123".length] = "G";
    })(FileAccess || (FileAccess = {}));
}
//
{
    var Day_4 = void 0;
    (function (Day) {
        Day[Day["SUNDAY"] = 0] = "SUNDAY";
        Day[Day["MONDAY"] = 1] = "MONDAY";
    })(Day_4 || (Day_4 = {}));
    var MyDay = void 0;
    (function (MyDay) {
        MyDay[MyDay["SUNDAY"] = 0] = "SUNDAY";
        MyDay[MyDay["MONDAY"] = 1] = "MONDAY";
    })(MyDay || (MyDay = {}));
    var mondayIsSunday = MyDay.SUNDAY; //  ok: 类型是 MyDay，MyDay.SUNDAY 仅仅是值
    mondayIsSunday = MyDay.MONDAY;
}
// 常量枚举
{
    var work_1 = function (d) {
        switch (d) {
            case 7 /* SUNDAY */:
                return '星期天';
            case 1 /* MONDAY */:
                return '周一';
        }
    };
}
var work = function (x) {
    if (x === Day.SUNDAY) {
        x; // 类型是 Day
    }
};
