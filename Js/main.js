
let cardlist = document.querySelector("#cardlist");
let count = document.querySelector("#count")
let cardsavat = document.querySelector("#cardSavat")
let carssavatli = document.querySelector("#carssavatli")
let productadd = document.querySelector(".productadd");
let sotibolish = document.querySelector("#sotibolish");
function createCardList() {
    cardlist.innerHTML = null;

    products.forEach((product, index) => {
        let card = document.createElement("div");
        card.classList.add("rounded-md", "hover:bg-[#488691]", "bg-[#60B3C1]");

        let card_img = document.createElement("img");
        card_img.src = product.productImage;
        card_img.alt = product.product;
        card_img.classList.add("rounded-md", "w-full", "h-70", "object-cover");

        let card_titles = document.createElement("div");
        card_titles.classList.add("p-3");

        let card_title = document.createElement("p");
        card_title.textContent = product.product.length > 100
            ? product.product.substring(0, 100) + "..."
            : product.product;
        card_title.classList.add("font-semibold", "text-[16px]",);

        let card_price = document.createElement("p");
        card_price.textContent = `Uz: ${product.price} so'm`;
        card_price.classList.add("font-bold", "py-2", "text-xl", "font-semibold");

        let card_quantited = document.createElement("p");
        card_quantited.textContent = `Sotunda mavjud: ${product.quantity}`;
        card_quantited.classList.add("text-gray-500", "text-sm", "py-2", "font-semibold", "mb-2");

        let card_btn = document.createElement("button");
        card_btn.textContent = "Sotib olish";
        card_btn.classList.add("bg-slate-800", "text-white", "px-8", "py-3", "text-xl", "rounded-lg", "flex", "items-center", "justify-center", "gap-4", "mx-auto", "active:bg-slate-500");
        card_btn.setAttribute("onclick", `sotibOlish(${index})`)

        card_titles.appendChild(card_title);
        card_titles.appendChild(card_price);
        card_titles.appendChild(card_quantited);
        card_titles.appendChild(card_btn);

        card.appendChild(card_img);
        card.appendChild(card_titles);

        cardlist.appendChild(card);
        console.log();

    });
}

createCardList();
let savatcha = [];

function sotibOlish(index) {

    if (savatcha.length == 0) {
        let new_pord = { ...products[index], count: 1 }
        savatcha.push(new_pord)
    } else {
        let check = savatcha.find((item) => item.id == products[index].id)
        if (!check) {
            let new_pord = { ...products[index], count: 1 }
            savatcha.push(new_pord)
        } else {
            check.count += 1;
        }
    }
    products[index].quantity -= 1;
    if (products[index].quantity == 0) {
        products.splice(index, 1)
        // products.classList.toggle("hidden: ")
    }
    createCardList();
    rendorCard();
    Cardsumm();
    count.textContent = savatcha.length;

}

// cardsavat.setAttribute("onclick", `SavatchaAdd()`);

function Shovcard() {
    cardsavat.classList.toggle("translate-x-[-600px]")
    cardsavat.classList.toggle("translate-x-[0px]")
    Cardsumm()

}
function rendorCard() {
    carssavatli.innerHTML = null;
    savatcha.forEach(card => {
        let card_div = document.createElement("div");
        card_div.classList.add("rounded-md", "border-2", "flex", "gap-2", "flex", "mx-3", "my-3");


        let card_img = document.createElement("img");
        card_img.src = card.productImage;
        card_img.alt = card.product;
        card_img.classList.add("rounded-md", "w-32", "h-32", "object-cover");

        let card_text = document.createElement("div");
        card_text.classList.add("p-3");

        let card_titles = document.createElement("p");
        card_titles.textContent = card.product;
        card_titles.classList.add("font-semibold", "text-[16px]", "mb-3");

        let card_count = document.createElement("div");
        card_count.classList.add("flex", "gap-2", "items-center",);


        let card_doubl = document.createElement("button");
        card_doubl.textContent = "+";
        card_doubl.classList.add("bg-slate-800", "text-white", "rounded-lg", "py-2", "px-3");
        card_doubl.addEventListener("click", () => {
            card.count += 1;
           
            let index = products.findIndex(item => item.id === card.id);
            if (index !== -1) {
                products[index].quantity -= 1;
                createCardList();
                rendorCard();
                Cardsumm();
            }

        });

        let card_price = document.createElement("p");
        card_price.textContent = `${card.count}`;
        card_price.classList.add("font-bold", "py-2", "text-xl", "font-semibold");

        let card_minus = document.createElement("button");
        card_minus.textContent = "-";
        card_minus.classList.add("bg-slate-800", "text-white", "rounded-lg", "py-2", "px-3");
        card_minus.addEventListener("click", () => {
            savatcha.slice(card.id, 1);
            if (card.count == 1) {
                savatcha = savatcha.filter((item) => item.id !== card.id);
            
                let index = products.findIndex(item => item.id === card.id);
                if (index !== -1) {
                    products[index].quantity += 1;
                } else {
                    products.push(card);
                }
            } else {
                card.count -= 1;
            }
            rendorCard();
            createCardList();4
            Cardsumm();
            
        })

        card_div.appendChild(card_img);
        card_div.appendChild(card_text);

        card_text.appendChild(card_titles);
        card_text.appendChild(card_count);


        card_count.appendChild(card_minus);
        card_count.appendChild(card_price);
        card_count.appendChild(card_doubl);

        carssavatli.appendChild(card_div);



    })
}


rendorCard();

function addCards() {


}




document.querySelector("#qoshish").addEventListener("click", () => {
    let modal = document.querySelector("#productadd");
    modal.classList.toggle("translate-x-[-3000px]");
    modal.classList.toggle("translate-x-[0px]");
});
document.querySelector("#qoshishx").addEventListener("click", () => {
    let modal = document.querySelector("#productadd");
    modal.classList.toggle("translate-x-[-3000px]");
    modal.classList.toggle("translate-x-[0px]");
});
 
 let summa = document.querySelector("#summa");
let sum = 0;
 function Cardsumm() 
 {
    savatcha.forEach((item) => {
     sum += item.price * item.count;
        summa.textContent = sum;
        
    });
    
 }
