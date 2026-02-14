// //   /*console.log("This is the first file.");

// // const product ={
// //     title: "Ball Pen",
// //     rating: 4.5,
// //     offer: "5% off",
// //     price: 10
// // };
// // console.log(product);

// // const profile ={
// //     fullName: "DS",
// //     followers: 1200,
// //     following: 300,
// //     posts: 75,
// //     isFollowing: true
// // };
// // console.log(profile);

// // for(let num=0; num<=100; num++)
// //     if(num%2==0){
// //     console.log("num=",num);
// // }*/

// // // let gameNum = 34;
// // // let userNum =prompt("Guess the number between 1 and 100");

// // // while (userNum != gameNum){
// // //     userNum = prompt("Wrong guess! Try again.");
// // // }
// // // alert("Congratulations! You guessed the number.");

// // // let str="Hello, World!";
// // // let str2="welcome to JavaScript programming.";

// // // let obj1={
// // //     item:"pen",
// // //     price:10,
// // // }

// // // let output=`The price of the ${obj1.item} is ${obj1.price} rupees.`;
// // // console.log(output);

// // // let fullname = prompt("Enter your fullrname without space:");
// // // let username = "@"+ fullname + fullname.length;
// // // console.log("Your username is:", username);

// // let marks = [85,97,44,37,76,60];

// // let sum = 0;

// // for(let val of marks){
// //     sum += val;
// // }

// // let avg = sum / marks.length;
// // console.log(`Average marks of the class is =${avg}`);
// let items = [250,645,300,900,50];

// let i=0;
// for(let val of items){
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val / 10;
//     items[i]=items[i]-offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }

// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.shift();
// companies.splice(2,1,"ola");
// companies.push("amazon");
// console.log(companies);

// function sum(a,b){
//     console.log(a+b);
// }
// sum(5,2); 

// const arrowmul=(a,b)=>{
//     console.log(a*b);
// };
// arrowmul(4,3);

function countvowels(str){
    let count=0;
    for (const char of str){
        if(
            char==="a"||char==="e"||char==="i"||char==="o"||char==="u"
        ){
            count++;
        } 
    }
    return count;
}