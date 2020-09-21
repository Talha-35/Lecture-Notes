// Template Literal - ES6 ile geldi. Stringleri biçimlendirmeye yarar. 


let a;

const name = "Murat CELIK";
const department = "bilişim";
const salary = 5000;

a = "isim: " + name + "\n" + "department: " + "bilişim" + "\n" + "salary : " + 4000;

// yukaradakini daha kolay bir yazma yöntemi Template Literal dır.

a = `isim:${name}\ndepartment:${department}\nmaaş:${salary}`

console.log(a)

html = "<ul>" +
             "<li>" + name + "</li>" +
             "<li>" + department + "</li>" +
             "<li>" + salary + "</li>" +
             "</ul>";

document.body.innerHTML = html;

// yukaradakini daha kolay bir yazma yöntemi Template Literal dır.

function b() {
    return "merhaba";
}
html = `<ul>
        <li> ${name}</li>
        <li> ${department}</li>
        <li> ${salary}</li>
        <li> ${10/4}</li>
        <li> ${b()}</li>
        </ul>`

document.body.innerHTML = html;


örnek : 

const myString = "Merhaba " + 100 +  " kere " + "merhaba"
// bu ikisi aynı sonucu verir
const myString = `Merhaba 100 kere merhaba`
console.log(myString)

örnek :

// Arada mesela 2 tab yapar isen o zaman 2 tab olduğu gibi gözükür
const myString = `Merhaba            100 kere merhaba`
console.log(myString)

örnek :

// mesele bu şekilde dolar işareti içine alır iseniz o zaman işlemin sonucunu da yazar
const myString = `Merhaba ${100 +100} kere merhaba`
console.log(myString)
// çıktısı : Merhaba 200 kere merhaba

örnek :

let name = "Güler Demir hanımefendi"
const myString = `Günaydın ${name} diye sormak istedim`
console.log(myString)
// Günaydın Güler Demir hanımefendi diye sormak istedim

