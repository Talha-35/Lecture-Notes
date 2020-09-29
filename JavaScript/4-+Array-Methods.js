// ARRAY METHODLARI


let city = ["bursa","izmir", "istanbul","Antakya","rize","Edirne"]
console.log(city);

// console.log(city.splice(1,2));  // 1. indisten başla 2 tane sil, silinecek adet sayısı belirtilmezse 1. indisten başlar sona kadar siler.
// console.log(city.splice(1,3,"samsun", "bayburt")); // 1. indisten başla 3 tane sil, yerine de samsun ile bayburt u ekle.
// console.log(city.unshift("aydın","afyon")) // dizilerin başına eleman ya da elemanlar eklemek için
// console.log(city.shift())  // dizilerin başından eleman silmek için
// console.log(city.push("aydın")) // dizilerin sonuna eleman ya da elemanlar eklemek için
// console.log(city.pop()) // dizilerin sonundan eleman silmek için
// console.log(delete city[1]); // delete metodu diğerleri gibi dizinin yapısını değiştirmez. Sadece belirttiğiniz indise ait eleman silinir yani belirttiğiniz indis undefined (tanımsız) olur.
console.log(city);




// splice() metodu diziye eleman ya da elemanlar eklenebilmesini sağladığı gibi, silinebilmesini de sağlar. splice() ile diziden silinen değeri geri döndürür.ekleneni döndürmez.  Metot dizinin yapısını değiştirir.

 
var dizi = new Array("ali", "veli", "kırklareli", "emret", "komutanım");
document.write("orjinal dizi : " + dizi + "<br>");
çıktı :
orjinal dizi : ali,veli,kırklareli,emret,komutanım



var sil = dizi.splice(2, 1); // 2. indisten başla 1 tane sil, silinecek adet sayısı belirtilmezse 2. indisten başlar sona kadar siler.
document.write("silinen değer : " + sil + "<br>");
document.write("silindikten sonraki dizi : " + dizi + "<br>");
çıktı :
silinen değer : kırklareli
silindikten sonraki dizi : ali,veli,emret,komutanım


var ekle = dizi.splice(1,0,"ahmet", "mehmet"); // 1. indisten başla (değeri 1. indisin önüne koyar), değer silme (0 koyarak değer silme diyoruz), sonradan yazılanları diziye 1. indisten itibaren ekle
document.write("eklenen değer : " + ekle + "<br>"); // eklenen değeri döndürmez dedik!
document.write("ekledikten sonraki dizi : " + dizi + "<br>");
çıktı :
eklenen değer :
ekledikten sonraki dizi : ali,ahmet,mehmet,veli,kırklareli,emret,komutanım


// aynı anda hem silip hem ekleme yapalım
var oncesilsonraekle = dizi.splice(1,2,"murat"); // 1. indisten sonra (1. indis dahil) 2 değer silip güncel değer i ekledi
document.write("silinen değerler : " + oncesilsonraekle + "<br>");
document.write("ekledikten sonraki dizi : " + dizi + "<br>");
çıktı :
silinen değerler : ahmet,mehmet
ekledikten sonraki dizi : ali,murat,veli,kırklareli,emret,komutanım




// unshift() Javascript de dizilerin başına eleman ya da elemanlar eklemek için unshift() metodunu kullanıyoruz. Metot diziye eleman ya da elemanlar eklerken dizinin yapısını değiştirir.


var dizi = ["kırklareli", "emret", "komutanım", "diyeceksiniz"];
document.write("eklenmeden önce dizi : " + dizi + "<br>");
çıktı :
eklenmeden önce dizi : kırklareli,emret,komutanım,diyeceksiniz

dizi.unshift("ali", "veli");
document.write("eklendikten sonra dizi : " + dizi);
çıktı :
eklendikten sonra dizi : ali,veli,kırklareli,emret,komutanım,diyeceksiniz




// push() Javascript de dizilerin sonuna push() metodu eleman ya da elemanlar ekleyebiliriz. Metot elemanları eklerken dizinin yapısını değiştirir.

var dizi = ["ali", "veli", "kırklareli", "emret"];
document.write("eklenmeden önce dizi : " + dizi + "<br>");
çıktı :
eklenmeden önce dizi : ali,veli,kırklareli,emret

dizi.push("komutanım", "diyeceksiniz");
document.write("eklendikten sonra dizi : " + dizi);
çıktı:
eklendikten sonra dizi : ali,veli,kırklareli,emret,komutanım,diyeceksiniz



// shift() metodu dizilerin ilk elemanlarını siler ve döndürür.

var dizi = ["ali", "veli", "kırklareli", "emret", "komutanım"];
document.write("silinmeden önce dizi : " + dizi + "<br>");
 çıktı :
 silinmeden önce dizi : ali,veli,kırklareli,emret,komutanım

var silinen = dizi.shift();
document.write("silinen değer : " + silinen + "<br>");
document.write("silindikten sonra dizi : " + dizi);
çıktı:
silinen değer : ali
silindikten sonra dizi : veli,kırklareli,emret,komutanım




// pop() metodu dizinin son elemanını siler ve dizinin yapısını değiştirir. Aynı zamanda da diziden silinen elemanı döndürür.

var dizi = ["ali", "veli", "kırklareli", "emret", "komutanım"];
document.write("silinmeden önce dizi : " + dizi + "<br>");
çıktı :
silinmeden önce dizi : ali,veli,kırklareli,emret,komutanım

var silinen = dizi.pop();
document.write("silinen değer : " + silinen + "<br>");
document.write("silindikten sonra dizi : " + dizi);
çıktı :
silinen değer : komutanım
silindikten sonra dizi : ali,veli,kırklareli,emret


// NOT:   javascript ile shift() metodu ile dizinin ilk elemanını, pop metodu ile de dizinin son elemanını indisleri ile beraber siler



// delete metodu diğerleri gibi dizinin yapısını değiştirmez. Sadece belirttiğiniz indise ait eleman silinir yani belirttiğiniz indis undefined (tanımsız) olur.

var dizi = ["ali", "veli", "kırklareli", "emret", "komutanım"];
document.write("silinmeden önce dizi : " + dizi + "<br>");
çıktı :
silinmeden önce dizi : ali,veli,kırklareli,emret,komutanım

delete dizi[3];
document.write("silindikten sonra dizi : " + dizi + "<br>");
çıktı:
silindikten sonra dizi : ali,veli,kırklareli,,komutanım

