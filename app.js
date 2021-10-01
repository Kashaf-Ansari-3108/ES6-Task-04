//1. We have an array of cities. Assign each city in different individual variable. hint ['LA', 'new york', 'karachi','islamabad']
// const cities = ['LA', 'new york', 'karachi','islamabad'];
// let [city1,city2,city3,city4] = cities;



//2. We have a student object. Assign each property in different and individual variable in JS {name:'Marry',age:20,rollNo:2}
// let std = {
//     name:'Marry',
//     age:20,
//     rollNo:2}
// let {name,age,rollNo} = std;


//3. A function is taking 5 arguments and You have to pass it through an array.
// let arr = [1,2,3,4,5]
//  let arr = (a,b,c,d,e) => [a,b,c,d,e];
//  let myFunction = arr(1,2,3,4,5);
//  console.log(myFunction);


//4. Given an array of firstname and an array of last name. 
//First check both array size is equal or not, if equal then make third new array 
//which has first last name concat value
// let firstNames = ['maryam', 'hira', 'faiza', 'aisha']
// let lastNames = ['khan', 'ayub', 'aziz', 'yasin']
//['maryam khan', 'hira ayub', 'faiza aziz', 'aisha yasin']

// // let firstNames = ['maryam', 'hira', 'faiza', 'aisha']
// // let lastNames = ['khan', 'ayub', 'aziz', 'yasin']
// let fullNames = firstNames.map((a,i) => a+lastNames[i])
// let check = (firstNames.length === lastNames.length) ? (console.log(fullNames)): console.log("Not Equal Array");




//5. Create an arrow function that takes array as an input and make each element double and then return an array 
// const arr = [1,2,3,4,5,6,7,8,10]
// let newArr = arr.map((i) => i*2);
// console.log(newArr);


//6. Create an arrow function that takes a number and return square of a number
// let square = a => a*a;
// let result = square(5);
// console.log(result);

//7.
/*question: `var authenticated=true;
var allowed = authenticated ? (alert('you r allowed')) : (alert('you are not allowed))
which alert will run
*/
// Ans: (alert('you r allowed')) will run


//8.
/*question: ` What is the value of canDrive
        var age = 12;
        var canDrive = age > 18 ? 'yes' : 'no';
        `,
        answers: ['12', '18', 'yes', 'no'],
        which is correct answer
        */
// Ans: no

        
//9.
/*question: `const dog='snickers'
        logdog(dog);
        go();
        function logdog(dog){
            console.log(dog)
        }
         function go(){
             const dog='sunny';
             logdog(dog)
         }`,
        answers: ['snickers sunny','sunny snickers','snickers snickers','sunny sunny'] */
//Ans: snickers sunny
        


//10. let text = `He's often called "Johnny"`;
// console.log(text)// write the answer here
 // Ans: He's often called "Johnny"


 //11.
/*function welcomeMsg(name = "Everyone") {
    let msg = "Welcome " + name
    console.log(msg)
}
// welcomeMsg("Faiza")
// welcomeMsg()
I have called funtion twice , share the answer what is printed each time
*/
/* Ans:  welcomeMsg("Faiza") it prints Welcome Faiza
         welcomeMsg()        it prints Welcome Everyone */


//12. make a promise that resolves after 5 sec. Use setTimeOut for resolve.
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('done');
//     }, 5000);
// });
//   myPromise
//   .then(res => console.log(res))
//   .catch(err => console.log(err))
  