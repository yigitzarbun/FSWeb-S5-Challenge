const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //

  const headerDiv = document.createElement("div");
  const dateSpan = document.createElement("span");
  const title = document.createElement("h1");
  const yaziSpan = document.createElement("span");

  headerDiv.classList.add("header");
  dateSpan.classList.add("date");
  yaziSpan.classList.add("temp");

  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(title);
  headerDiv.appendChild(yaziSpan);

  title.textContent = baslik;
  dateSpan.textContent = tarih;
  yaziSpan.textContent = yazi;

  return headerDiv;
};

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

  const headerContainer = document.querySelector(".header-container");
  headerContainer.appendChild(
    Header("Tech e Tech", "29.12.2022", "Tech'te tech")
  );
};

export { Header, headerEkleyici };
