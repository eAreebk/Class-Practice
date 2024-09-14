
const car = {
    company: 'Honda',
    model: 'Atlas',
    year: 2025,
    colors: [`Blue`, `Black`, `White`, `Purple`],
    hybrid: true,

    drive: function(){
       console.log(`The car is in motion`);
    },

    stop: function() {
        console.log('The car has stopped');
      }

};

// Calling objects keys to get thier values

console.log(`Company:`, car.company);
console.log(`Model:`, car.model);
console.log(`year:`, car.year);
console.log(`Colors:`, car.colors);
console.log(`hybrid:`, car.hybrid);
car.drive();
car.stop();


const person1 = {
    name: 'Areeb',
    age: 18,
    status: 'resident',
};

const person2 = {
    name: 'John',
    age: 22,
    status: 'tourist',
};

function checkage(person) {
    if (person.age >= 18 && person.status === 'resident') {
        console.log('Applicable for NIC applicant');
    } else {
        console.log('Not applicable for NIC applicant');
    }
}

checkage(person2);
