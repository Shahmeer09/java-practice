
// let num = null
// let putData = document.getElementById("display");

// function generateTable(e){
//   e.preventDefault()
//   let i;
//   for(i = 1; i<=10; i++){
//     putData.innerHTML+=num+ " x " + i + " = " + num * i+"<br>";

//   }
//   let form = document.getElementById("num")
//   form.value = null
// }

// function getNumber(e){
//   num = e.target.value
//   putData.innerHTML = null
// }


// for(i = 1; i<10; i++){
//   console.log(i+1)
// }

// let i = 1;
// while ( i <= 10 ){
//   console.log(i);
//   i++
// }

// const name = `shahmeer`;
// const age = `19`
// console.log(`my  name is ${name} and my age is ${age}`);




// ALLERTS ;

// alert("hello world !");
// alert("assalam o  alaikum");
// alert("hello \ni am shahmeer \nage 19 ");

// VARIABLES FOR STRING ;

// let name = 'shahmeer';
// let country = 'pakistan';
// alert(name  + ' ' + country); 

// let name = "shahmeer"
// alert(name);

// let name = prompt("enter your name");
// let age = prompt("enter your correct age");

// console.log(name ,  age);
// if(age >= 18){
//      alert("Congratulation you are allowed");
//     }
//     else{
//         alert(" Oopps ! you are not allowed");
//        }


// ARRAYS :

// let cities = ["karachi", "lahore", "Islamabad", "dubai", "australia", "sydney"];
// console.log(cities);

// let city = ["karachi", "lahore", "Islamabad", "dubai", "australia", "sydney"];
// console.log(city[0]);

// let mixarr = ["karachi", true , "Islamabad", false, 3 , 9];
// console.log(mixarr[4]);



const img = document.querySelector('img')
const para = document.querySelector('p')

function toss(clicked){
    let roundNumber = Math.floor(Math.random()*2);
    console.log(roundNumber);
    if(clicked === 'masjid' && roundNumber === 0 || clicked === 'chand' && roundNumber === 1){
        console.log(clicked , 'toss jeet gai');
        para.innerHTML = 'toss jeet gai'
    }else{
        console.log('toss haar gaye');
        para.innerHTML = 'toss haar gaye'
}
if (roundNumber === 1){
    Image.scr = ''
}else{
    Image.scr = ''
}

}