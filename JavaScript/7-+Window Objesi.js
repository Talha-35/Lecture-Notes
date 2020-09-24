// WİNDOW OBJESİ


--------------------------------------------------------------------


console.log(this);
çıktı :
Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
// her iki osrgunun da çıktısı aynı olur. şu anda neredeyim demek  gibi birşey.


console.log(window);
çıktı :
Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …} // şuradaki üç noktaya tıklanır ise içinde çok sayıda method olduğu görülür. örnek vermek gerekir ise mesela ALERT bir window methodudur.

--------------------------------------------------------------------
// ALERT => tarayıcı ekranına birşey yazdıraya yarar.

console.log((alert("selam"))); // mesela bunu yazdırmasının sebebi window içinde oluğun için method sorunsuz çalışıyor. bunu aşağıdaki gibi de yazdırabilirsin
console.log((window.alert("selam"))); 


--------------------------------------------------------------------
// PROMT => input almaya yarar. mesela aşağıdaki örnek de kullanıcıya soru gidiyor.

const cevap = prompt("2+2= ?");
console.log(cevap);

if (cevap === "4" ) { 
    console.log("doğru cevap");
}
else {
    console.log("bilemediniz");
}

--------------------------------------------------------------------
// CONFİRM =>  emin misiniz sorusunu alabilirisniz.

const cevap = confirm("emin misiniz");
console.log(cevap);

if (cevap === true ) { // burda if (cevap) da yazsan aynı sonuç olur.
    console.log("silin gitsin");
}
else {
    console.log("silmeyiniz");
}
// her ikisi de aynı yazımdır. aşağıdaki kısa halidir.

if (confirm("emin misiniz")) {
    console.log("silin gitsin");
}
else {
    console.log("silmeyiniz");
}

--------------------------------------------------------------------
// LOCATİON => 

let value;

// value = window.location;
value = window.location.host;
value = window.location.host.hostname;
value = window.location.host.port;
value = window.location.href;
value = window.location.reload(); // bunu bu şekilde kullanır iseniz sayfa sürekli yenilnir sonsuz döngüye girer
console.log(value);

if (confirm("sayfa yenilensin mi")) {
    window.location.reload() // bu şekilde ypılır ise şart bağlı olur.
}
else {
    console.log("sayfa yenilenmedi");
}

--------------------------------------------------------------------
// outerHeight and outerWidth . ekran genişliğini ve yükeskliğini ölçer. ama bu ölçüme çerçeve vs herşey dahil
value = window.outerHeight;
value = window.outerWidth;
console.log(value);


--------------------------------------------------------------------
// innerHeight and innerWidth . ekran genişliğini ve yükeskliğini ölçer. ama bu ölçüme çerçeve vs dahil değildir.
value = window.innerHeight;
value = window.innerWidth;
console.log(value);


--------------------------------------------------------------------