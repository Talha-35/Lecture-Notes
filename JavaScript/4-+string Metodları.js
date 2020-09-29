// STRINGLERİN METODLARI


let cumle = "ali'nin yaşı : 3434'dür. soyadı ise : "
let langs = "java,Pyton,Para,C++"
let city = ["bursa","izmir", "istanbul","Antakya","rize","Edirne"]
let word = "    boşluk     "
let num1 = 123456
let num2 = [1,2,3,4,5]
let aa = num1.toString()


// console.log(cumle.length); //uzunluğu ölçmek için
// console.log(cumle.concat("Demir'dir")); //ekleme yapmak için
// console.log(city[2]); //indexleme yapmak için
// console.log(langs.charAt(2)); //indexleme yapmak için(array de çalışmaz)
// console.log(langs.includes("java")); //içinde arama yapmak için kullanılır. Sonuç BOOLEON olur
// console.log(cumle.toLowerCase()); // Küçük yapma Methodu 
// console.log(cumle.toUpperCase()); //Büyük  yapma Methodu 
// console.log(langs.indexOf("Py"));// string içinde bir harfin konumunu aramak için kullanılır.
// console.log(langs.search(/py/i)); // Bu da string içinde bir harfin konumunu aramak için kullanılır. İndek of methodundan farkı şudur. /..../i bu şekilde yazar iseniz case sensitive özelliğini devre dışı kalır.
// console.log(langs.split(","));// Arraye çevirir.  Mesela bir dosyada eğer virgüller ile ayrılmış eleman var ise parantez içine virgül koyulur böylece tek tek listeye çevirir.
// console.log(cumle.split(" ")); //parantez içine normal cümle ise boşluk koyulur  böylece tek tek listeye çevirir. Boşluk koyulmaz ise harf harf listeler.
// console.log(aa.split("")); // sayıyı da önce string yapıp sonra listeleme yapabilirsiniz
// console.log(langs.replace("java","html")); // Değiştirme yapmak için kullanılır. Array de çalışmaz
// console.log(cumle.slice(1,5)); // sadece belirli bir yeri almak için. ilk rakamı alır son rakamı almaz
// console.log(cumle.substr(1,5)); // sadece belirli bir yeri almak için. ilk rakamı da son rakamı da alır.
// console.log(cumle.substring(1,5)); // sadece belirli bir yeri almak için. ilk rakamı alır son rakamı almaz
// console.log(word.trim()); // Etrafındaki boşlukları alır





// LENGTH Methodu

// let value;

const firstName = "Murat";
const lastName = "DEMIR";
value = firstName + " " + lastName
console.log(value)
value = value.length; // uzunluğu ölçmek için
console.log(value)
çıktı : 
Murat DEMIR

11

örnek : 

const name = "Murat";
const surname = "Demir";
console.log(`Benim ismimin uzunluğu : ${name.length} harftir`)
console.log(`Benim soyismimin uzunluğu : ${surname.length}`)
const lakap = ""
çıktı : 
Benim ismimin uzunluğu : 5 harftir
Benim soyismimin uzunluğu : 5
Benim lakabımın uzunluğu : 0

//Javascript de length özelliği boşluk, nokta, virgül gibi özel karakterleri de sayar yani her şeyi sayar.

var stringifade = "     ";
document.write("String İfade İçeriği: <br>" + stringifade + "<br><br>");
var uzunluk = stringifade.length; 
document.write("String İfadenin karakter uzunluğu : " + uzunluk);
çıktı :
String İfade İçeriği:
String İfadenin karakter uzunluğu : 5

// CONCAT MEthode - Ekleme  yapma - birleştirme 

const ek1 = "Fener";
const ek2 = "bahçe";
const toplam = ek1.concat(ek2)
console.log(toplam)
çıktı : 
Fenerbahçe

örnek : 


const ek1 = "Fener";
const ek2 = "bahçe";
const ek3 = " Şampiyon ";
const ek4 = "olacaktır"
const toplam = ek1.concat(ek2)
console.log(toplam.concat(ek3,ek4, " inş"))
çıktı : 
Fenerbahçe Şampiyon olacaktır inş

// INDEXLEME Methodu

const firstName = "Murat";
value = firstName[0];  // indexleme yapmak için
value = firstName[4];  // indexleme yapmak için
value = firstName[firstName.length - 1];  // yine son harfe ulaşmak için yapılabileck bir yöntem.

örnek : 
const school = "Clarusway"
console.log(school.charAt(1))
console.log(school[1])
çıktı : 
1
1

// CHAR AT METHODU (indexlemenin farklı bir yolu) (!! Arraylerde bu yöntem işlemiyor. Orada indexlemeyi kullanmak lazım)

örnek :
const firstName = "Murat";
value = firstName.charAt(2); // indexleme yapmak için kullanılır
çıktı : 
r

örnek : 
const school = "Clarusway"
console.log(school.charAt(1))
console.log(school[1])
çıktı : 
l
l

// INCLUDES METHODU
// içinde arama yapmak için kullanılır. Sonuç BOOLEON olur

