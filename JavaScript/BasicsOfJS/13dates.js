//dates

let myDate = new Date()
console.log(typeof myDate); // o/p: object
console.log(myDate); //output: 2026-04-16T17:44:14.985Z. non readable formate of date and time
console.log(myDate.toDateString()); //o/p: Thu Apr 16 2026
console.log(myDate.toLocaleString()); // o/p: 16/4/2026, 11:17:03 pm
console.log(myDate.toJSON()); //o/p: 2026-04-16T17:47:03.654Z

// also can define date by ourself:
// let myCreatedDate =new Date(2023, 0, 23); //o/p: 23/1/2023, 12:00:00 am. 0 concider as 1st month.
let myCreatedDate =new Date(2023, 0, 23, 5, 10);
console.log(myCreatedDate.toLocaleString()); // o/p: 23/1/2023, 5:10:00 am


//timestamp;
// Get the current timestamp in milliseconds since January 1, 1970
let myTimeStamp = Date.now(); 
console.log(myTimeStamp);                              // Outputs the current timestamp . Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
console.log(myCreatedDate.getTime());                  // Outputs the timestamp for the created date
console.log(Math.floor(Date.now() / 1000));            // Outputs the current timestamp in seconds


// Create a new Date object with the current date and time
let newDate = new Date();
console.log(newDate);                                  // Outputs the current date and time
console.log(newDate.getMonth() + 1);                   // Outputs the current month (0-based index, so add 1)
console.log(newDate.getDay());                         // Outputs the current day of the week (0 = Sunday, 6 = Saturday)


