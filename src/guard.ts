type User = {
  info?: {
    name: string,
    age: number,
  }
}

let response = {}

const user = (response as any) as User

if(user.info) {
  console.log(typeof(user.info.name));
  
  console.log(user.info.name)
}