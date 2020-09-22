// Conditional Statements (Koşullu İfadeler)

// Bir koşul true ise , bir eylem gerçekleştirilebilir ve koşul false ise başka bir eylem gerçekleştirebilirsiniz.
// IF STATEMENT:    Belirtilen bir koşul true ise , Kullanyürütülecek bir kod bloğu belirtmek için
// ELSE:            Aynı koşul false ise , elseyürütülecek bir kod bloğu belirtmek için kullanın
// ELSE IF :         İlk koşul false ise , test etmek için yeni bir koşul belirtmek için else kullan
// SWITCH:          bir değeri birden çok değişkenle karşılaştırın.

// IF STATEMENT:

örnek :
var x = 3;
if (x == 3) {
  console.log(x); //(the condition is true and statement to be execute)
}
çıktı: 3

if (age === 18 ){
  console.log("buyrun girebilir siniz ?")
  else {
    console.log("biraz büyü de gel")
  }
}



// ELSE

örnek :
var time = 12;
if (time < 8) {
    console.log("Good morning.");
} else {
    console.log("Good day.");
}
çıktı: Good day.


// ELSE IF :  

örnek :
var time = 21.00;
if (time < 19) {
     console.log("Guten Tag");
} else if (time < 22) {
    console.log("Guten Abend");
} else  {
    console.log("Guten Abend");
}
çıktı : 
Guten Abend

örnek :
let age = 15;
if (age === 18) {
    console.log("buyrun girebilir siniz ?");
} else if (age >= 19) {
    console.log("biraz büyüksün ama yine de gel");
} else if (age >= 29) {
    console.log("biraz büyüksün ama yine de gel");
} else if (age >= 59) {
    console.log("çok büyüksün olmaz");
} else {
    console.log("biraz küçüksün olmaz");
}
çıktı :
biraz küçüksün olmaz


örnek :
const point = 40;
if (point > 80 ) {
    console.log("Süper sınavı AA ile geçtiniz");
} else if (point >= 40  && point < 80 ) {
    console.log("sınavı BB ile geçtiniz");
} else  {
    console.log("kaldın");
}

