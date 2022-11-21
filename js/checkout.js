let selectionJson = Cookies.get(`tvSelect`);
let tvParse = JSON.parse(selectionJson);

document.body.insertAdjacentHTML(`afterend`, `<p>Price: ${tvParse.price}</p>`);
document.body.insertAdjacentHTML(`afterend`,`<h2>${tvParse.title}</h2>`);
document.body.insertAdjacentHTML(`afterend`,`<img src="${tvParse.imageUrl}">`);


function pickAgain(){
    Cookies.remove(`tvSelect`); 
}

document.querySelector(`button`).addEventListener(`click`, pickAgain);

