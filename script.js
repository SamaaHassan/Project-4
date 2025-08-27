// let Name ='Samaa';
// let GPA = 3.5;
// function yourResult(name,GPA){
//     let message;
//     if (GPA> 3){
//         message='Congratulations, you have succeeded and deservedly so.';
//     }
//     else{
//         message='You fell !! but you can do it next time.';
//     }
//     return `Hello ${Name} ! Your GPA: ${GPA}. ${message}`;

// }
// console.log(yourResult(Name,GPA));
let name = 'Samaa';
let gpa = 3.5;

function yourResult(name, gpa) {
  let message;
  if (gpa > 3) {
    message = 'Congratulations, you have succeeded and deservedly so.';
  } else {
    message = 'You fell !! but you can do it next time.';
  }
  return `Hello ${name}! Your GPA: ${gpa}. ${message}`;
}

console.log(yourResult(name, gpa));