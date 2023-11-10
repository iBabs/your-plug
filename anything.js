// let income = 2000

// let expence = 800

// const saving = income / 3

// const flex = income - (expence + saving)

// console.log(flex)

// let sideHustle = 750
// sideHustle += 5

// income += sideHustle

// console.log(income)


// let balance = 3000

// const transact = parseInt(prompt('Welcome YourPlug Banking Services\n1. Check Balance\n2. Recharge\n3.Transfer\n4.Paybills\n5.Get loan\n6. Open New Account'))

// //Recharge function
// function recharge() {
//     const tranType = parseInt(prompt('What type of recharge do you want\n1.data\n2.airtime'))

//     switch (tranType) {
//         case 1:
//             alert('Data service not available')
//             break
//         case 2:
//             const amount = parseInt(prompt('Enter Amount:'))
//             const num = prompt('Enter destination number')
//             if (amount <= balance) {
//                 balance -= amount
//                 alert(`Your recharge of ${num} is successful\n your new balance is ${balance}`)
//             } else {
//                 alert('abeg go hustle')
//             }
//             break
//         default:
//             alert('Invalid number')
//     }
// }





// switch (transact) {
//     case 1:
//         alert(`Your balance is currently ${balance}USD`)
//         break
//     case 2:
//         recharge()
//         break
//     case 3:
//         alert('we no dey do transfer')
//         break
//     default:
//         alert('invalid option')
// }  


// let i = 0
const tur = [56, 65, 98, 102, 52, 54, 32,9,8,2,3,1]
console.log(tur)

// while(i< tur.length){
//     console.log(tur[i]*2)
//     i++
// }

// tur.pop() removes the last element in an array

// tur.shift() removes the first element of an array

// tur.push('Fade') add an element at the end of an array
// tur.unshift('Fade') adds from the beginning

// const newTur = tur.slice(1,5) cuts and assign to new variable
// console.log(newTur)


// tur.splice(3,2, 'Joy')

// console.log(tur)
function greet(person = 'User'){
    console.log('Hello world '+ person)
}

greet("Gabby")
greet("Atau")
greet()

for(let i = 0; i<tur.length; i++){
    console.log(tur[i])
}

const atiboy = {
    name: 'Atau',
    age: 15,
    occupation:'Yahoo boy',
    email: 'atiboy@gomycode.com',
    gender: 'male',
    married: false,
    hobbies: ['Game', 'Music', 'Simping', 'DJing']
}
atiboy.name = 'Savior'
atiboy.occupation = 'Minister for Women Affairs'
atiboy.shoe = 45

delete atiboy.email

// let okay = confirm("Are you okay?")

// console.log(okay)
const ppl = ['Joy', 'Atau', 'Johnson', 'Jonathan','Michael', 'Blessing', 'Dora', 'Jasemin']

function sorted(arr){
    let arrange = arr.sort()
    return arrange
}
const sorPPl=sorted(ppl)

function something(arr){
    for(i of arr){
        console.log(i+' is a student')
    }
}
something(ppl)

const str = 'weather'
console.log(str.split(''))