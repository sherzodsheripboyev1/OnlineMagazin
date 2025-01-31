let nomi = document.querySelector("#nomi");
let narx = document.querySelector("#narx");
let rangi = document.querySelector("#rangi");
let rasm = document.querySelector("#rasm");
let soni = document.querySelector("#soni");
let model = document.querySelector("#model");

let cantactbtn = document.querySelector("#cantactbtn");

cantactbtn.setAttribute("onclick","getElement()")




function getElement() {

    let newElement = new ElementPush(
        nomi.value,
        narx.value,
        rangi.value,
        rasm.value,
        soni.value,
        model.value
    );
    products.push(newElement);

    createCardList();
    nomi.value = "";
    narx.value = "";
    rangi.value = "";
    rasm.value = "";
    soni.value = "";
    model.value = "";
     
    
}

function ElementPush(_nomi, _narx, _rangi, _rasm, _soni, _model) {
  this.product = _nomi;
  this.price = _narx;
  this.color = _rangi;
  this.productImage = _rasm;
  this.quantity = _soni;
  this.size = _model;
}