örnek :
const langs = "java,Pyton,C++"
value1 = langs.includes("Pyton"); // pyton varmı yok mu?
value2 = langs.includes("JAVA"); // pyton varmı yok mu?
console.log(value1)
console.log(value2)
çıktı : 
true
false  // büyük küçük harf duyarlılığı olduğu için false çıkar

örnek :
const school = "Clarusway"
console.log(school.includes("C"))
çıktı : 
l

console.log(value)

// TOLOWERCASE + TOUPPERCASE - Büyük Küçük yapma Methodu 

örnek : 
const firstName = "Murat";
const lastName = "DEMIR";
value1 = firstName.toLowerCase(); // hepsini küçük yapmak için
value2 = firstName.toUpperCase(); // hepsini büyük yapmak için
console.log(value1)
console.log(value2)
çıktı : 
Murat
DEMIR


// INDEX OF METHODU
// string içinde bir harfin konumunu aramak için kullanılır.

örnek : 
const firstName = "Murat";
value1 = firstName.indexOf("t"); // u harfi nerede ?
value2 = firstName.indexOf("z"); // z harfi nerede ? bu harf olmadığı için sonuç -1 olarak çıkar
console.log(value1)
console.log(value2)
çıktı : 
4
-1

// SEARCH METHODU ( Regular Experessions - regex)
// string içinde bir harfin konumunu aramak için kullanılır. İndek of methodundan farkı şudur. 
// bu şekilde yazar iseniz /..../i case sensitive özelliğini devre dışı bıraktırır.

örnek : 
const cumle = "Hayat Almanca öğrenemeyecek kadar kısadır"
value = cumle.search("Almanca"); // 
console.log(value)
çıktı :
6

örnek : 
const cumle = "Hayat Almanca öğrenemeyecek kadar kısadır"
value = cumle.search(/almanca/i);
console.log(value)
çıktı :
6

// SPLIT METHODU
// Mesela bir dosyada eğer virgüller ile ayrılmış eleman var ise tek tek almayı sağlar

örnek :
const langs = "java,Pyton,C++"
value = langs.split(","); // parçalara bölmek için
console.log(value)
çıktı : 
(3) ['java', 'Pyton', 'C++']

örnek : 
const cumle = "Hayat Almanca öğrenemeyecek kadar kısadır"
value = cumle.split( " "); // parçalara bölmek için
console.log(value)
çıktı : 
(5) ['Hayat', 'Almanca', 'öğrenemeyecek', 'kadar', 'kısadır']


// REPLACE METHODU
// Değiştirme yapmak için kullanılır

örnek :
const langs = "java,Pyton,C++"
value = langs.replace("Pyton","CSS"); // pyton yerine css eklemek için kullandık
console.log(value)
çıktı : 
java,CSS,C++

örnek : 
const cumle = "Hayat Almanca öğrenemeyecek kadar kısadır"
value = cumle.replace("Almanca","İngilizce"); // 
console.log(value)
çıktı :
Hayat İngilizce öğrenemeyecek kadar kısadır


// SLICE METHODU
// sadece belirli bir yeri almak için 

örnek :
const cumle = "Hayat Almanca öğrenemeyecek kadar kısadır"
value = cumle.slice(6,13); // 
console.log(value)
çıktı : 
Almanca

örnek :
var dizi = ["ali", "veli", "kırklareli", "emret", "komutanım", "diyeceksiniz"];
var kopya2 = dizi.slice(2,5);// 2. indisden başlayarak (2. indis dahil), 5. indise kadar (5 hariç) olan tüm değerleri aldı ve yeni dizi oluşturdu.
document.write("2. kopya dizi : " + kopya2 + "<br>");
çıktı :
2. kopya dizi : kırklareli,emret,komutanım

// 2. indisden başlayarak (2. indis dahil), sonuncu değer hariç tüm değerleri aldı ve yeni dizi oluşturdu.
var kopya3 = dizi.slice(2,-1);
document.write("3. kopya dizi : " + kopya3 + "<br>");
çıktı :
3. kopya dizi : kırklareli,emret,komutanım


// SUBSTR METHODU
// ilk rakamdan başla ikinci rakam kadar say oraya kadar al demek

örnek :
const cumle = "Hayat Almanca öğrenemeyecek kadar kısadır"
value = cumle.substr(6,13); // 6. rakam ile 13. rakam arasını alır
console.log(value)
çıktı : 
Almanca öğren


// SUBSTRING METHODU
// ilk rakamdan başla ikinci rakama kadar al

örnek :
const cumle = "Hayat Almanca öğrenemeyecek kadar kısadır"
value = cumle.substring(6,13); // 6. rakamdan başlar 13 rakam daha sayar ve o arayı alır.
console.log(value)
çıktı : 
Almanca

// TRIM METHODU
// Etrafındaki boşlukları alır

örnek :
const cumle = "      Hayat Almanca öğrenemeyecek kadar kısadır          "
value = cumle.trim(); 
console.log(value)
çıktı : 
Hayat Almanca öğrenemeyecek kadar kısadır


--------------------------------------------------------------------------------------------


EKSTRA : 

// bir değer eklemenin kısa yolu : 

value = "Murat DEMIR"
value += " CANCADAN" // value = value + " " + CANCADAN

// boşluk eklemenin kısa yolu
value = firstName + " " + lastName // araya boşluk eklemek için

