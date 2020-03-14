// const car = {
//     maker: 'Ford',
//     model: 'Fiesta',
//     drive() {
//         console.log(`Driving a ${this.maker} ${this.model} car!`)
//     }
// };
// car.drive();
// -----------------------------------------------------------------------
// const car = {
//     maker: 'Ford',
//     model: 'Fiesta'
// };
//
// const drive = function() {
//     console.log(`Driving a ${this.maker} ${this.model} car!`);
// }.bind(car);
//
// drive();


const car = {
    maker: 'Ford',
    model: 'Fiesta',
    drive() {
        console.log(`Driving a ${this.maker} ${this.model} car!`);
    }
};

const anotherCar = {
    maker: 'Audi',
    model: 'A4'
};
car.drive();
car.drive.bind(anotherCar)();



const car1 = {
    maker: 'Ford',
    model: 'Fiesta'
};

const drive = function(kmh) {
    console.log(`Driving a ${this.maker} ${this.model} car at ${kmh} km/h!`);
};

drive.call(car1, 100);
drive.apply(anotherCar, [100]);
