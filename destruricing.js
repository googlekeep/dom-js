const fish = {
    name : 'king hilsa',
    address: 'chandpur',
    color:'silver',
    phone:'255459889',
    price:'40000',
}

const phone = fish.phone;
const color = fish.color;
console.log(phone); 


const {phone}= fish;



// array destructuring
const [first, another] = [44, 99];
console.log(first, another);