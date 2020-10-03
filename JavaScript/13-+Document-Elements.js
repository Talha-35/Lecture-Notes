
// 🔥🔥🔥 GETELEMENT YÖNTEMİ İLE ELEMENT SEÇME 🔥🔥🔥


let element ;

// id'e göre seçme
element = document.getElementById("object");
element = document.getElementById("h3");

// class'a göre seçme
element = document.getElementsByClassName("title"); // diyelim ki bu object classında birden fazla element olabiir. ozaman Array gibi düşünüp indexleme yapacağız.
element = document.getElementsByClassName("title")[0]; // o. class daki element gelir

// tag'e göre seçme
element = document.getElementsByTagName("h3")

GETELEMENT YÖNTEMİ İLE ELEMENT SEÇME

------------------------------------------------------------------------

// 🔥🔥🔥 QUERYSELECTOR(CSS) YÖNTEMİ İLE ELEMENT SEÇME  🔥🔥🔥

//(tek bir element dönüyor) - id-class işaretlerini yazmamız gerekiyor

element = document.querySelector("#object") // # unutma
element = document.querySelector("#h3") // # unutma

element = document.querySelector(".title") // . (nokta) unutma (normalde title classında üç dört farklı element var ama query selector sadece bir tane getirir)
element = document.querySelectorAll(".title") // All der isek o zaman hepsini getirir

element = document.querySelector("h2") // sayfadaki ilk h2 getirir
element = document.querySelectorAll("h2") // sayfadaki bütün h2 leri getirir

element = document.querySelector("p")
element = document.querySelectorAll("p") 


console.log(element);

------------------------------------------------------------------------


// 🔥🔥🔥 ELEMENT SEÇME VE STYLE 🔥🔥🔥











// 🔥🔥🔥  🔥🔥🔥












