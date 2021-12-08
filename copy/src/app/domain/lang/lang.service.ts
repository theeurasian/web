import { Injectable } from '@angular/core';
import {WSCmd} from '../websocket/structure/wscmd';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  language = 'eu';
  constructor() {
    //this.language = 'kz';
    console.log(location.href);
    if (location.href.includes('theurasian.eu')){
      this.language = 'eu';
    }
    if (location.href.includes('theurasian.uk')){
      this.language = 'uk';
    }
    if (location.href.includes('xn--80adikfagbh9cp.xn--p1ai')){
      this.language = 'ru';
    }
    if (location.href.includes('theurasian.es')){
      this.language = 'es';
    }
    if (location.href.includes('theurasian.fr')){
      this.language = 'fr';
    }
    if (location.href.includes('theurasian.in')){
      this.language = 'in';
    }
    if (location.href.includes('theurasian.ir')){
      this.language = 'ir';
    }
    if (location.href.includes('theurasian.id')){
      this.language = 'id';
    }
    if (location.href.includes('theurasian.it')){
      this.language = 'it';
    }
    if (location.href.includes('theurasian.qa')){
      this.language = 'qa';
    }
    if (location.href.includes('theurasian.kz')){
      this.language = 'kz';
    }
    if (location.href.includes('theurasian.kr')){
      this.language = 'kr';
    }
    if (location.href.includes('theurasian.mn')){
      this.language = 'mn';
    }
    if (location.href.includes('theurasian.vn')){
      this.language = 'vn';
    }
    if (location.href.includes('theurasian.cn')){
      this.language = 'cn';
    }
    if (location.href.includes('theurasian.cn')){
      this.language = 'cn';
    }
    if (location.href.includes('theurasian.pk')){
      this.language = 'pk';
    }
    if (location.href.includes('theurasian.de')){
      this.language = 'de';
    }
    console.log(this.language);
  }
  tr(input: string){
    switch (this.getLang()) {
      case 'en':
        switch (input) {
          default: return input;
        }
      case 'ru':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return 'Адрес редакции РК: 010000, Республика Казахстан, г. Нур-Султан, ул. Есенберлина, д. 25, каб. 220, тел. +7 (7172) 38 14 21';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'Адрес редакции: 123112, Москва-Сити, а/ я № 82, Российская Федерация, г. Москва, Пресненская набережная, д.8, стр. 1, Бизнес Центр «Город Столиц», тел. 8 (800) 300 81 18';
          case 'Feels like': return 'По ощущениям:';
          case 'Wind': return 'Ветер';

          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '010000, Республика Казахстан, г. Нур-Султан, ул. Есенберлина, 25';
          case 'Phone: 8 (800) 300 81 18': return 'Тел. 8 (800) 300 81 18';
          case 'OFFICIAL DATA ONLY': return 'ТОЛЬКО ОФИЦИАЛЬНЫЕ ДАННЫЕ';
          case 'News articles. Write an entire article or a succinct blog post.': return 'Новостные статьи. Напишите целую статью или лаконичную публикацию в блоге.';
          case 'ASK QUESTIONS': return 'ЗАДАВАЙТЕ ВОПРОСЫ';
          case 'Ask questions, set topics for disputes and online meetings.': return 'Задавайте вопросы, назначайте темы диспутов и онлайн встреч.';
          case 'CONTACT US': return 'СВЯЖИТЕСЬ С НАМИ';
          case 'CONTACTS:': return 'КОНТАКТЫ:';
          case '123112 PO Box No. 82, Moscow, Presnenskaya embankment, 8, building 1': return '123112 а/я №82, Москва, Пресненская набережная, дом 8, строение 1';
          case 'Phone 8 (800) 300 81 18': return 'Тел. 8 (800) 300 81 18';
          case 'Requisites:': return 'Реквизиты:';
          case 'Mass media registration certificate:': return 'Свидетельство о регистрации СМИ:';
          case 'view': return 'открыть';
          case 'Certificate of the Union Eurasia-Russia magazine:': return 'Свидетельство журнала Союз Евразия- Россия:';
          case 'EDITORIAL ADDRESSES:': return 'АДРЕСА РЕДАКЦИЙ:';
          case 'In Russian federation:': return 'В Российской Федерации:';
          case '123112, PO Box No. 82, Russian Federation, Moscow, Presnenskaya embankment, 8, bldg. 1, Business Center "City of Capitals"': return '123112, а/ я № 82, Российская Федерация, г. Москва, Пресненская набережная, д.8, стр. 1, Бизнес Центр «Город Столиц»';
          case 'Phone +7 (7172) 38 14 21': return 'Тел. +7 (7172) 38 14 21';
          case 'In the Republic of Kazakhstan:': return 'В Республике Казахстан:';
          case 'FOUNDERS:': return 'УЧРЕДИТЕЛИ:';
          case 'LLC "CCC", 123007. Moscow, 2nd Horoshevsky prospect, 9, building 2, office 103': return 'ТОО «ООО», 123007. г. Москва, 2-й Хорошевский пр-д, д.9, к. 2, оф.103';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return 'АО «Финансовая Академия», 010000, Республика Казахстан, г. Нур-Султан, ул. Есенберлина, д. 25';
          case 'Media Testimonies': return 'Свидетельства СМИ';

          default: return input;
        }
      }
      case 'es':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return 'Dirección de la editorial: CP123112, Moscú-City, а/ p n.º 82, Federación Rusa, Moscú, c/ Presnenskaya naberezhnaya,.8, edif. 1, Centro de Negocios «Gorod Stolits», Tel.: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'Dirección de la editorial en la República de Kazajistán: c/Esenberlina, 25, of. 220, CP010000 Nur-Sultan, República de Kazajistán. Tel.: +7 (7172) 38 14 21';

          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '010000, República de Kazajstán, Nur-Sultan, st. Esenberlin, 25 años';
          case 'Phone: 8 (800) 300 81 18': return 'Antecedentes: 8 (800) 300 81 18';
          case 'OFFICIAL DATA ONLY': return 'SOLO DATOS OFICIALES';
          case 'News articles. Write an entire article or a succinct blog post.': return 'Artículos de noticias. Escribe un artículo completo o una entrada de blog sucinta.';
          case 'ASK QUESTIONS': return 'HACER PREGUNTAS';
          case 'Ask questions, set topics for disputes and online meetings.': return 'Haga preguntas, establezca temas para disputas y reuniones en línea.';
          case 'CONTACT US': return 'CONTÁCTENOS';
          case 'CONTACTS:': return 'CONTACTOS:';
          case '123112 PO Box No. 82, Moscow, Presnenskaya embankment, 8, building 1': return '123112 Apartado de correos No. 82, Moscú, terraplén de Presnenskaya, 8, edificio 1';
          case 'Phone 8 (800) 300 81 18': return 'Teléfono 8 (800) 300 81 18';
          case 'Requisites:': return 'Requisitos:';
          case 'Mass media registration certificate:': return 'Certificado de registro de medios de comunicación masiva:';
          case 'view': return 'vista';
          case 'Certificate of the Union Eurasia-Russia magazine:': return 'Certificado de la revista Unión Eurasia-Rusia:';
          case 'EDITORIAL ADDRESSES:': return 'DIRECCIONES EDITORIALES:';
          case 'In Russian federation:': return 'En la federación rusa:';
          case '123112, PO Box No. 82, Russian Federation, Moscow, Presnenskaya embankment, 8, bldg. 1, Business Center "City of Capitals"': return '123112, PO Box No. 82, Federación de Rusia, Moscú, terraplén de Presnenskaya, 8, edif. 1, centro de negocios "Ciudad de las capitales"';
          case 'Phone +7 (7172) 38 14 21': return 'Teléfono +7 (7172) 38 14 21';
          case 'In the Republic of Kazakhstan:': return 'En la República de Kazajstán:';
          case 'FOUNDERS:': return 'FUNDADORES:';
          case 'LLC "CCC", 123007. Moscow, 2nd Horoshevsky prospect, 9, building 2, office 103': return 'LLC "CCC", 123007. Moscú, segundo prospecto Horoshevsky, 9, edificio 2, oficina 103';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return 'JSC "Financial Academy", 010000, República de Kazajstán, Nur-Sultan, st. Esenberlina, 25 años';
          case 'Media Testimonies': return 'Testimonios en los medios';

          default: return input;
        }
      }
      case 'fr':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return 'Adresse du bureau éditorial : 8 Presnenskaya naberezhnaya, bldg. 1, Centre d\'affaires Gorod Stolitz, B.P. Box 82, Moscow City, Moscou, 123112, Fédération de Russie ; Téléphone : 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'Adresse du bureau éditorial en République du Kazakhstan : 25, rue Esenberlina, AIFC, Nur-Sultan, 010000, République du Kazakhstan ; Téléphone : +7 (7172) 38 14 21';

          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '010000, République du Kazakhstan, Nur-Sultan, st. Esenberlina, 25 ans';
          case 'Phone: 8 (800) 300 81 18': return 'Téléphone : 8 (800) 300 81 18';
          case 'OFFICIAL DATA ONLY': return 'DONNÉES OFFICIELLES UNIQUEMENT';
          case 'News articles. Write an entire article or a succinct blog post.': return 'Articles de presse. Écrivez un article entier ou un article de blog succinct.';
          case 'ASK QUESTIONS': return 'POSER DES QUESTIONS';
          case 'Ask questions, set topics for disputes and online meetings.': return 'Posez des questions, définissez des sujets pour les litiges et les réunions en ligne.';
          case 'CONTACT US': return 'NOUS CONTACTER';
          case 'CONTACTS:': return 'CONTACTS:';
          case '123112 PO Box No. 82, Moscow, Presnenskaya embankment, 8, building 1': return '123112 BP n° 82, Moscou, quai Presnenskaya, 8, bâtiment 1';
          case 'Phone 8 (800) 300 81 18': return 'Téléphone 8 (800) 300 81 18';
          case 'Requisites:': return 'Conditions requises :';
          case 'Mass media registration certificate:': return 'Certificat d\'inscription aux médias :';
          case 'view': return 'vue';
          case 'Certificate of the Union Eurasia-Russia magazine:': return 'Certificat du magazine Union Eurasie-Russie :';
          case 'EDITORIAL ADDRESSES:': return 'ADRESSES ÉDITORIALES :';
          case 'In Russian federation:': return 'En Fédération de Russie :';
          case '123112, PO Box No. 82, Russian Federation, Moscow, Presnenskaya embankment, 8, bldg. 1, Business Center "City of Capitals"': return '123112, PO Box No. 82, Fédération de Russie, Moscou, quai Presnenskaya, 8, bldg. 1, Centre d\'affaires "Ville des Capitales"';
          case 'Phone +7 (7172) 38 14 21': return 'Téléphone +7 (7172) 38 14 21';
          case 'In the Republic of Kazakhstan:': return 'En République du Kazakhstan :';
          case 'FOUNDERS:': return 'FONDATEURS :';
          case 'LLC "CCC", 123007. Moscow, 2nd Horoshevsky prospect, 9, building 2, office 103': return 'LLC "CCC", 123007. Moscou, 2e perspective Horoshevsky, 9, bâtiment 2, bureau 103';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return 'JSC "Académie financière", 010000, République du Kazakhstan, Nur-Sultan, st. Esenberlina, 25 ans';
          case 'Media Testimonies': return 'Témoignages des médias';
          default: return input;
        }
      }
      case 'in':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return 'संपादकीय कार्यालय का पता: 8 प्रेस्नेंस्काया नबेरेज़्नाया, भवन। 1, गोरोद स्टोलिट्ज़ बिजनेस सेंटर, पी.ओ. बॉक्स 82, मॉस्को सिटी, मॉस्को, 123112, रूसी संघ; टेलीफोन: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'कजाकिस्तान गणराज्य में संपादकीय कार्यालय का पता: 25 एसेनबरलीना स्ट्रीट, एआईएफसी, नूर-सुल्तान, 010000, कजाकिस्तान गणराज्य; टेलीफोन: +7 (7172) 38 14 21';

          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '010000, कजाकिस्तान गणराज्य, नूर-सुल्तान, सेंट। एसेनबरलीना, २५';
          case 'Phone: 8 (800) 300 81 18': return 'फोन: 8 (800) 300 81 18';
          case 'OFFICIAL DATA ONLY': return 'केवल आधिकारिक डेटा';
          case 'News articles. Write an entire article or a succinct blog post.': return 'समाचार लेख। एक संपूर्ण लेख या एक संक्षिप्त ब्लॉग पोस्ट लिखें।';
          case 'ASK QUESTIONS': return 'सवाल पूछो';
          case 'Ask questions, set topics for disputes and online meetings.': return 'प्रश्न पूछें, विवादों और ऑनलाइन बैठकों के लिए विषय निर्धारित करें।';
          case 'CONTACT US': return 'संपर्क करें';
          case 'CONTACTS:': return 'संपर्क:';
          case '123112 PO Box No. 82, Moscow, Presnenskaya embankment, 8, building 1': return '123112 पीओ बॉक्स नंबर 82, मॉस्को, प्रेस्नेन्सकाया तटबंध, 8, भवन 1';
          case 'Phone 8 (800) 300 81 18': return 'फोन 8 (800) 300 81 18';
          case 'Requisites:': return 'आवश्यकताएँ:';
          case 'Mass media registration certificate:': return 'मास मीडिया पंजीकरण प्रमाणपत्र:';
          case 'view': return 'दृश्य';
          case 'Certificate of the Union Eurasia-Russia magazine:': return 'संघ यूरेशिया-रूस पत्रिका का प्रमाण पत्र:';
          case 'EDITORIAL ADDRESSES:': return 'संपादकीय पते:';
          case 'In Russian federation:': return 'रूसी संघ में:';
          case '123112, PO Box No. 82, Russian Federation, Moscow, Presnenskaya embankment, 8, bldg. 1, Business Center "City of Capitals"': return '123112, पीओ बॉक्स नंबर 82, रूसी संघ, मॉस्को, प्रेस्नेंस्काया तटबंध, 8, भवन। 1, व्यापार केंद्र "राजधानियों का शहर"';
          case 'Phone +7 (7172) 38 14 21': return 'फोन +7 (7172) 38 14 21';
          case 'In the Republic of Kazakhstan:': return 'कजाकिस्तान गणराज्य में:';
          case 'FOUNDERS:': return 'संस्थापक:';
          case 'LLC "CCC", 123007. Moscow, 2nd Horoshevsky prospect, 9, building 2, office 103': return 'एलएलसी "सीसीसी", 123007। मॉस्को, दूसरा होरोशेव्स्की संभावना, 9, भवन 2, कार्यालय 103';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return 'जेएससी "वित्तीय अकादमी", 010000, कजाकिस्तान गणराज्य, नूर-सुल्तान, सेंट। एसेनबरलीना, २५';
          case 'Media Testimonies': return 'मीडिया गवाही';
          default: return input;
        }
      }
      case 'ir':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return '';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return '';

          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '';
          case 'Phone: 8 (800) 300 81 18': return '';
          case 'OFFICIAL DATA ONLY': return '';
          case 'News articles. Write an entire article or a succinct blog post.': return '';
          case 'ASK QUESTIONS': return '';
          case 'Ask questions, set topics for disputes and online meetings.': return '';
          case 'CONTACT US': return '';
          case 'CONTACTS:': return '';
          case '123112 PO Box No. 82, Moscow, Presnenskaya embankment, 8, building 1': return '';
          case 'Phone 8 (800) 300 81 18': return '';
          case 'Requisites:': return '';
          case 'Mass media registration certificate:': return '';
          case 'view': return '';
          case 'Certificate of the Union Eurasia-Russia magazine:': return '';
          case 'EDITORIAL ADDRESSES:': return '';
          case 'In Russian federation:': return '';
          case '123112, PO Box No. 82, Russian Federation, Moscow, Presnenskaya embankment, 8, bldg. 1, Business Center "City of Capitals"': return '';
          case 'Phone +7 (7172) 38 14 21': return '';
          case 'In the Republic of Kazakhstan:': return '';
          case 'FOUNDERS:': return '';
          case 'LLC "CCC", 123007. Moscow, 2nd Horoshevsky prospect, 9, building 2, office 103': return '';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '';
          case 'Media Testimonies': return '';
          default: return input;
        }
      }
      case 'id':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21';

          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '010000 ، جمهوری قزاقستان ، نور سلطان ، خ. اسنبرلینا ، 25 ساله';
          case 'Phone: 8 (800) 300 81 18': return 'تلفن: 8 (800) 300 81 18';
          case 'OFFICIAL DATA ONLY': return 'فقط داده های رسمی';
          case 'News articles. Write an entire article or a succinct blog post.': return 'مقالات خبری. یک مقاله کامل یا یک پست وبلاگ مختصر بنویسید.';
          case 'ASK QUESTIONS': return 'سوالات خود را بپرسید';
          case 'Ask questions, set topics for disputes and online meetings.': return 'سوال بپرسید، موضوعاتی را برای اختلافات و جلسات آنلاین تنظیم کنید.';
          case 'CONTACT US': return 'با ما تماس بگیرید';
          case 'CONTACTS:': return 'مخاطب:';
          case '123112 PO Box No. 82, Moscow, Presnenskaya embankment, 8, building 1': return '123112 صندوق پستی شماره 82 ، مسکو ، خاکریز Presnenskaya ، 8 ، ساختمان 1';
          case 'Phone 8 (800) 300 81 18': return 'تلفن 8 (800) 300 81 18';
          case 'Requisites:': return 'ملزومات:';
          case 'Mass media registration certificate:': return 'گواهی ثبت نام رسانه های جمعی:';
          case 'view': return 'چشم انداز';
          case 'Certificate of the Union Eurasia-Russia magazine:': return 'گواهی مجله اتحادیه اوراسیا-روسیه:';
          case 'EDITORIAL ADDRESSES:': return 'آدرس های تحریریه:';
          case 'In Russian federation:': return 'در فدراسیون روسیه:';
          case '123112, PO Box No. 82, Russian Federation, Moscow, Presnenskaya embankment, 8, bldg. 1, Business Center "City of Capitals"': return '123112 ، صندوق پستی شماره 82 ، فدراسیون روسیه ، مسکو ، خاکریز Presnenskaya';
          case 'Phone +7 (7172) 38 14 21': return 'تلفن +7 (7172) 38 14 21';
          case 'In the Republic of Kazakhstan:': return 'در جمهوری قزاقستان:';
          case 'FOUNDERS:': return 'بنیانگذاران:';
          case 'LLC "CCC", 123007. Moscow, 2nd Horoshevsky prospect, 9, building 2, office 103': return 'LLC "CCC"، 123007. مسکو، چشم انداز 2 هوروشفسکی، 9، ساختمان 2، دفتر 103';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return 'LLC "CCC"، 123007. مسکو، چشم انداز 2 هوروشفسکی، 9، ساختمان 2، دفتر 103';
          case 'Media Testimonies': return 'شهادت های رسانه ای';
          default: return input;
        }
      }
      case 'it':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return 'Indirizzo della redazione: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Mosca, 123112, Federazione Russa; Telefono: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'Indirizzo della Redazione nella Repubblica del Kazakistan: via Esenberlina 25, AIFC, Nur-Sultan, 010000, Repubblica del Kazakistan; Telefono: +7 (7172) 38 14 21';

          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '010000, Repubblica del Kazakistan, Nur-Sultan, st. Esenberlina, 25';
          case 'Phone: 8 (800) 300 81 18': return 'Telefono: 8 (800) 300 81 18';
          case 'OFFICIAL DATA ONLY': return 'SOLO DATI UFFICIALI';
          case 'News articles. Write an entire article or a succinct blog post.': return 'Articoli di notizie. Scrivi un intero articolo o un breve post sul blog.';
          case 'ASK QUESTIONS': return 'FARE DOMANDE';
          case 'Ask questions, set topics for disputes and online meetings.': return 'Fai domande, imposta argomenti per controversie e riunioni online.';
          case 'CONTACT US': return 'CONTATTACI';
          case 'CONTACTS:': return 'CONTATTI:';
          case '123112 PO Box No. 82, Moscow, Presnenskaya embankment, 8, building 1': return '123112 Casella postale n. 82, Mosca, terrapieno Presnenskaya, 8, edificio 1';
          case 'Phone 8 (800) 300 81 18': return 'Telefono 8 (800) 300 81 18';
          case 'Requisites:': return 'Requisiti:';
          case 'Mass media registration certificate:': return 'Certificato di registrazione dei mass media:';
          case 'view': return 'Visualizza';
          case 'Certificate of the Union Eurasia-Russia magazine:': return 'Certificato della rivista Union Eurasia-Russia:';
          case 'EDITORIAL ADDRESSES:': return 'INDIRIZZI REDAZIONALI:';
          case 'In Russian federation:': return 'Nella Federazione Russa:';
          case '123112, PO Box No. 82, Russian Federation, Moscow, Presnenskaya embankment, 8, bldg. 1, Business Center "City of Capitals"': return '123112, casella postale n. 82, Federazione Russa, Mosca, argine Presnenskaya, 8, edificio. 1, Centro Direzionale "Città dei Capitali"';
          case 'Phone +7 (7172) 38 14 21': return 'Telefono +7 (7172) 38 14 21';
          case 'In the Republic of Kazakhstan:': return 'Nella Repubblica del Kazakistan:';
          case 'FOUNDERS:': return 'FONDATORI:';
          case 'LLC "CCC", 123007. Moscow, 2nd Horoshevsky prospect, 9, building 2, office 103': return 'LLC "CCC", 123007. Mosca, 2a prospettiva Horoshevsky, 9, edificio 2, ufficio 103';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return 'JSC "Accademia finanziaria", 010000, Repubblica del Kazakistan, Nur-Sultan, st. Esenberlina, 25';
          case 'Media Testimonies': return 'Testimonianze dei media';
          default: return input;
        }
      }
      case 'qa':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return 'عنوان مكتب التحرير: 8 Presnenskaya naberezhnaya، bldg. 1 ، مركز أعمال جورود ستوليتز ، ص. Box 82، Moscow City، Moscow، 123112، روسيا الاتحادية ؛ هاتف: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'عنوان مكتب التحرير في جمهورية كازاخستان: 25 Esenberlina street، AIFC، Nur-Sultan، 010000، Republic of Kazakhstan؛ هاتف: +7 (7172) 38 14 21';

          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '010000 جمهورية كازاخستان نور سلطان شارع. Esenberlina ، 25';
          case 'Phone: 8 (800) 300 81 18': return 'الهاتف: 8 (800) 300 81 18';
          case 'OFFICIAL DATA ONLY': return 'البيانات الرسمية فقط';
          case 'News articles. Write an entire article or a succinct blog post.': return 'مقالات إخبارية. اكتب مقالة كاملة أو مشاركة مدونة موجزة.';
          case 'ASK QUESTIONS': return 'اسال اسئلة';
          case 'Ask questions, set topics for disputes and online meetings.': return 'اطرح الأسئلة وحدد الموضوعات للنزاعات والاجتماعات عبر الإنترنت.';
          case 'CONTACT US': return 'اتصل بنا';
          case 'CONTACTS:': return 'جهات الاتصال:';
          case '123112 PO Box No. 82, Moscow, Presnenskaya embankment, 8, building 1': return '123112 PO Box No. 82، Moscow، Presnenskaya embankment، 8، building 1';
          case 'Phone 8 (800) 300 81 18': return 'الهاتف 8 (800) 300 81 18';
          case 'Requisites:': return 'المتطلبات:';
          case 'Mass media registration certificate:': return 'شهادة تسجيل وسائل الإعلام:';
          case 'view': return 'عرض';
          case 'Certificate of the Union Eurasia-Russia magazine:': return 'شهادة مجلة اتحاد أوراسيا وروسيا:';
          case 'EDITORIAL ADDRESSES:': return 'عناوين التحرير:';
          case 'In Russian federation:': return 'في الاتحاد الروسي:';
          case '123112, PO Box No. 82, Russian Federation, Moscow, Presnenskaya embankment, 8, bldg. 1, Business Center "City of Capitals"': return '123112، PO Box No. 82، Russian Federation، Moscow، Presnenskaya embankment، 8، bldg. 1 ، مركز الأعمال "مدينة العواصم"';
          case 'Phone +7 (7172) 38 14 21': return 'هاتف +7 (7172) 38 14 21';
          case 'In the Republic of Kazakhstan:': return 'في جمهورية كازاخستان:';
          case 'FOUNDERS:': return 'المؤسسون:';
          case 'LLC "CCC", 123007. Moscow, 2nd Horoshevsky prospect, 9, building 2, office 103': return 'LLC "CCC" ، 123007. موسكو ، احتمال هوروشيفسكي الثاني ، 9 ، المبنى 2 ، مكتب 103';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return 'JSC "Financial Academy" ، 010000 ، جمهورية كازاخستان ، نور سلطان ، شارع. Esenberlina ، 25';
          case 'Media Testimonies': return 'شهادات وسائل الإعلام';
          default: return input;
        }
      }
      case 'kz':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return 'ҚР редакциясының мекен-жайы: 010000, Қазақстан Республикасы, Нұр-Сұлтан қ., Есенберлин к., 25-үй, каб. 220, тел. +7 (7172) 38 14 21';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'Редакцияның мекенжайы: 123112, Мәскеу-Сити, № 82 а/ ж, Ресей Федерациясы, Мәскеу қ., Пресненская набережная, 8-үй, 1-құр., "Город Столиц" Бизнес Орталығы, тел. 8 (800) 300 81 18';

          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '';
          case 'Phone: 8 (800) 300 81 18': return '';
          case 'OFFICIAL DATA ONLY': return '';
          case 'News articles. Write an entire article or a succinct blog post.': return '';
          case 'ASK QUESTIONS': return '';
          case 'Ask questions, set topics for disputes and online meetings.': return '';
          case 'CONTACT US': return '';
          case 'CONTACTS:': return '';
          case '123112 PO Box No. 82, Moscow, Presnenskaya embankment, 8, building 1': return '';
          case 'Phone 8 (800) 300 81 18': return '';
          case 'Requisites:': return '';
          case 'Mass media registration certificate:': return '';
          case 'view': return '';
          case 'Certificate of the Union Eurasia-Russia magazine:': return '';
          case 'EDITORIAL ADDRESSES:': return '';
          case 'In Russian federation:': return '';
          case '123112, PO Box No. 82, Russian Federation, Moscow, Presnenskaya embankment, 8, bldg. 1, Business Center "City of Capitals"': return '';
          case 'Phone +7 (7172) 38 14 21': return '';
          case 'In the Republic of Kazakhstan:': return '';
          case 'FOUNDERS:': return '';
          case 'LLC "CCC", 123007. Moscow, 2nd Horoshevsky prospect, 9, building 2, office 103': return '';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '';
          case 'Media Testimonies': return '';
          default: return input;
        }
      }
      case 'kr':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return '편집 사무소 주소: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz 비즈니스 센터, P.O. Box 82, Moscow City, Moscow, 123112, 러시아 연방; 전화: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return '카자흐스탄 공화국의 편집 사무소 주소: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; 전화: +7 (7172) 38 14 21';

          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '010000, Қазақстан Республикасы, Нұр-Сұлтан, ул. Есенберлина, 25 жаста';
          case 'Phone: 8 (800) 300 81 18': return 'Телефон: 8 (800) 300 81 18';
          case 'OFFICIAL DATA ONLY': return 'ТЕК РЕСМИ ДЕРЕКТЕР';
          case 'News articles. Write an entire article or a succinct blog post.': return 'Жаңалықтар туралы мақалалар. Толық мақаланы немесе қысқаша блог жазбасын жазыңыз.';
          case 'ASK QUESTIONS': return 'СҰРАҚ ҚОЮ';
          case 'Ask questions, set topics for disputes and online meetings.': return 'Сұрақтар қойыңыз, даулар мен онлайн кездесулер тақырыптарын белгілеңіз.';
          case 'CONTACT US': return 'БІЗБЕН ХАБАРЛАСЫҢЫЗ';
          case 'CONTACTS:': return 'Байланыс:';
          case '123112 PO Box No. 82, Moscow, Presnenskaya embankment, 8, building 1': return '123112 No 82 пошта жәшігі, Мәскеу қаласы, Пресненская жағалауы, 8, 1 корпус';
          case 'Phone 8 (800) 300 81 18': return 'Телефон 8 (800) 300 81 18';
          case 'Requisites:': return 'Реквизиттер:';
          case 'Mass media registration certificate:': return 'БАҚ-ты тіркеу туралы куәлік:';
          case 'view': return 'қарау';
          case 'Certificate of the Union Eurasia-Russia magazine:': return 'Одақ Еуразия-Ресей журналының сертификаты:';
          case 'EDITORIAL ADDRESSES:': return 'РЕДАКЦИЯНЫҢ АДРЕСИ:';
          case 'In Russian federation:': return 'Ресей Федерациясында:';
          case '123112, PO Box No. 82, Russian Federation, Moscow, Presnenskaya embankment, 8, bldg. 1, Business Center "City of Capitals"': return '123112, пошта жәшігі № 82, Ресей Федерациясы, Мәскеу қ., Пресненская жағалауы, 8, бл. 1, «Астаналар қаласы» бизнес орталығы';
          case 'Phone +7 (7172) 38 14 21': return 'Телефон +7 (7172) 38 14 21';
          case 'In the Republic of Kazakhstan:': return 'Қазақстан Республикасында:';
          case 'FOUNDERS:': return 'ҚҰРУШЫЛАР:';
          case 'LLC "CCC", 123007. Moscow, 2nd Horoshevsky prospect, 9, building 2, office 103': return 'ООО «ССК», 123007. Мәскеу, 2-ші Хорошевский даңғылы, 9, 2 корпус, 103 кеңсе';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '«Қаржы академиясы» АҚ, 010000, Қазақстан Республикасы, Нұр-Сұлтан қ., көш. Есенберлина, 25 жаста';
          case 'Media Testimonies': return 'БАҚ айғақтары';
          default: return input;
        }
      }
      case 'mn':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return 'Редакцийн хаяг: Пресненская набережная, 8, байр. 1, Город Столиц бизнесийн төв, P.O. Хайрцаг 82, Москва хот, Москва, 123112, ОХУ; Утас: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'Бүгд Найрамдах Казахстан Улс дахь редакцийн хаяг: 010000, Нурсултан, AIFC, Esenberlina гудамж, 25; Бүгд Найрамдах Казахстан; Утас: +7 (7172) 38 14 21';

          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '';
          case 'Phone: 8 (800) 300 81 18': return '';
          case 'OFFICIAL DATA ONLY': return '';
          case 'News articles. Write an entire article or a succinct blog post.': return '';
          case 'ASK QUESTIONS': return '';
          case 'Ask questions, set topics for disputes and online meetings.': return '';
          case 'CONTACT US': return '';
          case 'CONTACTS:': return '';
          case '123112 PO Box No. 82, Moscow, Presnenskaya embankment, 8, building 1': return '';
          case 'Phone 8 (800) 300 81 18': return '';
          case 'Requisites:': return '';
          case 'Mass media registration certificate:': return '';
          case 'view': return '';
          case 'Certificate of the Union Eurasia-Russia magazine:': return '';
          case 'EDITORIAL ADDRESSES:': return '';
          case 'In Russian federation:': return '';
          case '123112, PO Box No. 82, Russian Federation, Moscow, Presnenskaya embankment, 8, bldg. 1, Business Center "City of Capitals"': return '';
          case 'Phone +7 (7172) 38 14 21': return '';
          case 'In the Republic of Kazakhstan:': return '';
          case 'FOUNDERS:': return '';
          case 'LLC "CCC", 123007. Moscow, 2nd Horoshevsky prospect, 9, building 2, office 103': return '';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '';
          case 'Media Testimonies': return '';
          default: return input;
        }
      }
      case 'vn':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return 'Địa chỉ văn phòng biên tập: 8 Presnenskaya naberezhnaya, bldg. 1, Trung tâm thương mại Gorod Stolitz, P.O. Box 82, Thành phố Matxcova, Matxcova, 123112, Liên bang Nga; Điện thoại: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'Địa chỉ Văn phòng Biên tập tại Cộng hòa Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Điện thoại: +7 (7172) 38 14 21';

          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '010000, Бүгд Найрамдах Казахстан, Нур-Султан, гудамж. Есенберлина, 25 настай';
          case 'Phone: 8 (800) 300 81 18': return 'Утас: 8 (800) 300 81 18';
          case 'OFFICIAL DATA ONLY': return 'ЗӨВХӨН Албан ёсны мэдээлэл';
          case 'News articles. Write an entire article or a succinct blog post.': return 'Мэдээний нийтлэлүүд. Бүхэл бүтэн нийтлэл эсвэл товч блог бичих.';
          case 'ASK QUESTIONS': return 'АСУУЛТ АСУУХ';
          case 'Ask questions, set topics for disputes and online meetings.': return 'Асуулт асууж, маргаан, онлайн уулзалтын сэдвийг тавь.';
          case 'CONTACT US': return 'БИДЭНД ХОЛБОО БАРИХ';
          case 'CONTACTS:': return 'ХОЛБОО БАРИХ:';
          case '123112 PO Box No. 82, Moscow, Presnenskaya embankment, 8, building 1': return '123112 Шуудангийн хайрцаг №82, Москва, Пресненская далан, 8, 1-р байр';
          case 'Phone 8 (800) 300 81 18': return 'Утас 8 (800) 300 81 18';
          case 'Requisites:': return 'Шаардлага:';
          case 'Mass media registration certificate:': return 'Олон нийтийн мэдээллийн хэрэгслийн бүртгэлийн гэрчилгээ:';
          case 'view': return 'харах';
          case 'Certificate of the Union Eurasia-Russia magazine:': return 'Холбооны Еврази-Оросын сэтгүүлийн гэрчилгээ:';
          case 'EDITORIAL ADDRESSES:': return 'РЕДАКЦИОН ХАЯГ:';
          case 'In Russian federation:': return 'ОХУ-д:';
          case '123112, PO Box No. 82, Russian Federation, Moscow, Presnenskaya embankment, 8, bldg. 1, Business Center "City of Capitals"': return '123112, Шуудангийн хайрцаг No82, ОХУ, Москва, Пресненская далан, 8, байр. 1, "Нийслэл хот" бизнесийн төв';
          case 'Phone +7 (7172) 38 14 21': return 'Утас +7 (7172) 38 14 21';
          case 'In the Republic of Kazakhstan:': return 'Бүгд Найрамдах Казахстан улсад:';
          case 'FOUNDERS:': return 'Үүсгэн байгуулагчид:';
          case 'LLC "CCC", 123007. Moscow, 2nd Horoshevsky prospect, 9, building 2, office 103': return 'ХХК "CCC", 123007. Москва, Хорошевскийн 2-р проспект, 9, 2-р байр, оффис 103';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return 'ХК "Санхүүгийн Академи", 010000, Казахстан, Нур-Султан, ст. Эсенберлина, 25 настай';
          case 'Media Testimonies': return 'Хэвлэл мэдээллийн гэрчлэл';
          default: return input;
        }
      }
      case 'zh':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return '编辑部地址：俄罗斯联邦，莫斯科市，莫斯科城，普列斯年斯卡亚沿河街8号1栋，《首都之城》商务中心，邮编123112，邮政信箱82号，电话号码, 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return '哈萨克斯坦共和国编辑部地址：哈萨克斯坦共和国，努尔苏丹市，阿斯塔纳国际金融中心，埃森伯利纳大街25号，邮编010000，电话号码';

          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '';
          case 'Phone: 8 (800) 300 81 18': return '';
          case 'OFFICIAL DATA ONLY': return '';
          case 'News articles. Write an entire article or a succinct blog post.': return '';
          case 'ASK QUESTIONS': return '';
          case 'Ask questions, set topics for disputes and online meetings.': return '';
          case 'CONTACT US': return '';
          case 'CONTACTS:': return '';
          case '123112 PO Box No. 82, Moscow, Presnenskaya embankment, 8, building 1': return '';
          case 'Phone 8 (800) 300 81 18': return '';
          case 'Requisites:': return '';
          case 'Mass media registration certificate:': return '';
          case 'view': return '';
          case 'Certificate of the Union Eurasia-Russia magazine:': return '';
          case 'EDITORIAL ADDRESSES:': return '';
          case 'In Russian federation:': return '';
          case '123112, PO Box No. 82, Russian Federation, Moscow, Presnenskaya embankment, 8, bldg. 1, Business Center "City of Capitals"': return '';
          case 'Phone +7 (7172) 38 14 21': return '';
          case 'In the Republic of Kazakhstan:': return '';
          case 'FOUNDERS:': return '';
          case 'LLC "CCC", 123007. Moscow, 2nd Horoshevsky prospect, 9, building 2, office 103': return '';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '';
          case 'Media Testimonies': return '';
          default: return input;
        }
      }
      case 'pk':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return 'ادارتی دفتر کا پتہ: 8 پریسنسکایا نابریزنیا ، بلڈنگ۔ 1 ، گورود سٹولٹز بزنس سینٹر ، P.O. باکس 82 ، ماسکو سٹی ، ماسکو ، 123112 ، روسی فیڈریشن ٹیلی فون: 8 (800) 300 81 18۔';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'جمہوریہ قازقستان میں ادارتی دفتر کا پتہ: 25 ایسنبرلینا گلی ، اے آئی ایف سی ، نور سلطان ، 010000 ، جمہوریہ قازقستان؛ ٹیلی فون: +7 (7172) 38 14 21۔';

          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '010000, 哈萨克斯坦共和国, Nur-Sultan, st. 埃森贝利娜，25';
          case 'Phone: 8 (800) 300 81 18': return '电话：8 (800) 300 81 18';
          case 'OFFICIAL DATA ONLY': return '仅官方数据';
          case 'News articles. Write an entire article or a succinct blog post.': return '新闻文章。 写整篇文章或简洁的博客文章。';
          case 'ASK QUESTIONS': return '问问题';
          case 'Ask questions, set topics for disputes and online meetings.': return '提出问题，设置争议和在线会议的主题。';
          case 'CONTACT US': return '联系我们';
          case 'CONTACTS:': return '联系人：';
          case '123112 PO Box No. 82, Moscow, Presnenskaya embankment, 8, building 1': return '123112 PO Box No. 82, Moscow, Presnenskaya embankment, 8, building 1';
          case 'Phone 8 (800) 300 81 18': return '电话 8 (800) 300 81 18';
          case 'Requisites:': return '要求：';
          case 'Mass media registration certificate:': return '大众传媒注册证：';
          case 'view': return '看法';
          case 'Certificate of the Union Eurasia-Russia magazine:': return '欧亚-俄罗斯联盟杂志的证书：';
          case 'EDITORIAL ADDRESSES:': return '社论地址：';
          case 'In Russian federation:': return '在俄罗斯联邦：';
          case '123112, PO Box No. 82, Russian Federation, Moscow, Presnenskaya embankment, 8, bldg. 1, Business Center "City of Capitals"': return '123112, PO Box No. 82, Russian Federal, Moscow, Presnenskaya 路堤, 8, bldg. 1、“首都之都”商务中心';
          case 'Phone +7 (7172) 38 14 21': return '电话 +7 (7172) 38 14 21';
          case 'In the Republic of Kazakhstan:': return '在哈萨克斯坦共和国：';
          case 'FOUNDERS:': return '创始人：';
          case 'LLC "CCC", 123007. Moscow, 2nd Horoshevsky prospect, 9, building 2, office 103': return 'LLC "CCC", 123007. 莫斯科, 2nd Horoshevsky 前景, 9, 2 号楼, 办公室 103';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return 'JSC“金融学院”，010000，哈萨克斯坦共和国，努尔苏丹，圣。 埃森贝利娜，25';
          case 'Media Testimonies': return '媒体见证';
          default: return input;
        }
      }
      case 'de':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return 'Adresse der Redaktion: 123112, Moscow-City, Postfach 82, Russische Föderation, Moskau, Presnenskaja-Damm, 8, Gebäude 1, Geschäftszentrum "Gorod Stoliz", Tel. 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'Die Adresse der Redaktion in der RK: 010000, Republik Kasachstan, Nur-Sultan, Esenberlina-Str., 25, Büro 220, tel. +7 (7172) 38 14 21';

          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '010000, Republik Kasachstan, Nur-Sultan, st. Esenberlina, 25';
          case 'Phone: 8 (800) 300 81 18': return 'Telefon: 8 (800) 300 81 18';
          case 'OFFICIAL DATA ONLY': return 'NUR OFFIZIELLE DATEN';
          case 'News articles. Write an entire article or a succinct blog post.': return 'Zeitungsartikel. Schreiben Sie einen ganzen Artikel oder einen prägnanten Blogbeitrag.';
          case 'ASK QUESTIONS': return 'FRAGEN STELLEN';
          case 'Ask questions, set topics for disputes and online meetings.': return 'Stellen Sie Fragen, legen Sie Themen für Streitigkeiten und Online-Meetings fest.';
          case 'CONTACT US': return 'KONTAKTIERE UNS';
          case 'CONTACTS:': return 'KONTAKTE:';
          case '123112 PO Box No. 82, Moscow, Presnenskaya embankment, 8, building 1': return '123112 Postfach Nr. 82, Moskau, Presnenskaja-Damm, 8, Gebäude 1';
          case 'Phone 8 (800) 300 81 18': return 'Telefon 8 (800) 300 81 18';
          case 'Requisites:': return 'Voraussetzungen:';
          case 'Mass media registration certificate:': return 'Registrierungsbescheinigung für Massenmedien:';
          case 'view': return 'Aussicht';
          case 'Certificate of the Union Eurasia-Russia magazine:': return 'Zertifikat der Zeitschrift Union Eurasia-Russia:';
          case 'EDITORIAL ADDRESSES:': return 'REDAKTIONELLE ADRESSEN:';
          case 'In Russian federation:': return 'In der Russischen Föderation:';
          case '123112, PO Box No. 82, Russian Federation, Moscow, Presnenskaya embankment, 8, bldg. 1, Business Center "City of Capitals"': return '123112, Postfach Nr. 82, Russische Föderation, Moskau, Presnenskaja-Damm, 8, Geb. 1, Business Center "Stadt der Hauptstädte"';
          case 'Phone +7 (7172) 38 14 21': return 'Telefon +7 (7172) 38 14 21';
          case 'In the Republic of Kazakhstan:': return 'In der Republik Kasachstan:';
          case 'FOUNDERS:': return 'GRÜNDER:';
          case 'LLC "CCC", 123007. Moscow, 2nd Horoshevsky prospect, 9, building 2, office 103': return 'LLC "CCC", 123007. Moskau, 2. Horoshevsky Prospekt, 9, Gebäude 2, Büro 103';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return 'JSC "Finanzakademie", 010000, Republik Kasachstan, Nur-Sultan, st. Esenberlina, 25';
          case 'Media Testimonies': return 'Medienberichte';
          default: return input;
        }
      }
    }
  }
  getLang(){
    return this.language.replace('eu', 'en').replace('uk', 'en').replace('cn', 'zh');
  }
}
