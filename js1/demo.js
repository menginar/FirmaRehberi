function displayResult(item, val, text) {
    console.log(item);
	
	var javascriptdegiskeni = text;
	var gelenid = val;
	window.location = "verial.php?veri=" + javascriptdegiskeni +"&id=" + gelenid;

}

$(function () {

    $('#demo1').typeahead({
        source: [
			{ id: 1, name: 'Adana'},
			{ id: 2, name: 'Adıyaman'},
			{ id: 3, name: 'Afyonkarahisar'},
			{ id: 4, name: 'Ağrı'},
			{ id: 5, name: 'Amasya'},
			{ id: 6, name: 'Ankara'},
			{ id: 7, name: 'Antalya'},
			{ id: 8, name: 'Artvin'},
			{ id: 9, name: 'Aydın'},
			{ id: 10, name: 'Aksaray'},
			{ id: 11, name: 'Ardahan'},
			{ id: 12, name: 'Balıkesir'},
			{ id: 13, name: 'Bilecik'},
			{ id: 14, name: 'Bingöl'},
			{ id: 15, name: 'Bitlis'},
			{ id: 16, name: 'Bolu'},
			{ id: 17, name: 'Burdur'},
			{ id: 18, name: 'Bursa'},
			{ id: 19, name: 'Bayburt'},
			{ id: 20, name: 'Batman'},
			{ id: 21, name: 'Bartın'},
		    { id: 22, name: 'Çanakkale'},
			{ id: 23, name: 'Çankırı'},
			{ id: 24, name: 'Çorum'},
			{ id: 25, name: 'Denizli'},
			{ id: 26, name: 'Düzce'},
			{ id: 27, name: 'Diyarbakır'},
			{ id: 28, name: 'Edirne'},
			{ id: 29, name: 'Elazığ'},
			{ id: 30, name: 'Erzincan'},
			{ id: 31, name: 'Erzurum'},
			{ id: 32, name: 'Eskişehir'},
			{ id: 33, name: 'Gaziantep'},
			{ id: 34, name: 'Giresun'},
			{ id: 35, name: 'Gümüşhane'},
			{ id: 36, name: 'Hatay'},
			{ id: 37, name: 'Hakkari'},
			{ id: 38, name: 'Iğdır'},
			{ id: 39, name: 'Isparta'},
			{ id: 40, name: 'İstanbul'},
			{ id: 41, name: 'İzmir'},
			{ id: 42, name: 'Kahramanmaraş'},
			{ id: 43, name: 'Karabük'},
			{ id: 44, name: 'Karaman'},
			{ id: 45, name: 'Kars'},
			{ id: 47, name: 'Kayseri'},
			{ id: 48, name: 'Kırıkkale'},
			{ id: 49, name: 'Kırşehir'},
			{ id: 51, name: 'Kocaeli'},
			{ id: 52, name: 'Konya'},
			{ id: 53, name: 'Kütahya'},
			{ id: 54, name: 'Kırklareli'},
			{ id: 55, name: 'Kilis'},
			{ id: 56, name: 'Kastamonu'},
			{ id: 57, name: 'Malatya'},
			{ id: 58, name: 'Manisa'},
			{ id: 59, name: 'Mersin'},
			{ id: 60, name: 'Muğla'},
			{ id: 61, name: 'Muş'},
			{ id: 62, name: 'Mardin'},
			{ id: 63, name: 'Ordu'},
			{ id: 64, name: 'Osmaniye'},
			{ id: 65, name: 'Nevşehir'},
			{ id: 66, name: 'Niğde'},
			{ id: 67, name: 'Sakarya'},
			{ id: 68, name: 'Samsun'},
			{ id: 69, name: 'Şanlıurfa'},
			{ id: 70, name: 'Siirt'},
			{ id: 71, name: 'Sinop'},
			{ id: 73, name: 'Sivas'},
			{ id: 74, name: 'Uşak'},
			{ id: 75, name: 'Trabzon'},
			{ id: 76, name: 'Tekirdağ'},
			{ id: 77, name: 'Tokat'},
			{ id: 78, name: 'Tunceli'},
			{ id: 79, name: 'Van'},
			{ id: 80, name: 'Yalova'},
			{ id: 81, name: 'Yozgat'},
			{ id: 82, name: 'Zonguldak'},
			{ id: 83, name: 'Şırnak'},
	    ],
        itemSelected: displayResult
    });

    $('#demo').typeahead({
        source: [
		   { id: 1, name: 'Alışveriş Merkezleri'},
		   { id: 2, name: 'Alüminyum ve Yan Sanayi'},
		   { id: 3, name: 'Ambalaj ve Yan Sanayi'},
		   { id: 4, name: 'Bilişim Sektörü'},
		   { id: 5, name: 'Büro ve Kırtasiye Malz.'},
		   { id: 6, name: 'Cam Sanayi'},
		   { id: 7, name: 'Diğer Sektörler'},
		   { id: 8, name: 'Egitim Kurumları'},
		   { id: 9, name: 'Ekonomi ve Finans'},
		   { id: 10, name: 'Elektrik ve Elektronik'},
		   { id: 11, name: 'Emlak Sektörü'},
		   { id: 12, name: 'Endüstriyel Ürünler'},
		   { id: 13, name: 'Fuar ve Organizasyon'},
		   { id: 14, name: 'Gıda Sektörü'},
		   { id: 15, name: 'Güzellik Sektörü'},
		   { id: 16, name: 'Hizmet Sektörü'},
		   { id: 17, name: 'Holdingler'},
		   { id: 18, name: 'Hurda'},
		   { id: 19, name: 'İmalat'},
		   { id: 20, name: 'İthalat ve İhracat'},
		   { id: 21, name: 'Kağıt Sanayi'},
		   { id: 22, name: 'Kimya Sanayi'},
		   { id: 23, name: 'Maden ve Metal Sektörü'},
		   { id: 24, name: 'Makina Sanayi'},
		   { id: 25, name: 'Metal Sanayi'},
		   { id: 26, name: 'Mimarlık'},
		   { id: 27, name: 'Mobilya Sanayi'},
		   { id: 28, name: 'Mühendislik'},
		   { id: 29, name: 'Nakliyat Lojistik'},
		   { id: 30, name: 'Ofis ve Kırtasiye'},
		   { id: 31, name: 'Organize Sanayii Siteleri'},
		   { id: 32, name: 'Otomotiv ve Yan Sanayi'},
		   { id: 33, name: 'Pazarlama Şirketleri'},
		   { id: 34, name: 'Petrol ve Yan Sanayii'},
		   { id: 35, name: 'Plastik ve Yan Sanayi'},
		   { id: 36, name: 'Savunma Sanayi'},
		   { id: 37, name: 'Sigorta'},
		   { id: 38, name: 'Sogutma ve Isıtma'},
		   { id: 39, name: 'Spor Sektörü'},
		   { id: 40, name: 'Tamir ve Bakım Servisleri'},
		   { id: 41, name: 'Tarım ve Hayvancılık'},
		   { id: 42, name: 'Tekstil Sektörü'},
		   { id: 43, name: 'Telekomunikasyon'},
		   { id: 44, name: 'Ulaşım ve Taşımacılık'},
		   { id: 45, name: 'nşaat Sektörü'},
		   { id: 47, name: 'Reklam ve Tanıtım'},
	
	
				   
			
	    ],
        display: 'name',
        val: 'id',
        itemSelected: displayResult
    });

   
		
});