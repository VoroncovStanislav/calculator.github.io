let price = document.getElementById("price");
let dohod = document.getElementById("dohod");
let rashod = document.getElementById("rashod");
let okupaemost_p = document.querySelector(".okupaemost");
let kapitalizacia_p = document.querySelector(".kapitalizacia");

function rashet() {
    let ok = price.value / ((dohod.value * 12) - (rashod.value * 12));
    let okupaemost = Math.floor(ok * 100) / 100
    // let procent = 100;
    let kapitalizacia = (((dohod.value * 12) - (rashod.value * 12)) * 100) / price.value;
    okupaemost_p.innerHTML = `Срок окупаемости: ${okupaemost} год`
    kapitalizacia_p.innerHTML = `Ставка капитализации: ${kapitalizacia} % в год`
    // console.log(Math.floor(okupaemost * 100) / 100);
    // console.log(kapitalizacia);
}