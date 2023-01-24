const obj = {name:'私'}
const obj_deep = {...obj}
const obj_shallow = obj

obj.name = 'あなた'

console.log(obj_deep.name)
console.log(obj_shallow.name)