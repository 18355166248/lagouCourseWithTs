# 16 | tsconfig.json 配置：如何定制 TypeScript 的行为？

## compilerOptions

编译选项是 TypeScript 配置的核心部分，compilerOptions 内的配置根据功能可以分为 6 个部分，接下来我们分别介绍一下。

### target

target 选项用来指定 TypeScript 编译代码的目标，不同的目标将影响代码中使用的特性是否会被降级。
target 的可选值包括ES3、ES5、ES6、ES7、ES2017、ES2018、ES2019、ES2020、ESNext这几种。
一般情况下，target 的默认值为ES3，如果不配置选项的话，代码中使用的ES6特性，比如箭头函数会被转换成等价的函数表达式。

### module

module 选项可以用来设置 TypeScript 代码所使用的模块系统。
如果 target 的值设置为 ES3、ES5 ，那么 module 的默认值则为 CommonJS；如果 target 的值为 ES6 或者更高，那么 module 的默认值则为 ES6。
另外，module 还支持 ES2020、UMD、AMD、System、ESNext、None 的选项。

### jsx

jsx 选项用来控制 jsx 文件转译成 JavaScript 的输出方式。该选项只影响.tsx文件的 JS 文件输出，并且没有默认值选项。

- react: 将 jsx 改为等价的对 React.createElement 的调用，并生成 .js 文件。
- react-jsx: 改为 __jsx 调用，并生成 .js 文件。
- react-jsxdev: 改为 __jsx 调用，并生成 .js 文件。
- preserve: 不对 jsx 进行改变，并生成 .jsx 文件。
- react-native: 不对 jsx 进行改变，并生成 .js 文件。

### incremental

incremental 选项用来表示是否启动增量编译。incremental 为true时，则会将上次编译的工程图信息保存到磁盘上的文件中。

### declaration

declaration 选项用来表示是否为项目中的 TypeScript 或 JavaScript 文件生成 .d.ts 文件，这些 .d.ts 文件描述了模块导出的 API 类型。
具体的行为你可以在Playground中编写代码，并在右侧的 .D.TS 观察输出。

### sourceMap

sourceMap 选项用来表示是否生成sourcemap 文件，这些文件允许调试器和其他工具在使用实际生成的 JavaScript 文件时，显示原始的 TypeScript 代码。
Source map 文件以 .js.map （或 .jsx.map）文件的形式被生成到与 .js 文件相对应的同一个目录下。

### baseUrl

baseUrl 指的是基准目录，用来设置解析非绝对路径模块名时的基准目录。比如设置 baseUrl 为 './' 时，TypeScript 将会从 tsconfig.json 所在的目录开始查找文件。

