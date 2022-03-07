/**
 * 按照如下要求实现 Person 和 Student 对象
 * a) Student 继承 Person 
 * b) Person 包含一个实例变量 name， 包含一个方法 printName
 * c) Student 包含一个实例变量 score， 包含一个实例方法 printScore

 * 作者：萌m子
 * 链接：https://juejin.cn/post/6844904093828251662
 * 来源：稀土掘金
 * 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

// 原生写法
function Person(name) {
  this.name = name
  this.printName = function() {
    console.log(this.name)
  }
}

function Student(name, score) {
  Person.call(this, name)
  this.score = score
  this.printScore = function() {
    console.log(score)
  }
}

Student.prototype = new Person()

let person = new Person('zhangsan')
person.printName()
let student = new Student('lishi', 90)
student.printName()
student.printScore()

// es6 写法
// class Person {
//   constructor(name) {
//     this.name = name
//   }
//   printName() {
//     console.log(this.name)
//   }
// }

// class Student extends Person {
//   constructor(name, score) {
//     super(name)
//     this.score = score
//   }
//   printScore() {
//     console.log(this.score)
//   }
// }

// let person = new Person('zhangsan')
// person.printName()
// let student = new Student('lishi', 90)
// student.printName()
// student.printScore()
