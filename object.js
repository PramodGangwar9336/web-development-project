//object  key payer
  /*let user={
    name:"pramod",
    age:18,
    emailid:"pramodgangwar"

}
console.log(user.age)
//add kar sakta hai
user.account=2222
console.log(user)

//delet kar sakta hai
delete user.emailid;
console.log(user)

console.log(user["name"])*/


// adders change kar sakta hai


// let user={
//     name:"pramod",
//     age:18,
//     emailid:"pramodgangwar"

// }
//let user2=user
//user2.age=22
//console.log(user2)

//console.log(Object.keys(user))
//console.log(Object.values(user))
//console.log(Object.entries(user))

//loop chal sakti hai

//for(let values in user)
    //console.log(values)

//for(lot [keys,values] of Object.entries(user)){
    //console.log(keys,values)


    // function in object


let user={
    name:"pramod",
    age:18,
    emailid:"pramodgangwar",
    pramod:function(){
    console.log(`hello i am pramod${user.name}`);
    return 20;
        
     }}
       const va=user.pramod();
    console.log(va)
