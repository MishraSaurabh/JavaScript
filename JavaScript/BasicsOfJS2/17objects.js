// const tinderUser = new Object() // its an singelton object
const tinderUser ={} // without singelton

//adding properties to object.
tinderUser.id = "123abc"
tinderUser.name = "sammy"
 
// console.log(tinderUser); //{ id: '123abc', name: 'sammy' }

//object under object
const regulerUser ={
    email: "some@google.com",
    fullname: {
        userfullname: {
            firstname: "Saurabh",
            lastname: "Mishra"
        }
    }
}
console.log(regulerUser.fullname.userfullname.firstname);
// console.log(regulerUser?.fullname?.userfullname?.firstname); // this allgo "?" is used to chech that if that properties in the object is present or not.
//if not prrsent then it passes next. not giving error.

//object addition/ concatinate
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1, obje2} //problematic output.
// const obj4 = Object.assign({}, obj1, obj2, obj3); //but very less use.
// console.log(obj4) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj4 = {...obj1, ...obj2, ...obj3};// frequently use.
// console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


//objects in array
const user = [
    {                   //object 1
        id: "123abc"
    },
    {                   //object 2
        name: "Saurabh"
    }
]
console.log(user[1].email); // o/p: undefined.

//other thing
console.log(tinderUser); // { id: '123abc', name: 'sammy' }

console.log(Object.keys(tinderUser)); // [ 'id', 'name' ]  it gives key in string formate.
console.log(Object.values(tinderUser)); // [ '123abc', 'sammy' ] it gives value in string formate.

//asking to object that you have this property or not?
console.log(tinderUser.hasOwnProperty("isLoogedIn")); // flase
console.log(tinderUser.hasOwnProperty("id")); // True


