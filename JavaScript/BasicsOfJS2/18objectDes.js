/*object destructure: Object destructuring is a JavaScript syntax 
introduced in ES6 (2015) that allows you to "unpack" properties from
an object and assign them to distinct variables in a single, concise statement*/

//lets do it
const course = {
        couserName: "Js in hindi",
        CourseFee: "999",
        CourseInstructure: "Hitesh"
}
//we can simply access it by:
console.log(course.CourseInstructure); // "hitesh"

//but in destructuring.
const {CourseInstructure: instructor} = course // we destructure the property of the object.
//changing its one property name for convienence.
console.log(instructor); // "hitesh"
