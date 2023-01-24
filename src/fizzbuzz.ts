let answer:string = ''
for(let i:number = 0;i<=100;i++) {
  if(i % 15 === 0){
    answer += ' fizzbuzz'
  }else if(i % 3 === 0){
    answer += ' fizz'
  }else if(i % 5 === 0){
    answer += ' buzz'
  }else{
    answer += ' ' + i
  }
}
console.log(answer)
// for(let i:number = 0;i<=100;i++) {
//   if(i % 15 === 0){
//     console.log('fizzbuzz')
//   }else if(i % 3 === 0){
//     console.log('fizz')
//   }else if(i % 5 === 0){
//     console.log('buzz')
//   }else{
//     console.log(i)
//   }
// }