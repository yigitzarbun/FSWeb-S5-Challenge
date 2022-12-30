import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const cardContainer = document.createElement("div");
  const anabaslik = document.createElement("div");
  const yazar = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const yazarAdi = document.createElement("span");

  cardContainer.classList.add("card");
  anabaslik.classList.add("headline");
  yazar.classList.add("author");
  imgContainer.classList.add("img-container");

  anabaslik.textContent = makale.anabaslik;
  img.src = makale.yazarFoto;
  yazarAdi.textContent = makale.yazarAdi;

  imgContainer.appendChild(img);
  yazar.appendChild(imgContainer);
  yazar.appendChild(yazarAdi);
  cardContainer.appendChild(anabaslik);
  cardContainer.appendChild(yazar);

  cardContainer.addEventListener("click", (event) => {
    console.log(cardContainer.querySelector(".headline").textContent);
  });

  return cardContainer;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  const cardsContainer = document.querySelector(".cards-container");

  axios.get("http://localhost:5001/api/makaleler").then((response) => {
    const object = response.data.makaleler; // object = {javascript: Array, bootstrap: Array, teknoloji: Array, jquery: Array}
    const objectKeysArray = Object.keys(object); // objectKeysArray = ['javascript', 'bootstrap', 'teknoloji', 'jquery']

    for (let i = 0; i < objectKeysArray.length; i++) {
      for (let j = 0; j < object[objectKeysArray[i]].length; j++) {
        cardsContainer.appendChild(Card(object[objectKeysArray[i]][j]));
      }
    }
  });
};

export { Card, cardEkleyici };
