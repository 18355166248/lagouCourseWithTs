// 13 | 必备增强类型系统的方式大盘点，让你的开发如虎添翼

// 增强类型系统
// 增强类型系统，顾名思义就是对 TypeScript 类型系统的增强。在 npm 中，有很多历史悠久的库都是使用 JavaScript 编写的，而 TypeScript 作为 JavaScript 的超集，设计目标之一就是能在 TypeScript 中安全、方便地使用 JavaScript 库。

// TypeScript 相较于 JavaScript 而言，其一大特点就是类型。关于类型的定义方法，除了之前学习的内容之外，我们还可以通过以下方式扩展类型系统。

// 声明
// 那么，我们如何在 TypeScript 中安全地使用 JavaScript 的库呢？关键的步骤就是使用 TypeScript 中的一个 declare 关键字。

// 通过使用 declare 关键字，我们可以声明全局的变量、方法、类、对象。下面我们先说一下如何声明全局的变量。

// 声明函数
declare function toString (x: number): string
const x = toString(2)

// 声明文件
// 在 TypeScript 中，以 .d.ts 为后缀的文件为声明文件
