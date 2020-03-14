const createCard = function(title, text, image){
    const template = document.querySelector('#card-template');
    const clone = document.importNode(template.content, true);

    clone.querySelector('.card-img-top').setAttribute('src', image);
    clone.querySelector('.card-title').textContent = title;
    clone.querySelector('.card-text').textContent = text;

    return clone;
};

const cardElement = createCard(
    'Card title',
    'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    'https://cdn-images-1.medium.com/max/653/1*wMZnVAEei1xbY1v6sAbYxQ.png');
document.querySelector('#container').appendChild(cardElement);