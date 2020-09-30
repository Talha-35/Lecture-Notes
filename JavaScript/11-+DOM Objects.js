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


------------------------------------------------------------------



------------------------------------------------------------------



------------------------------------------------------------------



------------------------------------------------------------------

// ➤ document : Sayfanın kökü.  => document.links, document.height

// ➤ elements :  Ağaçtaki bir düğüm.

// ➤ nodelist : Bir grup öğe =>  document.getElementByTagName ('h1')

// ➤ atribute : DOM'daki bir düğüm.

Kod	Fonksiyon
write(“string”)     	verilen dizeyi belgeye yazar
getElementById ()	    verilen id değerine sahip öğeyi döndürür. Öğe İD e göre bir öğe bulur
getElementsByName ()	verilen ad değerine sahip tüm öğeleri döndürür
getElementsByTagName ()	verilen etiket adına sahip tüm öğeleri döndürür
getElementsByClassName ()	verilen sınıf adına sahip tüm öğeleri döndürür
innerHTML	:       Bir HTML öğesinin içindeki içeriğe yazmak amacıyla erişmenin bir yolu
document.forms :    	temel olarak belge nesnesinin "formlar" koleksiyonuna erişim


Finding Elements

document.getElementById (id): Öğe kimliğine göre bir öğe bulun
document.getElementsByTagName (name): Öğeleri etiket adına göre bulun
document.getElementsByClassName (name): Öğeleri sınıf adına göre bulun

Finding Elements

element.innerHTML: Bir elemanın iç HTML'sini değiştirin
element.attribute: Bir HTML öğesinin öznitelik değerini değiştirin

Adding and Deleting Elements

document.createElement (element): Bir HTML öğesi oluşturun
document.removeChild (element): Bir HTML öğesini kaldırın
document.appendChild (element): Bir HTML öğesi ekleyin
document.replaceChild (yeni, eski): Bir HTML öğesini değiştirin
document.write (text): HTML çıktı akışına yazın

örnek : //Bu örnekte <p>, id = "object" ile öğenin içeriğini (innerHTML) değiştirir :

<html>
  <body>
     <p id="object"></p>
     <script>
      document.getElementById("object").innerHTML = "Hello World!";
     </script>
  </body>
</html>
Output:
Hello World!

örnek : // Bu örnek, id = "demo" olan öğeyi bulur ve ardından <p>"demo" içindeki tüm öğeleri bulur :

<html>
  <body>
      <h1>Clarusway</h1>
      <div id="demo">
          <p>Hello Clarusway</p>
          <p>Document Object Model (DOM)</p>
      </div>
      <p id="DOM"></p>
    <script>
      var x = document.getElementById("demo");
      var y = x.getElementsByTagName("p");
      document.getElementById("demo").innerHTML = 
'The first paragraph inside is: ' + y[0].innerHTML;
    </script>
  </body>
</html>
output :
Clarusway
The first paragraph inside is: Hello Clarusway
