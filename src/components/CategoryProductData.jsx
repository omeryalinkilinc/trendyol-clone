const products = [
  {
    id: 100001,
    title: "Ahşap Askı",
    image:
      "https://cdn.dsmcdn.com/ty1640/prod/QC/20250219/02/661e1b83-9567-3b3e-b973-c6e53b9b260f/1_org_zoom.jpg",
    price: "1691.06",
    rating: "5.0",
    categorySlug: "ev-dekorasyon-urunleri",
    fast_delivery: true,
    shipping_free: true,
  },

  {
    id: 100002,
    title: "Duvar Paneli",
    image:
      "https://cdn.dsmcdn.com/ty1648/product/media/images/prod/PIM/20250308/05/f07bc4f4-ba5c-4830-99d3-3be1a8a7829b/1_org_zoom.jpg",
    price: "5.9",
    rating: "4.9",
    categorySlug: "ev-dekorasyon-urunleri",
    fast_delivery: false,
    shipping_free: true,
  },
  {
    id: 100003,
    title:
      "Krom Ayaklı Fileli Sekreter Koltuğu,Öğrenci Çalışma Koltuğu,Çalışma Masası Koltuğu,Ofis Sandalyesi",
    image:
      "https://cdn.dsmcdn.com/ty1535/product/media/images/prod/QC/20240909/21/0fe548c4-02da-3042-a663-6f94c026ba9c/1_org_zoom.jpg",
    price: "1.593.90",
    rating: "4.7",
    categorySlug: "calisma-araclari",
    fast_delivery: true,
    shipping_free: true,
  },
  {
    id: 100004,
    title: "Feyza Şef Koltuğu Tek Kollu Mekanizma Krom Yıldız Ayaklı",
    image:
      "https://cdn.dsmcdn.com/ty1578/prod/QC/20241008/12/50d45eed-74f0-329c-8591-dc6d6039a20c/1_org_zoom.jpg",
    price: "4.274,05",
    rating: "4.5",
    categorySlug: "calisma-araclari",
    fast_delivery: false,
    shipping_free: true,
  },
  {
    id: 100005,
    title:
      "Krom Ayaklı Fileli Sekreter Koltuğu,Öğrenci Çalışma Koltuğu,Çalışma Masası Koltuğu,Ofis Sandalyesi",
    image:
      "https://cdn.dsmcdn.com/ty1633/prod/QC/20250203/13/3e23cf0e-ce7a-35a3-bab9-95443bb489d9/1_org_zoom.jpg",
    price: "1.093",
    rating: "3.6",
    categorySlug: "calisma-araclari",
    fast_delivery: true,
    shipping_free: false,
  },
  {
    id: 100006,
    title:
      "Alis Hareketli Kollu Çalışma Koltuğu | Personel Çalışma Masası Sandalyesi (Gri)",
    image:
      "https://cdn.dsmcdn.com/ty1606/prod/QC/20241127/16/58668782-c5f9-3419-8500-ce9e312de1f5/1_org_zoom.jpg",
    price: "2.422",
    rating: "3.5",
    categorySlug: "calisma-araclari",
    fast_delivery: false,
    shipping_free: false,
  },
  {
    id: 100007,
    title: "Terra Başlıklı Baza 2'li Set - Krem",
    image:
      "https://cdn.dsmcdn.com/ty1494/product/media/images/prod/QC/20240822/11/cca49420-96d1-385a-badd-ed760fa0b4fd/1_org.jpg",
    price: "36.495,58",
    rating: "4.3",
    categorySlug: "urunleri-kesfet",
    fast_delivery: false,
    shipping_free: true,
  },
  {
    id: 100008,
    title: "Liberta Modern Özel Tasarım Dokuma Yolluk - Gri/lacivert",
    image:
      "https://cdn.dsmcdn.com/ty1496/product/media/images/prod/QC/20240822/11/35ec2a1b-2e91-387a-b56f-1a6ab5e86e5f/1_org_zoom.jpg",
    price: "199",
    rating: "4.6",
    categorySlug: "urunleri-kesfet",
    fast_delivery: true,
    shipping_free: true,
  },
  {
    id: 100009,
    title: "Polka Akordeon Köşe Gardrop",
    image:
      "https://cdn.dsmcdn.com/ty1494/product/media/images/prod/QC/20240822/11/0409a755-25a7-3854-b5fd-1fc30424e2e7/1_org_zoom.jpg",
    price: "35.781,75",
    rating: "4.7",
    categorySlug: "urunleri-kesfet",
    fast_delivery: false,
    shipping_free: true,
  },
  {
    id: 1000010,
    title:
      "Rani Bj102 Makyaj Masası 2 Çekmeceli Raflı Aynalı Takı Düzenleyici Beyaz",
    image:
      "https://cdn.dsmcdn.com/ty1624/prod/QC/20250115/15/d106dd5d-9be9-32b0-a2f3-4adc667edbb1/1_org_zoom.jpg",
    price: "2.900",
    rating: "4.5",
    categorySlug: "rani",
    fast_delivery: true,
    shipping_free: false,
  },
  {
    id: 1000011,
    title:
      "Rani JE162 Kahve Köşesi Çok Amaçlı Dolap 4 Kapaklı Kiler Mutfak Dolabı Beyaz - Sepet Ceviz",
    image:
      "https://cdn.dsmcdn.com/ty1550/product/media/images/ty1548/prod/QC/20240916/15/bc353e1f-53a0-3b02-9b14-259dee28182d/1_org_zoom.jpg",
    price: "3.150",
    rating: "4.7",
    categorySlug: "rani",
    fast_delivery: false,
    shipping_free: true,
  },
  {
    id: 1000012,
    title:
      "Rani JE179 Çok Amaçlı Dolap 8 Kapaklı 2 Çekmeceli Kiler Mutfak Dolabı  Beyaz - Sepet Ceviz",
    image:
      "https://cdn.dsmcdn.com/ty1549/product/media/images/ty1550/prod/QC/20240916/15/43a9b0b7-99ee-3951-a7de-827851ce451b/1_org_zoom.jpg",
    price: "7.900",
    rating: "4.6",
    categorySlug: "rani",
    fast_delivery: false,
    shipping_free: false,
  },
  {
    id: 1000013,
    title: "Diva Counry 6 Kapaklı 2 Çekmeceli Gardırop",
    image:
      "https://cdn.dsmcdn.com/ty1652/prod/QC/20250318/14/cdd08cc9-aa32-338c-a2df-f7d677d71a58/1_org_zoom.jpg",
    price: "12.819",
    rating: "4.5",
    categorySlug: "rabi",
    fast_delivery: true,
    shipping_free: false,
  },
  {
    id: 1000014,
    title: "Izel Country Şifonyer",
    image:
      "https://cdn.dsmcdn.com/ty1532/product/media/images/prod/QC/20240909/16/003b3380-38c6-3d0f-9680-3bfa1450d5d3/1_org_zoom.jpg",
    price: "4.359",
    rating: "4.3",
    categorySlug: "rabi",
    fast_delivery: false,
    shipping_free: true,
  },
  {
    id: 1000015,
    title:
      "4'lü Akordiyon Katlanır Süzgeç Seti - Mutfak Çeyiz Seti (Akordeon Saplı Pirinç Süzgeci Huni Gri)",
    image:
      "https://cdn.dsmcdn.com/ty1571/prod/QC/20240924/11/f9c215ce-c106-3896-94c9-fc735d9d310e/1_org_zoom.jpg",
    price: "149",
    rating: "4.8",
    categorySlug: "ceyiz-hazirliklari",
    fast_delivery: true,
    shipping_free: true,
  },
  {
    id: 1000016,
    title:
      "Çok Fonksiyonlu Sebze Doğrayıcı Rende - Vegetable Chopper - Çeyiz Listesi - Çeyiz Seti",
    image:
      "https://cdn.dsmcdn.com/ty1619/prod/QC/20241225/15/6875e0df-e4e6-3257-84f7-749897b2aa5c/1_org_zoom.jpg",
    price: "455,69",
    rating: "4.3",
    categorySlug: "ceyiz-hazirliklari",
    fast_delivery: false,
    shipping_free: true,
  },
  {
    id: 1000017,
    title:
      "37 Ürün Pratik Mutfak Gereçleri, Çeyiz Seti, Hazırlık Sunum Pişirme Ürünleri",
    image:
      "https://cdn.dsmcdn.com/ty1664/prod/QC/20250411/23/b9d77f7d-ebe9-3a81-80a8-171e580bb51d/1_org_zoom.jpg",
    price: "1.096",
    rating: "4.4",
    categorySlug: "ceyiz-hazirliklari",
    fast_delivery: true,
    shipping_free: false,
  },
  {
    id: 1000018,
    title: "Magou 1000ml Ahşap Kapaklı Lunch Box 2'li",
    image:
      "https://cdn.dsmcdn.com/ty1645/prod/QC/20250305/20/1fd4d79c-0f06-35b2-949f-694e033dd4b2/1_org_zoom.jpg",
    price: "264",
    rating: "4.6",
    categorySlug: "urunlere-goz-at",
    fast_delivery: true,
    shipping_free: true,
  },
  {
    id: 1000019,
    title: "Priour 4-lü Çay Fincanı",
    image:
      "https://cdn.dsmcdn.com/ty1572/prod/QC/20240927/20/4133d88e-f703-35ba-acb3-36486c8324cd/1_org_zoom.jpg",
    price: "200,20",
    rating: "4.7",
    categorySlug: "urunlere-goz-at",
    fast_delivery: false,
    shipping_free: true,
  },
  {
    id: 1000020,
    title: "Klimalı Yastık - Beyaz 50 X 70",
    image:
      "https://cdn.dsmcdn.com/ty1662/prod/QC/20250415/08/e479b1b2-4645-3e86-afc1-c4e9041c1fc5/1_org_zoom.jpg",
    price: "247,50",
    rating: "4.5",
    categorySlug: "urunlere-goz-at",
    fast_delivery: true,
    shipping_free: false,
  },
  {
    id: 1000021,
    title:
      "Ervin 4 Sele Raflı Tiba Atlantik Çam Airfry Çok Amaçlı Kiler Dolabı 4 Raflı Dolaplı Kahve Köşesi",
    image:
      "https://cdn.dsmcdn.com/ty1553/product/media/images/ty1552/prod/QC/20240917/13/c5224447-5825-3912-8c84-22c6b8d285e0/1_org_zoom.jpg",
    price: "6.721,20",
    rating: "4.9",
    categorySlug: "avantajli-urunler",
    fast_delivery: false,
    shipping_free: true,
  },
  {
    id: 1000022,
    title: "Semplice Meşe Dekoratif Duvar Rafı 54x16 Cm",
    image:
      "https://cdn.dsmcdn.com/ty1470/product/media/images/prod/QC/20240809/00/1ba6ba23-13dd-3046-b0b0-36c7c6306af2/1_org_zoom.jpg",
    price: "132,35",
    rating: "4.3",
    categorySlug: "avantajli-urunler",
    fast_delivery: true,
    shipping_free: false,
  },
  {
    id: 1000023,
    title:
      "Gürgen Ahşap Retro Ayak Dekoratif Beyaz Pelüş Puf Tabure Bench Koltuk Sandalye",
    image:
      "https://cdn.dsmcdn.com/ty1667/prod/QC/20250417/22/5fd34ecd-3cca-3dfc-9f58-ac52b4a27fbd/1_org_zoom.jpg",
    price: "259",
    rating: "3.9",
    categorySlug: "avantajli-urunler",
    fast_delivery: true,
    shipping_free: true,
  },
  {
    id: 1000024,
    title: "Konfeksiyon Elbise Askılık Iki Raflı 148 X 106 Cm",
    image:
      "https://cdn.dsmcdn.com/ty488/product/media/images/20220721/14/147126839/525028815/1/1_org_zoom.jpg",
    price: "389",
    rating: "3.3",
    categorySlug: "avantajli-urunler",
    fast_delivery: false,
    shipping_free: false,
  },
  {
    id: 1000025,
    title: "Erkek Kol Saati Gözlük Isimli Anahtarlık Ve Bileklik Set",
    image:
      "https://cdn.dsmcdn.com/ty1385/product/media/images/prod/QC/20240626/08/d5333916-28c6-3872-bb5d-a8788ea7f7cd/1_org_zoom.jpg",
    price: "799",
    rating: "4.4",
    categorySlug: "aksesuar-&-saat-&-gozluk-firsatlari",
    fast_delivery: true,
    shipping_free: false,
  },
  {
    id: 1000026,
    title: "Skechers Sr9078 Erkek Kol Saati",
    image:
      "https://cdn.dsmcdn.com/ty1662/prod/QC/20250415/22/fa9bcafb-6777-3fad-9025-957a40e073c1/1_org_zoom.jpg",
    price: "1.673",
    rating: "4.3",
    categorySlug: "aksesuar-&-saat-&-gozluk-firsatlari",
    fast_delivery: false,
    shipping_free: true,
  },
  {
    id: 1000027,
    title:
      "UV400 Korumalı Çocuk Güneş Gözlüğü 50m Su Geçirmez Çocuk Kol Saati Renkli Kutu Hediyeli",
    image:
      "https://cdn.dsmcdn.com/ty1348/product/media/images/prod/QC/20240604/15/b3f6469b-168a-3e4d-bcb0-a55b3ebad777/1_org_zoom.jpg",
    price: "277,20",
    rating: "5.0",
    categorySlug: "aksesuar-&-saat-&-gozluk-firsatlari",
    fast_delivery: true,
    shipping_free: true,
  },
  {
    id: 1000028,
    title: "Romanson RMS RMS.1.AG1498.03 Erkek Güneş Gözlüğü",
    image:
      "https://cdn.dsmcdn.com/ty1576/prod/QC/20241002/12/f160d4a9-a46f-33cf-b618-b03dbd9556ac/1_org_zoom.jpg",
    price: "5.000",
    rating: "4.5",
    categorySlug: "aksesuar-&-saat-&-gozluk-firsatlari",
    fast_delivery: true,
    shipping_free: true,
  },
  {
    id: 1000029,
    title: "pullmarkt Çelik Taşlı Kol Saati Dijital Genç Kol Saatleri",
    image:
      "https://cdn.dsmcdn.com/ty522/product/media/images/20220903/14/168878685/450918977/1/1_org_zoom.jpg",
    price: "360",
    rating: "4.0",
    categorySlug: "aksesuar-&-saat-&-gozluk-firsatlari",
    fast_delivery: true,
    shipping_free: true,
  },
  {
    id: 1000030,
    title: "inegölmobilyası Londra Yatak Odası Takımı",
    image:
      "https://cdn.dsmcdn.com/ty1620/prod/QC/20250104/20/8728d5df-fdac-3471-9506-60d5dd9b0e78/1_org_zoom.jpg",
    price: "38.999",
    rating: "5.0",
    categorySlug: "yatak-odsai-mobilyasi",
    fast_delivery: true,
    shipping_free: true,
  },
  {
    id: 1000031,
    title: "AYDINEV BOHEM DÜĞÜN PAKETİ",
    image:
      "https://cdn.dsmcdn.com/ty1296/product/media/images/prod/SPM/PIM/20240505/18/b2ff8749-0ed6-3378-beed-913f068cb78d/1_org_zoom.jpg",
    price: "182.637,50",
    rating: "5.0",
    categorySlug: "yatak-odsai-mobilyasi",
    fast_delivery: true,
    shipping_free: true,
  },
  {
    id: 1000032,
    title: "inegölmobilyası Madrid Krem (AYTAŞI) Yatak Odası Takımı 2025",
    image:
      "https://cdn.dsmcdn.com/ty1663/prod/QC/20250416/16/dfdb412a-688a-3cca-b197-3634759f4762/1_org_zoom.jpg",
    price: "38.100",
    rating: "4.7",
    categorySlug: "yatak-odsai-mobilyasi",
    fast_delivery: false,
    shipping_free: true,
  },
  {
    id: 1000033,
    title: "ayça MOBİLYA AÇELYA YATAK ODASI TAKIMI %100 MDF",
    image:
      "https://cdn.dsmcdn.com/ty1498/product/media/images/prod/QC/20240823/13/990ce187-525c-355f-8307-ab46b38c36b2/1_org_zoom.jpg",
    price: "75.000",
    rating: "4.0",
    categorySlug: "yatak-odsai-mobilyasi",
    fast_delivery: false,
    shipping_free: true,
  },
  {
    id: 1000034,
    title:
      "Avmpark Vira 110 Cm ( 90 Cm Ve 104 Cm Petekler Için ) Petek Üstü Kahve Köşesi Çok Amaçlı Raf Sepet Beyaz",
    image:
      "https://cdn.dsmcdn.com/ty1604/prod/QC/20241120/16/c1a9b7e1-7a0b-3187-8280-91a7c3a31ba0/1_org_zoom.jpg",
    price: "1.890",
    rating: "4.7",
    categorySlug: "mutfak-&-banyo-mobilyasi",
    fast_delivery: false,
    shipping_free: true,
  },
  {
    id: 1000035,
    title:
      "VitrA Mia 75077 Banyo Dolabı Seti Çekmeceli, Ayaklı, 80 Cm, Antrasit",
    image:
      "https://cdn.dsmcdn.com/ty1647/prod/QC/20250311/09/887d34ff-88e1-370e-8497-1f94b6a4ba56/1_org_zoom.jpg",
    price: "11.015,94",
    rating: "4.1",
    categorySlug: "mutfak-&-banyo-mobilyasi",
    fast_delivery: true,
    shipping_free: false,
  },
  {
    id: 1000036,
    title: "AYKOL MOBİLYA Çok Amaçlı Dolap Konsol Banyo Dolabı Ayakkabılık",
    image:
      "https://cdn.dsmcdn.com/ty1655/prod/QC/20250322/15/591cde9c-b93d-3a2b-8f6e-d11f7fe2bd07/1_org_zoom.jpg",
    price: "3.268,68",
    rating: "5.0",
    categorySlug: "mutfak-&-banyo-mobilyasi",
    fast_delivery: true,
    shipping_free: true,
  },
  {
    id: 1000037,
    title: "dekorazi Yeni Akasya Yemek Masası 90x156 Cm",
    image:
      "https://cdn.dsmcdn.com/ty1363/product/media/images/prod/QC/20240613/14/c5991f26-70d0-317a-b200-f12f03132f29/1_org_zoom.jpg",
    price: "5.850",
    rating: "4.8",
    categorySlug: "mutfak-&-banyo-mobilyasi",
    fast_delivery: true,
    shipping_free: true,
  },
  {
    id: 1000038,
    title:
      "Avmpark Ervin 4 Sele Raflı Tiba Atlantik Çam Airfry Çok Amaçlı Kiler Dolabı 4 Raflı Dolaplı Kahve Köşesi",
    image:
      "https://cdn.dsmcdn.com/ty1553/product/media/images/ty1552/prod/QC/20240917/13/c5224447-5825-3912-8c84-22c6b8d285e0/1_org_zoom.jpg",
    price: "6.721,20",
    rating: "4.9",
    categorySlug: "mutfak-&-banyo-mobilyasi",
    fast_delivery: false,
    shipping_free: true,
  },
  {
    id: 1000039,
    title:
      "Mowo Home Mowo 4 Katlı Beyaz Tekerlekli Banyo Rafı, Mutfak Rafı, Havluluk, Deterjanlık Makyaj Organizer Vesken",
    image:
      "https://cdn.dsmcdn.com/ty1553/product/media/images/ty1551/prod/QC/20240917/23/1815944e-a8a5-3174-a8bb-eadd94e255ff/1_org_zoom.jpg",
    price: "349,90",
    rating: "4.7",
    categorySlug: "mutfak-&-banyo-mobilyasi",
    fast_delivery: true,
    shipping_free: true,
  },
  {
    id: 1000040,
    title: "MFT AYAKKABI Kadın Taş İşlemeli Abiye Ayakkabı ve Çanta Takımı",
    image:
      "https://cdn.dsmcdn.com/ty1662/prod/QC/20250416/23/81723e7d-1906-3c49-a109-ccf6b0e38ecd/1_org_zoom.jpg",
    price: "1.363",
    rating: "5.0",
    categorySlug: "ayakkabi-ve-canta-trendini-yakala",
    fast_delivery: true,
    shipping_free: true,
  },
  {
    id: 1000041,
    title: "DARUGA Kadın İnce Topuklu Abiye  Ayakkabı ve Çanta Kombin",
    image:
      "https://cdn.dsmcdn.com/ty1597/prod/QC/20241101/18/a4dd8479-3649-38e2-9c95-41ddb9a299be/1_org_zoom.jpg",
    price: "1.187",
    rating: "3.0",
    categorySlug: "ayakkabi-ve-canta-trendini-yakala",
    fast_delivery: false,
    shipping_free: true,
  },
  {
    id: 1000042,
    title:
      "LA CALZATURE Lacivert Saten Çanta Takım 11cm Yan Şeffaf Yıldız Taşlı Topuklu Stiletto Kadın Ayakkabı",
    image:
      "https://cdn.dsmcdn.com/ty1521/product/media/images/prod/QC/20240826/19/cd86ab18-b0af-32de-a652-2966d49deb13/1_org_zoom.jpg",
    price: "2.249,90",
    rating: "4.9",
    categorySlug: "ayakkabi-ve-canta-trendini-yakala",
    fast_delivery: false,
    shipping_free: true,
  },
  {
    id: 1000043,
    title:
      "Wilson Spor Çantası Ayakkabı Bölmeli Gri Renk Spor Ve Seyahat Çantası",
    image:
      "https://cdn.dsmcdn.com/ty1478/product/media/images/prod/QC/20240812/20/c77d8697-072e-3935-93a1-f470faf7cec3/1_org_zoom.jpg",
    price: "916,68",
    rating: "4.7",
    categorySlug: "ayakkabi-ve-canta-trendini-yakala",
    fast_delivery: true,
    shipping_free: true,
  },
  {
    id: 1000044,
    title: "GULT Kadın Ince Yüksek Topuklu Stiletto Ve Çanta Takımı Ten Nude",
    image:
      "https://cdn.dsmcdn.com/ty1595/prod/QC/20241028/07/0077c0c9-fb58-3696-923c-e840fc279923/1_org_zoom.jpg",
    price: "1.399",
    rating: "4.1",
    categorySlug: "ayakkabi-ve-canta-trendini-yakala",
    fast_delivery: true,
    shipping_free: true,
  },
  {
    id: 1000045,
    title:
      "Solo Bag Ayakkabı Gözlü Termoslu Büyük Boy Unisex Lacivert Spor Fitness Ve Seyahat Çantası",
    image:
      "https://cdn.dsmcdn.com/ty306/product/media/images/20220124/10/34637066/353971648/1/1_org_zoom.jpg",
    price: "516,50",
    rating: "4.6",
    categorySlug: "ayakkabi-ve-canta-trendini-yakala",
    fast_delivery: true,
    shipping_free: true,
  },
  {
    id: 1000046,
    title:
      "Solo Bag Ayakkabı Gözlü Termoslu Orta Boy Unisex Spor Fitness Ve Seyahat Çantası",
    image:
      "https://cdn.dsmcdn.com/ty749/product/media/images/20230225/16/289455898/868557353/1/1_org_zoom.jpg",
    price: "519",
    rating: "4.8",
    categorySlug: "ayakkabi-ve-canta-trendini-yakala",
    fast_delivery: true,
    shipping_free: true,
  },
  {
    id: 1000047,
    title: "Genel Markalar Yumuşak Suni Deri Ortopedik Erkek Spor Ayakkabı",
    image:
      "https://cdn.dsmcdn.com/ty1552/product/media/images/ty1552/prod/QC/20240917/13/9b3e2a89-53b3-304f-9a1d-6900b72891ae/1_org_zoom.jpg",
    price: "240",
    rating: "4.1",
    categorySlug: "ayakkabi-ve-canta-trendini-yakala",
    fast_delivery: false,
    shipping_free: false,
  },
  {
    id: 1000048,
    title: "L.A Polo 063 Buz Renk Beyaz Tabanlı Günlük Erkek Spor Ayakkabı",
    image:
      "https://cdn.dsmcdn.com/ty1625/prod/QC/20250113/16/f95e539f-9a09-3fed-8672-e02c13f416ef/1_org_zoom.jpg",
    price: "694,90",
    rating: "4.6",
    categorySlug: "ayakkabi-ve-canta-trendini-yakala",
    fast_delivery: true,
    shipping_free: true,
  },

  {
    id: 1000048,
    title:
      "İmerShoes Günlük Erkek Siyah Beyaz Sneaker Bağcıklı Rahat Fileli Hava Alabilen Yürüyüş Spor Ayakkabısı 013",
    image:
      "https://cdn.dsmcdn.com/ty1571/prod/QC/20240924/22/cc2e9f48-e593-3a32-8d31-dcaa3fba5200/1_org_zoom.jpg",
    price: "398,54",
    rating: "4.3",
    categorySlug: "ayakkabi-ve-canta-trendini-yakala",
    fast_delivery: true,
    shipping_free: true,
  },

  {
    id: 1000049,
    title:
      "exalted hawk Su Damlası Dekoratif Ayna Seti Ahşap 16 Adet Pleksi Ayna",
    image:
      "https://cdn.dsmcdn.com/ty1479/product/media/images/prod/QC/20240813/19/971b0e21-8834-38ba-b13c-ae018909475c/1_org_zoom.jpg",
    price: "147",
    rating: "4.3",
    categorySlug: "ev-dekorasyon-urunleri",
    fast_delivery: true,
    shipping_free: true,
  },
];

export default products;
