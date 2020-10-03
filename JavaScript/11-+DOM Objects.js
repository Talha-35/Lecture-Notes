// The DOM Objects/ Elements and Methods


// ➤ The Document Object Model (DOM) -- Belge Nesne Modeli  --
// ➤ Belgelerin mantıksal yapısını ve bir belgeye erişme ve işleme biçimini tanımlar.
// Html etiketleri bir araya gelerek DOM ini oluşturur.
// Child-Parentve attribute (href class vb)
// ➤ DOM , web sayfasını yapılandırılmış hiyerarşik şekilde temsil etmenin bir yoludur, böylece programcılar ve kullanıcılar belgede gezinmeyi kolaylaştırır


// Node  (Düğüm)
// ➤ Düğüm ağacındaki düğümlerinbirbirleriyle hiyerarşik bir ilişkisi vardır.
// Head and Body mesela iki farklı NODE dir. onların da altında Childs var.

------------------------------------------------------------------


// ➤ document : Sayfanın kökü.  => document.links, document.height

// ➤ elements :  Ağaçtaki bir düğüm.

// ➤ nodelist : Bir grup öğe =>  document.getElementByTagName ('h1')

// ➤ atribute : DOM'daki bir düğüm.


------------------------------------------------------------------

// SCRİPTLER

value = document.scripts; // dokument içindeki scriptleri getirir
value = document.scripts.length; // dokument için kaç adet script olduğunu getirir
value = document.scripts[0]; // dokument içindeki 0. scripti getirir
 

// LİNKLER

value = document.links;
value = document.links.length;
value = document.links[0];
value = document.links[0].className;
value = document.links[0].classList; // birden fazla class var ise getirir
value = document.links[0].getAttribute("class"); // bu şekildede classı öğrenebiliriz
value = document.links[0].getAttribute("href"); // bu şekildede hrefini öğrenebiliriz
value = document.links[dokument.links.length-1]; // sonuncu link
value = document.links[dokument.links.length-1].className; // sonuncu linkin classı



// FORMS
value = document.forms;
value = document.forms.length;
value = document.forms[0];
value = document.forms[0].id;
value = document.forms[0].getAttribute("id"); // bu şekildede id sini öğrenebiliriz
value = document.forms[dokument.forms.length-1].name;
value = document.forms[dokument.forms.length-1].getAttribute("name"); 


console.log(value);

