const obj = {name:'ç§'}
const obj_deep = {...obj}
const obj_shallow = obj

obj.name = 'ăăȘă'

console.log(obj_deep.name)
console.log(obj_shallow.name)