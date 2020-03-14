console.log("CONNECTED");

// var isPurple = false;
//
// // document.querySelector("button").addEventListener("click", function(){
// //     if (isPurple){
// //         document.body.style.background = "white";
// //     }else{
// //         document.body.style.background = "purple";
// //     }
// //     isPurple = !isPurple;
// // })
//

document.querySelector("button").addEventListener("click", function(){

        document.body.classList.toggle("purple");
})

// Create a new paragraph element
const p = document.createElement("p");

// Set it's content
p.textContent = 'Welcome!';

// Append it to the end of the document body
document.querySelector('#container').appendChild(p);

const createCard = function(title, text, image){
        const container = document.createElement('div');
        container.classList.add('card');

        const topImage = document.createElement('img');
        topImage.classList.add('card-img-top');
        topImage.setAttribute('src', image);
        container.appendChild(topImage);

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = title;
        cardBody.appendChild(cardTitle);

        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.textContent = text;
        cardBody.appendChild(cardText);

        container.appendChild(cardBody);

        return container;
};

const cardElement = createCard(
    'Card title',
    'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    'https://cdn-images-1.medium.com/max/653/1*wMZnVAEei1xbY1v6sAbYxQ.png');
document.querySelector('#container').appendChild(cardElement);

