// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/ThreatAnalysis/nls/strings":{_widgetLabel:"Tehdit Analizi",threatAnalysisMainPageTitle:"JCAT Kar\u015f\u0131 Ter\u00f6rizm K\u0131lavuzunu temel al\u0131r",jcatURL:"https://www.dni.gov/nctc/jcat/references.html",inputLocation:"Giri\u015f Konumu",interactive:"\u0130nteraktif",fromCoord:"Sabit Koordinat",existingFeature:"Mevcut Detaylardan",threatAnalysisCoordInputLabel:"Tehdit Konumu",enterCoords:"Koordinatlar\u0131 gir",threatAddPointToolTip:"Tehdit Konumu Ekle",threatDrawPointToolTip:"Tehdit konumu eklemek i\u00e7in t\u0131kla",
threatType:"Tehdit T\u00fcr\u00fc",threatPlaceholder:"Bir tehdit aramak i\u00e7in yazmaya ba\u015fla",mandatoryLabel:"Zorunlu Tahliye Mesafesi",safeLabel:"G\u00fcvenli Tahliye Mesafesi",zoneTypeLabel:"B\u00f6lge T\u00fcr\u00fc",feetLabel:"Fit",metersLabel:"Metre",unitsLabel:"Birimler",threatGraphicLayer:"Tehdit-Grafik",settingsTitle:"Ayarlar",mandatoryButtonLabel:"Zorunlu Tahliye Mesafesi Ayarlar\u0131n\u0131 Yap\u0131land\u0131r",safeButtonLabel:"Yerinde Bar\u0131nak Ayarlar\u0131n\u0131 Yap\u0131land\u0131r\u0131n",
style:"Stil",colorPicker:"renkSe\u00e7ici",lineStyles:{esriSLSDash:"\u00c7izgi",esriSLSDashDot:"\u00c7izgi Nokta",esriSLSDashDotDot:"\u00c7izgi Nokta Nokta",esriSLSDot:"Nokta",esriSLSLongDash:"Uzun \u00c7izgi",esriSLSLongDashDot:"Uzun \u00c7izgi Nokta",esriSLSNull:"Bo\u015f",esriSLSShortDash:"K\u0131sa \u00c7izgi",esriSLSShortDashDot:"K\u0131sa \u00c7izgi Nokta",esriSLSShortDashDotDot:"K\u0131sa \u00c7izgi Nokta Nokta",esriSLSShortDot:"K\u0131sa Nokta",esriSLSSolid:"Kat\u0131"},fillStyles:{esriSFSBackwardDiagonal:"Geri",
esriSFSCross:"\u00c7apraz",esriSFSDiagonalCross:"Diyagonal",esriSFSForwardDiagonal:"\u0130leri",esriSFSHorizontal:"Yatay",esriSFSNull:"Bo\u015f",esriSFSSolid:"Kat\u0131",esriSFSVertical:"Dikey"},resultsTitle:"Sonu\u00e7lar",publishTABtn:"Yay\u0131nla",layerName:"Yay\u0131nlanan Katman Ad\u0131",invalidLayerName:"Katman ad\u0131 sadece alfa say\u0131sal karakterler ve alt \u00e7izgiler i\u00e7ermelidir",missingLayerNameMessage:"Yay\u0131nlayabilmeniz i\u00e7in ge\u00e7erli bir katman ad\u0131 girmelisiniz",
publishingFailedLayerExists:"Yay\u0131nlama Ba\u015far\u0131s\u0131z Oldu: Bir detay servisi ad\u0131 {0} zaten var. L\u00fctfen ba\u015fka bir katman ad\u0131 se\u00e7in.",checkService:"Servisi Denetle: {0}.",createService:"Servis Olu\u015ftur: {0}.",unableToCreate:"Olu\u015fturulam\u0131yor: {0}",addToDefinition:"Tan\u0131ma ekle: {0}",successfullyPublished:"Ba\u015far\u0131l\u0131 bir \u015fekilde yay\u0131nlanan web katman\u0131",successfullyAppended:"Ba\u015far\u0131l\u0131 bir \u015fekilde web katman\u0131na eklenen yeni detaylar",
manageWebLayerText:"Web katman\u0131n\u0131 y\u00f6netin",userRole:"Kullan\u0131c\u0131 gerekli izne sahip olmad\u0131\u011f\u0131ndan servis olu\u015fturulamad\u0131",retrieveExistingLayerError:"{0} geri al\u0131namad\u0131. L\u00fctfen ba\u015fka bir katman ad\u0131 kullanarak yay\u0131nlay\u0131n",publishToNewLayer:"Sonu\u00e7lar\u0131 yeni bir detay katman\u0131na yay\u0131nla",layerNameExists:"Katman ad\u0131 zaten var. L\u00fctfen farkl\u0131 bir katman ad\u0131 kullan\u0131n.",pipeBombLabel:"Boru Bombas\u0131",
suicideBombLabel:"\u0130ntihar Bombas\u0131",briefcaseLabel:"Evrak \u00c7antas\u0131",carLabel:"Araba",suvVanLabel:"SUV/VAN",smallDeliveryTruckLabel:"K\u00fc\u00e7\u00fck Teslimat Kamyonu",containerWaterTruckLabel:"Kapsay\u0131c\u0131/Su Kamyonu",semiTrailerLabel:"Yar\u0131 R\u00f6mork",transparencyLabel:"\u015eeffafl\u0131k",outline:"Ana Hat",fill:"Doldur (Renk sadece stil kat\u0131 olarak ayarland\u0131\u011f\u0131nda uygulan\u0131r)",createBtn:"B\u00f6lgeler Olu\u015ftur",clearBtn:"Temizle",invalidNumberMessage:"Girilen de\u011fer ge\u00e7erli de\u011fil",
invalidRangeMessage:"De\u011fer 0\u2019dan b\u00fcy\u00fck olmal\u0131d\u0131r",parseCoordinatesError:"Koordinatlar ayr\u0131\u015ft\u0131r\u0131lam\u0131yor. L\u00fctfen girdinizi kontrol edin.",manualCoordinateInputInfo:"Koordinatlar\u0131 manuel olarak girin ve yak\u0131nla\u015ft\u0131rmak i\u00e7in \x3cb\x3eEnter\x3c/b\x3e\u2019a bas\u0131n",selectDrawModeLabel:"\u00c7izim Modunu Se\u00e7",selectFeatureLabel:"Bu Katmandan Detay Se\u00e7",fireBallDiameterLable:"Ate\u015f Topu \u00c7ap\u0131",
lpgSafeDistanceLable:"G\u00fcvenlik Mesafesi",threatTypeCatagoryLabel:"Tehdit T\u00fcr\u00fc Kategorisi",fireballButtonLabel:"Ate\u015f Topu \u00c7ap\u0131 Ayarlar\u0131n\u0131 Yap\u0131land\u0131r",safeDistanceButtonLabel:"G\u00fcvenlik Mesafesi Ayarlar\u0131n\u0131 Yap\u0131land\u0131r",chemicalThreatCatagoryLabel:"Kimyasal",lpgThreatCatagoryLabel:"S\u0131v\u0131la\u015ft\u0131r\u0131lm\u0131\u015f Petrol Gaz\u0131",chemicalThreatLabel:"Kimyasal Tehdit",lpgThreatLabel:"LPG Tehdidi",fireBallDiameterFieldAlias:"LPG Ate\u015f Topu \u00c7ap\u0131",
lpgSafeDistanceFieldAlias:"LPG G\u00fcvenlik Mesafesi",smallLPGTank:"K\u00fc\u00e7\u00fck LPG Deposu",largeLPGTank:"B\u00fcy\u00fck LPG Deposu",commercialResidentialLPGTank:"Ticari/Konutsal LPG Deposu",smallLPGTruck:"K\u00fc\u00e7\u00fck LPG Kamyonu",semiTankerLPG:"Yar\u0131 Depo LPG",_localized:{}}});