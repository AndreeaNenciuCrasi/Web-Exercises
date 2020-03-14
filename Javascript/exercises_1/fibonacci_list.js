console.log("CONNECTED");

const data = [1, 1, 2, 3, 5, 8, 13, 21];  // Fibonacci ❤
const list = document.createElement("ul");  // Create the container ul elements
list.classList.add('fibonacci-list');


for (let dataItem of data){
    const listItem = document.createElement("li");
    listItem.classList.add(dataItem % 2 === 0 ? 'number-even': 'number-odd');
    listItem.addEventListener('click', function() {
        this.classList.toggle('selected');
    });

    const listItemContent = document.createTextNode(dataItem.toString());

    listItem.appendChild(listItemContent);
    list.appendChild(listItem);
}

const container = document.querySelector('#fibonacci-container');
container.appendChild(list);