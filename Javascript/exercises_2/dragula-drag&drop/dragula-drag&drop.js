

let containers = document.querySelectorAll('.containers');
let containersArray = Array.from(containers);
dragula(containersArray);

dragula([document.getElementById('left'), document.getElementById('right')]);