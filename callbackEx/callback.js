const logTheImportantMessage = function() {
    console.log('Callbacks are awesome!');
};
const importantMessageLogger = logTheImportantMessage;  // messageLogger will point to the same function as logTheImportantMessage

logTheImportantMessage();
importantMessageLogger();

const randomIdGenerator = function() {
    return Math.floor(Math.random() * 1001);  // generate a random number between 0 and 1000
};

const notsoRandomIdGenerator = function() {
    return 4;  // Magic!
}

const objectGenerator = function(idGenerator) {
    return {
        id: idGenerator()  // we call the idGenerator as we call any function. It should contain a function, as we did not include any error handling.
    };
};

console.log(objectGenerator(randomIdGenerator));  //  Notice, we don't call the randomIdGenerator function here, we just pass it.
console.log(objectGenerator(notsoRandomIdGenerator));  // Notice the same thing here too.



//Callback example 1 - Telephone game

const people = [
    {name: 'Bob', knownMessage: null},
    {name: 'Jane', knownMessage: null},
    {name: 'Alex', knownMessage: null},
    {name: 'Kate', knownMessage: null},
    {name: 'Other Bob', knownMessage: null},
    {name: 'Mia', knownMessage: null},
    {name: 'John', knownMessage: null},
    {name: 'Emma', knownMessage: null},
    {name: 'Ana', knownMessage: null}
];

for(let i = 0; i < people.length - 1; i++) { //we skip the last person, as there is noone coming after her.
    people[i].nextPerson = people[i + 1];
}

const initialMessage = 'The quick brown fox jumps over the lazy dog.';

function tellMessage(person, message, callback){
    console.log(`${person.name} got the message: ${message}`);
    person.knownMessage = message;
    callback(person);  // pass the current person to the callback function, so it can do whatever it wants to do with this person.
}

function afterTellingTheMessage(person){
    if(person.nextPerson){  // decide if there is anyone coming after this person.
        console.log(`${person.name} turns to ${person.nextPerson.name} to forward the message.`);
        tellMessage(person.nextPerson, person.knownMessage, afterTellingTheMessage);  // use the `tellMessage` function to tell the currently know message to this next person.
    }else{
        console.log(`There is no more people after ${person.name}.`);
    }
}

tellMessage(people[0], initialMessage, afterTellingTheMessage);



//Callback example 2 - Traffic junction



const carA = {mark: 'A', waiting: true};
const carB = {mark: 'B', waiting: true};
const carT = {mark: 'T', waiting: true};


function goAndRunFunctionAfterFinished(car, whatToDoAfterTheCarHadTheTurn){
    console.log('Car ' + car.mark + ', it\'s your turn!');
    car.waiting = false;
    if(whatToDoAfterTheCarHadTheTurn){
        whatToDoAfterTheCarHadTheTurn()
        // This should be a logic (function) we can run after the car took it's turn.
    }
}

console.log('Is Car B waiting? ' + carB.waiting);
goAndRunFunctionAfterFinished(carB, function(){
    console.log('Is Car B waiting? ' + carB.waiting);
    console.log('---');
    goAndRunFunctionAfterFinished(carT, function(){
        goAndRunFunctionAfterFinished(carA, null);
    });
});


// console.log('1st log');
//
// setTimeout(function(){
//     console.log('3rd log');
// }, 500);
//
// console.log('2nd log');


//cheated visitor counter

// let randomSeconds = Math.floor(Math.random()*7000);
// console.log(randomSeconds);
// let visitorsNumber = 1;
// setTimeout(function(){
//     randomNumber = Math.floor(Math.random()*4);
//     visitorsNumber += randomNumber;
//     console.log(visitorsNumber);
// }, randomSeconds);
//
// // repeat with the interval of 2 seconds
// let timerId = setInterval(() => alert('tick'), 2000);
//
// // after 5 seconds stop
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

setTimeout(() => alert("World"));

alert("Hello");
