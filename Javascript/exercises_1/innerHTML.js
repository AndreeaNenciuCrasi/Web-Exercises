document.querySelector('#firstContainer').innerHTML = `<p>Welcome!</p>`;

const createCard = function(title, text, image){
    return `
        <div class="card">
            <img class="card-img-top" src="${image}">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${text}</p>
            </div>
        </div>`;
};

const cardElementHTML = createCard(
    'Card title',
    'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    'https://cdn-images-1.medium.com/max/653/1*wMZnVAEei1xbY1v6sAbYxQ.png');

document.querySelector('#container').innerHTML = cardElementHTML;

const data = [1, 1, 2, 3, 5, 8, 13, 21];  // Fibonacci ❤
let listItems = '';

for (let dataItem of data){
    const itemClass = dataItem % 2 === 0 ? 'number-even': 'number-odd';
    listItems += `<li class="${itemClass}">${dataItem}</li>`;
}

const container = document.querySelector('#fibonacci-container');
container.innerHTML = `<ul class="fibonacci-list">${listItems}</ul>`;

const listItemElements = document.querySelectorAll('.fibonacci-list li');
for (let listItem of listItemElements){
    listItem.addEventListener('click', function() {
        this.classList.toggle('selected');
    });
}

const data2 = [1, 1, 2, 3, 5, 8, 13, 21];  // Fibonacci ❤

document.querySelector('#fibonacci-container2').innerHTML = `
    <ul class="fibonacci-list">
        ${data2.map(item =>
    `<li class="number-${item % 2 === 0 ? 'even': 'odd'}">${item}</li>`
).join('')}
    </ul>
`;

document.querySelectorAll('.fibonacci-list li').forEach(listItem =>
    listItem.addEventListener('click', function() {
        this.classList.toggle('selected');
    })
);