// 类型断言

const array1: string[] = []

array1.push('2')

const arr2:number[] = [1, 2, 3]
const res:number = arr2.find(num => num > 2) as number
const res2:number = <number>arr2.find(num => num > 2)
