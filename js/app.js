function choiceHandler(event){
    let parent = event.target.parentElement;
    if (parent.id == "select1"){
        let tvJson = JSON.stringify(tv1);
        Cookies.set(`tvSelect`, tvJson)
    } else if (parent.id == "select2"){
        let tvJson = JSON.stringify(tv2);
        Cookies.set(`tvSelect`, tvJson)
    } else if (parent.id == "select3"){
        let tvJson = JSON.stringify(tv3);
        Cookies.set(`tvSelect`, tvJson);
    }
}



let tv1 = {
    imageUrl : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqe8NNPIfGci4Skhkj7kMvF8fN0Z0OL9Hm-A&usqp=CAU`,
    title : `HiSense Smart 85 inch TV`,
    price : 3999
}

let tv2 = {
    imageUrl : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREKKa6B12HI22Ugjbh__3_p7Ti4R7WWJWjWw&usqp=CAU`,
    title : `Samsung Smart 85 inch TV`,
    price : 4999
}

let tv3 = {
    imageUrl : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTszH7bdL_fdHM2cxwYHLDyLErGU4lokbgoPw&usqp=CAU`,
    title : `Sony Smart 85 inch TV`,
    price : 5999
}

let selection1 = document.getElementById(`select1`);
selection1.insertAdjacentHTML(`afterbegin`, `<h2>Price ${tv1.price}</>`);
selection1.insertAdjacentHTML(`afterbegin`, `<h2>${tv1.title}</h2>`);
selection1.insertAdjacentHTML(`afterbegin`, `<img src="${tv1.imageUrl}" alt="Hisense TV">`);

let selection2 = document.getElementById(`select2`);
selection2.insertAdjacentHTML(`afterbegin`, `<h2>Price ${tv2.price}</>`);
selection2.insertAdjacentHTML(`afterbegin`, `<h2>${tv2.title}</h2>`);
selection2.insertAdjacentHTML(`afterbegin`, `<img src="${tv2.imageUrl}" alt="Samsung TV">`);

let selection3 = document.getElementById(`select3`);
selection3.insertAdjacentHTML(`afterbegin`, `<h2>Price ${tv3.price}</>`);
selection3.insertAdjacentHTML(`afterbegin`, `<h2>${tv3.title}</h2>`);
selection3.insertAdjacentHTML(`afterbegin`, `<img src="${tv3.imageUrl}" alt="Sony TV">`);

let choices = []
selection1.querySelector(`button`).addEventListener(`click`, choiceHandler);
selection2.querySelector(`button`).addEventListener(`click`, choiceHandler);
selection3.querySelector(`button`).addEventListener(`click`, choiceHandler);

