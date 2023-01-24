type a = {
  x: string,
  y: number,
}

type b = {
  x: string,
  y: number,
  z: boolean,
}

// const A:a = {
//   x: 'xxx',
//   y: 123,
//   z: true,
// }
//本来エラーではないけど、型注釈されてないプロパティにはアクセスできないことになってるから無意味ってことでエラーになってる

// const B:b = {
//   x: 'xxx',
//   y: 123,
// }
// こっちは普通にエラー。型が決まってるけど実際の値が存在しないってなるとそのプロパティにアクセスしたときにundefinedになって型安全が守られてないことになるから

console.log(A);
console.log(B);
