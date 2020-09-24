// Conditional Statements (Koşullu İfadeler)

// Bir koşul true ise , bir eylem gerçekleştirilebilir ve koşul false ise başka bir eylem gerçekleştirebilirsiniz.
// IF STATEMENT:    Belirtilen bir koşul true ise , Kullanyürütülecek bir kod bloğu belirtmek için
// ELSE:            Aynı koşul false ise , elseyürütülecek bir kod bloğu belirtmek için kullanın
// ELSE IF :         İlk koşul false ise , test etmek için yeni bir koşul belirtmek için else kullan
// SWITCH:          bir değeri birden çok değişkenle karşılaştırın.


---------------------------------------------------------------------------------------------------------------



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

---------------------------------------------------------------------------------------------------------------



// ELSE

örnek :
var time = 12;
if (time < 8) {
    console.log("Good morning.");
} else {
    console.log("Good day.");
}
çıktı: Good day.



---------------------------------------------------------------------------------------------------------------




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


---------------------------------------------------------------------------------------------------------------




// SWITCH : 
// bir değişkenin değerini birden çok değerle karşılaştırmak ve eşleşmeye göre bazı ifadeleri yürütmek için kullanılır.

örnek :
var name = 'Talha';
switch (name) {
  case 'Yusuf':
    console.log(name + ' PYTON ustasıdır');
    break;
  case 'Eyüp':
    console.log(name + ' JS ustasıdır');
    break;
  default:
    console.log('Malesef, ' + name + "'yı tanımıyorum" + '.');
}
çıktı : 
Malesef, Talha'yı tanımıyorum.

// ⚜️ NOT: Break ifadesini atlarsanız, diğer döngüyü de yazmaya çalışır.

örnek : 
switch (userType) {
  case "Admin":
      console.log("Adminsin girbilirsiniz");
      break;
  case "employee":
      console.log("kısıtlı giriş hakkınız var");
      break;
  case "Customer":
      console.log("Menüye girebilirsiniz");
      break;
  case "Kind":
      console.log("Çocuk girişi tespit edildi");
      break;
  default:
      console.log("giremezsiniz sistem sizi tanımlayamadı")
}


---------------------------------------------------------------------------------------------------------------




// TERNARY : 
// komutları tek satırda yazmak için kullanılır. ama komutunda tek satır olması gerekiyor.

const score = 55;

if (score < 50) {
    console.log("BAD")
} else {
    console.log("GOOD")
}

// bunu tek satırda yazmanın yolu aşağıdadır. Her ikisi de aynı sonucu verir

score < 50 ? console.log("BAD") : console.log("GOOD")

// veya

const score = 55;
const result = score < 50 ? "BAD" : "GOOD"
console.log("result : ", result)

// veya

const score = 55;
console.log(score < 50 ? "BAD" : "GOOD")



---------------------------------------------------------------------------------------------------------------





// NULLISH : 
// Bir değerin null olup olmadığını veya boş olup olmadığını kontrol eder.

const myVariable = null; // eğer burada bir değer var ise onu yazıdırı yok ise de aşağıda yazan değeri yazdırır.

const result = myVariable != null ? myVariable : 80;
// daha kısa hali aşağıdadır.
const result = myVariable ?? 80;

console.log("result : ", result)

örnek :

const myVariable = "i ";

const result = myVariable != " " ? myVariable : 80;
// daha kısa hali
// const result = myVariable ?? 80;
console.log("result : ", result)
çıktı : 
i

örnek :

const myVariable = " ";

const result = myVariable != " " ? myVariable : 80;
// daha kısa hali
// const result = myVariable ?? 80;
console.log("result : ", result)
çıktı : 
80