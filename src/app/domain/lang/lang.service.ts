import { Injectable } from '@angular/core';
import {WSCmd} from '../websocket/structure/wscmd';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  language = 'ru';
  constructor() {
    this.language = 'ru';
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
    if (location.href.includes('theurasian.by')){
      this.language = 'by';
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
          case 'Editorial Office address: 2nd Horoshevsky proezd 9, building 2, office 103, Moscow, 123007, Russian Federation; Telephone: 8 (800) 300 81 18': return 'Адрес редакции: 123007, Российская Федерация, г. Москва, 2-й Хорошевский проезд, дом 9, корпус 2, офис 103, тел. 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'Адрес редакции РК: 010000, Республика Казахстан, г. Нур-Султан, ул. Есенберлина, д. 25, каб. 220, тел. +7 (7172) 38 14 21';
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

          case '123007, Moscow, 2nd Horoshevsky proezd 9, building 2, office 103': return '123007 Москва, 2-й Хорошевский проезд, дом 9, корпус 2, офис 103';
          case 'Phone 8 (800) 300 81 18': return 'Тел. 8 (800) 300 81 18';
          case 'Requisites:': return 'Реквизиты:';
          case 'Mass media registration certificate:': return 'Свидетельство о регистрации СМИ:';
          case 'view': return 'открыть';
          case 'Certificate of the Union Eurasia-Russia magazine:': return 'Свидетельство журнала Союз Евразия- Россия:';
          case 'EDITORIAL ADDRESSES:': return 'АДРЕСА РЕДАКЦИЙ:';
          case 'In Russian federation:': return 'В Российской Федерации:';

          case '123007, Russian Federation, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return '123007, Российская Федерация, г. Москва, 2-й Хорошевский проезд, дом 9, корпус 2, офис 103';
          case 'Phone +7 (7172) 38 14 21': return 'Тел. +7 (7172) 38 14 21';
          case 'In the Republic of Kazakhstan:': return 'В Республике Казахстан:';
          case 'FOUNDERS:': return 'УЧРЕДИТЕЛИ:';

          case 'LLC "SSN", 123007, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return 'ООО «ССС», 123007, г. Москва, 2-й Хорошевский пр-д, д.9, к. 2, оф.103';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return 'АО «Финансовая Академия», 010000, Республика Казахстан, г. Нур-Султан, ул. Есенберлина, д. 25';
          case 'Media Testimonies': return 'Свидетельство СМИ';
          case 'Add New': return 'Добавить';
          case 'Media Kit': return 'Медиакит';
          default: return input;
        }
      }
      case 'by':{
        switch (input) {
          case 'Editorial Office address: 2nd Horoshevsky proezd 9, building 2, office 103, Moscow, 123007, Russian Federation; Telephone: 8 (800) 300 81 18': return 'Адрас рэдакцыі: 2-й Харашэўскі праезд, 9, корпус 2, офіс 103, Масква, 123007, Расійская Федэрацыя; тэлефон: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'Адрас рэдакцыі ў Рэспубліцы Казахстан: 010000, Рэспубліка Казахстан, МФЦА, вул. Эсенберліна, 25; Тэлефон: +7 (7172) 38 14 21';
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

          case '123007, Moscow, 2nd Horoshevsky proezd 9, building 2, office 103': return '123007 Масква, 2-й Харашэўскі праезд, 9, корпус 2, офіс 103';
          case 'Phone 8 (800) 300 81 18': return 'Тел. 8 (800) 300 81 18';
          case 'Requisites:': return 'Реквизиты:';
          case 'Mass media registration certificate:': return 'Свидетельство о регистрации СМИ:';
          case 'view': return 'открыть';
          case 'Certificate of the Union Eurasia-Russia magazine:': return 'Свидетельство журнала Союз Евразия- Россия:';
          case 'EDITORIAL ADDRESSES:': return 'АДРЕСА РЕДАКЦИЙ:';
          case 'In Russian federation:': return 'В Российской Федерации:';

          case '123007, Russian Federation, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return '123007, Расійская Федэрацыя, Масква, 2-й Харашэўскі праезд, 9, корпус 2, офіс 103';
          case 'Phone +7 (7172) 38 14 21': return 'Тел. +7 (7172) 38 14 21';
          case 'In the Republic of Kazakhstan:': return 'В Республике Казахстан:';
          case 'FOUNDERS:': return 'УЧРЕДИТЕЛИ:';

          case 'LLC "SSN", 123007, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return 'ТАА «ССС», 123007, г. Масква, 2-й Харашэўскі праезд, 9, корпус 2, офіс 103';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return 'АО «Финансовая Академия», 010000, Республика Казахстан, г. Нур-Султан, ул. Есенберлина, д. 25';
          case 'Media Testimonies': return 'Свидетельство СМИ';
          case 'Add New': return 'Добавить';
          case 'Media Kit': return 'Медиакит';
          default: return input;
        }
      }
      case 'es':{
        switch (input) {
          case 'Editorial Office address: 2nd Horoshevsky proezd 9, building 2, office 103, Moscow, 123007, Russian Federation; Telephone: 8 (800) 300 81 18': return 'Dirección de la editorial: 2da Khoroshevsky proezd 9, edificio 2, oficina 103, Moscú, 123007, Federación de Rusia; Teléfono: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'Dirección de la editorial en la República de Kazajistán: c/Esenberlina, 25, of. 220, CP010000 Nur-Sultan, República de Kazajistán. Tel.: +7 (7172) 38 14 21';
          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '010000, República de Kazajstán, Nur-Sultan, st. Esenberlin, 25 años';
          case 'Phone: 8 (800) 300 81 18': return 'Antecedentes: 8 (800) 300 81 18';
          case 'OFFICIAL DATA ONLY': return 'SOLO DATOS OFICIALES';
          case 'News articles. Write an entire article or a succinct blog post.': return 'Artículos de noticias. Escribe un artículo completo o una entrada de blog sucinta.';
          case 'ASK QUESTIONS': return 'HACER PREGUNTAS';
          case 'Ask questions, set topics for disputes and online meetings.': return 'Haga preguntas, establezca temas para disputas y reuniones en línea.';
          case 'CONTACT US': return 'CONTÁCTENOS';
          case 'CONTACTS:': return 'CONTACTOS:';

          case '123007, Moscow, 2nd Horoshevsky proezd 9, building 2, office 103': return '123007 Moscú, 2da Khoroshevsky proezd 9, edificio 2, oficina 103';
          case 'Phone 8 (800) 300 81 18': return 'Teléfono 8 (800) 300 81 18';
          case 'Requisites:': return 'Requisitos:';
          case 'Mass media registration certificate:': return 'Certificado de registro de medios de comunicación masiva:';
          case 'view': return 'vista';
          case 'Certificate of the Union Eurasia-Russia magazine:': return 'Certificado de la revista Unión Eurasia-Rusia:';
          case 'EDITORIAL ADDRESSES:': return 'DIRECCIONES EDITORIALES:';
          case 'In Russian federation:': return 'En la federación rusa:';

          case '123007, Russian Federation, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return '123007, Federación de Rusia, Moscú, 2da Khoroshevsky proezd 9, edificio 2, oficina 103';
          case 'Phone +7 (7172) 38 14 21': return 'Teléfono +7 (7172) 38 14 21';
          case 'In the Republic of Kazakhstan:': return 'En la República de Kazajstán:';
          case 'FOUNDERS:': return 'FUNDADORES:';

          case 'LLC "SSN", 123007, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return 'LLC "SSN", 123007, Moscú, 2da Khoroshevsky proezd 9, edificio 2, oficina 103';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return 'JSC "Financial Academy", 010000, República de Kazajstán, Nur-Sultan, st. Esenberlina, 25 años';
          case 'Media Testimonies': return 'Testimonios en los medios';
          case 'Add New': return 'Agregar nueva';
          case 'Media Kit': return 'Kit de medios';
          default: return input;
        }
      }
      case 'fr':{
        switch (input) {
          case 'Editorial Office address: 2nd Horoshevsky proezd 9, building 2, office 103, Moscow, 123007, Russian Federation; Telephone: 8 (800) 300 81 18': return 'Adresse du bureau éditorial : 2e Khoroshevsky proezd 9, bâtiment 2, bureau 103, Moscou, 123007, Fédération de Russie; Téléphone: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'Adresse du bureau éditorial en République du Kazakhstan : 25, rue Esenberlina, AIFC, Nur-Sultan, 010000, République du Kazakhstan ; Téléphone : +7 (7172) 38 14 21';

          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '010000, République du Kazakhstan, Nur-Sultan, st. Esenberlina, 25 ans';
          case 'Phone: 8 (800) 300 81 18': return 'Téléphone : 8 (800) 300 81 18';
          case 'OFFICIAL DATA ONLY': return 'DONNÉES OFFICIELLES UNIQUEMENT';
          case 'News articles. Write an entire article or a succinct blog post.': return 'Articles de presse. Écrivez un article entier ou un article de blog succinct.';
          case 'ASK QUESTIONS': return 'POSER DES QUESTIONS';
          case 'Ask questions, set topics for disputes and online meetings.': return 'Posez des questions, définissez des sujets pour les litiges et les réunions en ligne.';
          case 'CONTACT US': return 'NOUS CONTACTER';
          case 'CONTACTS:': return 'CONTACTS:';

          case '123007, Moscow, 2nd Horoshevsky proezd 9, building 2, office 103': return '123007 Moscou, 2e Khoroshevsky proezd 9, bâtiment 2, bureau 103';
          case 'Phone 8 (800) 300 81 18': return 'Téléphone 8 (800) 300 81 18';
          case 'Requisites:': return 'Conditions requises:';
          case 'Mass media registration certificate:': return 'Certificat d\'inscription aux médias:';
          case 'view': return 'vue';
          case 'Certificate of the Union Eurasia-Russia magazine:': return 'Certificat du magazine Union Eurasie-Russie :';
          case 'EDITORIAL ADDRESSES:': return 'ADRESSES ÉDITORIALES:';
          case 'In Russian federation:': return 'En Fédération de Russie :';

          case '123007, Russian Federation, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return '123007, Fédération de Russie, Moscou, 2e Khoroshevsky proezd 9, bâtiment 2, bureau 103';
          case 'Phone +7 (7172) 38 14 21': return 'Téléphone +7 (7172) 38 14 21';
          case 'In the Republic of Kazakhstan:': return 'En République du Kazakhstan :';
          case 'FOUNDERS:': return 'FONDATEURS:';

          case 'LLC "SSN", 123007, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return 'LLC "SSN", 123007, Moscou, 2e Khoroshevsky proezd 9, bâtiment 2, bureau 103';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return 'JSC "Académie financière", 010000, République du Kazakhstan, Nur-Sultan, st. Esenberlina, 25 ans';
          case 'Media Testimonies': return 'Témoignages des médias';
          case 'Add New': return 'Ajouter un nouveau';
          case 'Media Kit': return 'Dossier de presse';
          default: return input;
        }
      }
      case 'in':{
        switch (input) {
          case 'Editorial Office address: 2nd Horoshevsky proezd 9, building 2, office 103, Moscow, 123007, Russian Federation; Telephone: 8 (800) 300 81 18': return 'संपादकीय कार्यालय का पता: 2 खोरोशेव्हस्की प्रोझड 9, इमारत 2, कार्यालय 103, मॉस्को, 123007, रशियन फेडरेशन; टेलिफोन: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'कजाकिस्तान गणराज्य में संपादकीय कार्यालय का पता: 25 एसेनबरलीना स्ट्रीट, एआईएफसी, नूर-सुल्तान, 010000, कजाकिस्तान गणराज्य; टेलीफोन: +7 (7172) 38 14 21';

          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '010000, कजाकिस्तान गणराज्य, नूर-सुल्तान, सेंट। एसेनबरलीना, २५';
          case 'Phone: 8 (800) 300 81 18': return 'फोन: 8 (800) 300 81 18';
          case 'OFFICIAL DATA ONLY': return 'केवल आधिकारिक डेटा';
          case 'News articles. Write an entire article or a succinct blog post.': return 'समाचार लेख। एक संपूर्ण लेख या एक संक्षिप्त ब्लॉग पोस्ट लिखें।';
          case 'ASK QUESTIONS': return 'सवाल पूछो';
          case 'Ask questions, set topics for disputes and online meetings.': return 'प्रश्न पूछें, विवादों और ऑनलाइन बैठकों के लिए विषय निर्धारित करें।';
          case 'CONTACT US': return 'संपर्क करें';
          case 'CONTACTS:': return 'संपर्क:';

          case '123007, Moscow, 2nd Horoshevsky proezd 9, building 2, office 103': return '123007, मॉस्को, 2 खोरोशेव्ह्स्की प्रोझ्ड 9, इमारत 2, कार्यालय 103';
          case 'Phone 8 (800) 300 81 18': return 'फोन 8 (800) 300 81 18';
          case 'Requisites:': return 'आवश्यकताएँ:';
          case 'Mass media registration certificate:': return 'मास मीडिया पंजीकरण प्रमाणपत्र:';
          case 'view': return 'दृश्य';
          case 'Certificate of the Union Eurasia-Russia magazine:': return 'संघ यूरेशिया-रूस पत्रिका का प्रमाण पत्र:';
          case 'EDITORIAL ADDRESSES:': return 'संपादकीय पते:';
          case 'In Russian federation:': return 'रूसी संघ में:';

          case '123007, Russian Federation, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return '123007, रशियन फेडरेशन, मॉस्को, 2 खोरोशेव्हस्की प्रोझड, 9, इमारत 2, कार्यालय 103';
          case 'Phone +7 (7172) 38 14 21': return 'फोन +7 (7172) 38 14 21';
          case 'In the Republic of Kazakhstan:': return 'कजाकिस्तान गणराज्य में:';
          case 'FOUNDERS:': return 'संस्थापक:';

          case 'LLC "SSN", 123007, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return 'एलएलसी "एसएसएन", 123007, मॉस्को, 2रा खोरोशेव्हस्की प्रोझड, 9, इमारत 2, कार्यालय 103';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return 'जेएससी "वित्तीय अकादमी", 010000, कजाकिस्तान गणराज्य, नूर-सुल्तान, सेंट। एसेनबरलीना, २५';
          case 'Media Testimonies': return 'मीडिया गवाही';
          case 'Add New': return 'नया जोड़ो';
          case 'Media Kit': return 'मीडिया किट';
          default: return input;
        }
      }
      case 'ir':{
        switch (input) {
          case 'Editorial Office address: 2nd Horoshevsky proezd 9, building 2, office 103, Moscow, 123007, Russian Federation; Telephone: 8 (800) 300 81 18': return '';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return '';
          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '';
          case 'Phone: 8 (800) 300 81 18': return '';
          case 'OFFICIAL DATA ONLY': return '';
          case 'News articles. Write an entire article or a succinct blog post.': return '';
          case 'ASK QUESTIONS': return '';
          case 'Ask questions, set topics for disputes and online meetings.': return '';
          case 'CONTACT US': return '';
          case 'CONTACTS:': return '';

          case '123007, Moscow, 2nd Horoshevsky proezd 9, building 2, office 103': return '';
          case 'Phone 8 (800) 300 81 18': return '';
          case 'Requisites:': return '';
          case 'Mass media registration certificate:': return '';
          case 'view': return '';
          case 'Certificate of the Union Eurasia-Russia magazine:': return '';
          case 'EDITORIAL ADDRESSES:': return '';
          case 'In Russian federation:': return '';

          case '123007, Russian Federation, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return '';
          case 'Phone +7 (7172) 38 14 21': return '';
          case 'In the Republic of Kazakhstan:': return '';
          case 'FOUNDERS:': return '';

          case 'LLC "SSN", 123007, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return '';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '';
          case 'Media Testimonies': return '';
          case 'Add New': return 'جدید اضافه کن';
          case 'Media Kit': return 'کیت رسانه';
          default: return input;
        }
      }
      case 'id':{
        switch (input) {
          case 'Editorial Office address: 2nd Horoshevsky proezd 9, building 2, office 103, Moscow, 123007, Russian Federation; Telephone: 8 (800) 300 81 18': return '2 Khoroshevsky proezd 9, Gedung 2, kantor 103, Moskow, 123007, Federasi Rusia; Telepon: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21';
          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '010000, Republik Kazakhstan, Nur-Sultan, st. Esenberlina, 25';
          case 'Phone: 8 (800) 300 81 18': return 'Telepon: 8 (800) 300 81 18';
          case 'OFFICIAL DATA ONLY': return 'HANYA DATA RESMI';
          case 'News articles. Write an entire article or a succinct blog post.': return 'Artikel berita. Tulis seluruh artikel atau posting blog yang ringkas.';
          case 'ASK QUESTIONS': return 'MENGAJUKAN PERTANYAAN';
          case 'Ask questions, set topics for disputes and online meetings.': return 'Ajukan pertanyaan, tetapkan topik untuk perselisihan, dan pertemuan online.';
          case 'CONTACT US': return 'HUBUNGI KAMI';
          case 'CONTACTS:': return 'KONTAK:';

          case '123007, Moscow, 2nd Horoshevsky proezd 9, building 2, office 103': return '123007, Moskow, 2nd Horoshevsky proezd 9, building 2, office 103';
          case 'Phone 8 (800) 300 81 18': return 'Telepon 8 (800) 300 81 18';
          case 'Requisites:': return 'Persyaratan:';
          case 'Mass media registration certificate:': return 'Sertifikat pendaftaran media massa:';
          case 'view': return 'melihat';
          case 'Certificate of the Union Eurasia-Russia magazine:': return 'Sertifikat majalah Union Eurasia-Rusia:';
          case 'EDITORIAL ADDRESSES:': return 'ALAMAT REDAKSI:';
          case 'In Russian federation:': return 'Di Federasi Rusia:';

          case '123007, Russian Federation, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return '123007, Federasi Rusia, Moskow, 2nd Horoshevsky proezd 9, building 2, office 103';
          case 'Phone +7 (7172) 38 14 21': return 'Telepon +7 (7172) 38 14 21';
          case 'In the Republic of Kazakhstan:': return 'Di Republik Kazakstan:';
          case 'FOUNDERS:': return 'PENDIRI:';

          case 'LLC "SSN", 123007, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return 'LLC "SSN", 123007, Moskow, 2nd Horoshevsky proezd 9, building 2, office 103';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return 'JSC "Akademi Keuangan", 010000, Republik Kazakhstan, Nur-Sultan, st. Esenberlina, 25';
          case 'Media Testimonies': return 'Kesaksian Media';
          case 'Add New': return 'Tambah baru';
          case 'Media Kit': return 'Perangkat Media';
          default: return input;
        }
      }
      case 'it':{
        switch (input) {
          case 'Editorial Office address: 2nd Horoshevsky proezd 9, building 2, office 103, Moscow, 123007, Russian Federation; Telephone: 8 (800) 300 81 18': return 'Indirizzo della redazione: 2nd Khoroshevsky proezd 9, edificio 2, ufficio 103, Mosca, 123007, Federazione Russa; Telefono: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'Indirizzo della Redazione nella Repubblica del Kazakistan: via Esenberlina 25, AIFC, Nur-Sultan, 010000, Repubblica del Kazakistan; Telefono: +7 (7172) 38 14 21';
          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '010000, Repubblica del Kazakistan, Nur-Sultan, st. Esenberlina, 25';
          case 'Phone: 8 (800) 300 81 18': return 'Telefono: 8 (800) 300 81 18';
          case 'OFFICIAL DATA ONLY': return 'SOLO DATI UFFICIALI';
          case 'News articles. Write an entire article or a succinct blog post.': return 'Articoli di notizie. Scrivi un intero articolo o un breve post sul blog.';
          case 'ASK QUESTIONS': return 'FARE DOMANDE';
          case 'Ask questions, set topics for disputes and online meetings.': return 'Fai domande, imposta argomenti per controversie e riunioni online.';
          case 'CONTACT US': return 'CONTATTACI';
          case 'CONTACTS:': return 'CONTATTI:';

          case '123007, Moscow, 2nd Horoshevsky proezd 9, building 2, office 103': return '123007, Mosca, 2nd Khoroshevsky proezd 9, edificio 2, ufficio 103';
          case 'Phone 8 (800) 300 81 18': return 'Telefono 8 (800) 300 81 18';
          case 'Requisites:': return 'Requisiti:';
          case 'Mass media registration certificate:': return 'Certificato di registrazione dei mass media:';
          case 'view': return 'Visualizza';
          case 'Certificate of the Union Eurasia-Russia magazine:': return 'Certificato della rivista Union Eurasia-Russia:';
          case 'EDITORIAL ADDRESSES:': return 'INDIRIZZI REDAZIONALI:';
          case 'In Russian federation:': return 'Nella Federazione Russa:';

          case '123007, Russian Federation, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return '123007, Federazione Russa, Mosca, 2nd Khoroshevsky proezd 9, edificio 2, ufficio 103';
          case 'Phone +7 (7172) 38 14 21': return 'Telefono +7 (7172) 38 14 21';
          case 'In the Republic of Kazakhstan:': return 'Nella Repubblica del Kazakistan:';
          case 'FOUNDERS:': return 'FONDATORI:';

          case 'LLC "SSN", 123007, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return 'LLC "SSN", 123007, Mosca, 2nd Khoroshevsky proezd 9, edificio 2, ufficio 103';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return 'JSC "Accademia finanziaria", 010000, Repubblica del Kazakistan, Nur-Sultan, st. Esenberlina, 25';
          case 'Media Testimonies': return 'Testimonianze dei media';
          case 'Add New': return 'Aggiungere nuova';
          case 'Media Kit': return 'Media kit';
          default: return input;
        }
      }
      case 'qa':{
        switch (input) {
          case 'Editorial Office address: 2nd Horoshevsky proezd 9, building 2, office 103, Moscow, 123007, Russian Federation; Telephone: 8 (800) 300 81 18': return '2 خوروشيفسكي برويزد 9 ، مبنى 2 ، مكتب 103 ، موسكو ، 123007 ، الاتحاد الروسي ؛ هاتف: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'عنوان مكتب التحرير في جمهورية كازاخستان: 25 Esenberlina street، AIFC، Nur-Sultan، 010000، Republic of Kazakhstan؛ هاتف: +7 (7172) 38 14 21';
          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '010000 جمهورية كازاخستان نور سلطان شارع. Esenberlina ، 25';
          case 'Phone: 8 (800) 300 81 18': return 'الهاتف: 8 (800) 300 81 18';
          case 'OFFICIAL DATA ONLY': return 'البيانات الرسمية فقط';
          case 'News articles. Write an entire article or a succinct blog post.': return 'مقالات إخبارية. اكتب مقالة كاملة أو مشاركة مدونة موجزة.';
          case 'ASK QUESTIONS': return 'اسال اسئلة';
          case 'Ask questions, set topics for disputes and online meetings.': return 'اطرح الأسئلة وحدد الموضوعات للنزاعات والاجتماعات عبر الإنترنت.';
          case 'CONTACT US': return 'اتصل بنا';
          case 'CONTACTS:': return 'جهات الاتصال:';

          case '123007, Moscow, 2nd Horoshevsky proezd 9, building 2, office 103': return '123007 ، موسكو ، 2 خوروشيفسكي برويزد 9 ، مبنى 2 ، مكتب 103';
          case 'Phone 8 (800) 300 81 18': return 'الهاتف 8 (800) 300 81 18';
          case 'Requisites:': return 'المتطلبات:';
          case 'Mass media registration certificate:': return 'شهادة تسجيل وسائل الإعلام:';
          case 'view': return 'عرض';
          case 'Certificate of the Union Eurasia-Russia magazine:': return 'شهادة مجلة اتحاد أوراسيا وروسيا:';
          case 'EDITORIAL ADDRESSES:': return 'عناوين التحرير:';
          case 'In Russian federation:': return 'في الاتحاد الروسي:';

          case '123007, Russian Federation, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return '123007 ، الاتحاد الروسي ، موسكو ، 2 خوروشيفسكي برويزد ، 9 ، مبنى 2 ، مكتب 103';
          case 'Phone +7 (7172) 38 14 21': return 'هاتف +7 (7172) 38 14 21';
          case 'In the Republic of Kazakhstan:': return 'في جمهورية كازاخستان:';
          case 'FOUNDERS:': return 'المؤسسون:';

          case 'LLC "SSN", 123007, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return 'ليك "سن" ، 123007 ، موسكو ، 2 خوروشيفسكي برويزد ، 9 ، مبنى 2 ، مكتب 103';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return 'JSC "Financial Academy" ، 010000 ، جمهورية كازاخستان ، نور سلطان ، شارع. Esenberlina ، 25';
          case 'Media Testimonies': return 'شهادات وسائل الإعلام';
          case 'Add New': return 'اضف جديد';
          case 'Media Kit': return 'طقم الوسائط';
          default: return input;
        }
      }
      case 'kz':{
        switch (input) {
          case 'Editorial Office address: 2nd Horoshevsky proezd 9, building 2, office 103, Moscow, 123007, Russian Federation; Telephone: 8 (800) 300 81 18': return 'Редакцияның мекенжайы: 2-ші Хорошевский өткелі, 9, 2 корпус, 103 кеңсе, Мәскеу, 123007, Ресей Федерациясы; Телефон: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'ҚР редакциясының мекен-жайы: 010000, Қазақстан Республикасы, Нұр-Сұлтан қ., Есенберлин к., 25-үй, каб. 220, тел. +7 (7172) 38 14 21';
          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '010000, Қазақстан Республикасы, Нұр-Сұлтан, ул. Есенберлина, 25 жаста';
          case 'Phone: 8 (800) 300 81 18': return 'Телефон: 8 (800) 300 81 18';
          case 'OFFICIAL DATA ONLY': return 'ТЕК РЕСМИ ДЕРЕКТЕР';
          case 'News articles. Write an entire article or a succinct blog post.': return 'Жаңалықтар туралы мақалалар. Толық мақаланы немесе қысқаша блог жазбасын жазыңыз.';
          case 'ASK QUESTIONS': return 'СҰРАҚ ҚОЮ';
          case 'Ask questions, set topics for disputes and online meetings.': return 'Сұрақтар қойыңыз, даулар мен онлайн кездесулер тақырыптарын белгілеңіз.';
          case 'CONTACT US': return 'БІЗБЕН ХАБАРЛАСЫҢЫЗ';
          case 'CONTACTS:': return 'Байланыс:';

          case '123007, Moscow, 2nd Horoshevsky proezd 9, building 2, office 103': return '123007, Мәскеу, 2-ші Хорошевский өткелі, 9-үй, 2-бет, 103-кеңсе';
          case 'Phone 8 (800) 300 81 18': return 'Телефон 8 (800) 300 81 18';
          case 'Requisites:': return 'Реквизиттер:';
          case 'Mass media registration certificate:': return 'БАҚ-ты тіркеу туралы куәлік:';
          case 'view': return 'қарау';
          case 'Certificate of the Union Eurasia-Russia magazine:': return 'Одақ Еуразия-Ресей журналының сертификаты:';
          case 'EDITORIAL ADDRESSES:': return 'РЕДАКЦИЯНЫҢ АДРЕСИ:';
          case 'In Russian federation:': return 'Ресей Федерациясында:';

          case '123007, Russian Federation, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return '123007, Ресей Федерациясы, Мәскеу, 2-ші Хорошевский өткелі, 9, 2 корпус, 103 кеңсе';
          case 'Phone +7 (7172) 38 14 21': return 'Телефон +7 (7172) 38 14 21';
          case 'In the Republic of Kazakhstan:': return 'Қазақстан Республикасында:';
          case 'FOUNDERS:': return 'ҚҰРУШЫЛАР:';

          case 'LLC "SSN", 123007, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return '"ССС" ЖШС, 123007, Мәскеу, 2-ші Хорошевский өткелі, 9-үй, 2-бет, 103-кеңсе';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '«Қаржы академиясы» АҚ, 010000, Қазақстан Республикасы, Нұр-Сұлтан қ., көш. Есенберлина, 25 жаста';
          case 'Media Testimonies': return 'БАҚ айғақтары';
          case 'Add New': return 'Жаңа қосу';
          case 'Media Kit': return 'Медиа жинағы';
          default: return input;
        }
      }
      case 'kr':{
        switch (input) {
          case 'Editorial Office address: 2nd Horoshevsky proezd 9, building 2, office 103, Moscow, 123007, Russian Federation; Telephone: 8 (800) 300 81 18': return '편집 사무소 주소: 2nd Horoshevsky proezd 9, building 2, office 103, Moscow, 123007, 러시아 연방; 전화: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return '카자흐스탄 공화국의 편집 사무소 주소: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; 전화: +7 (7172) 38 14 21';
          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '010000, 카자흐스탄 공화국, 누르술탄, st. 에센베를리나, 25';
          case 'Phone: 8 (800) 300 81 18': return '전화: 8 (800) 300 81 18';
          case 'OFFICIAL DATA ONLY': return '공식 데이터 전용';
          case 'News articles. Write an entire article or a succinct blog post.': return '뉴스 기사. 전체 기사 또는 간결한 블로그 게시물을 작성하십시오.';
          case 'ASK QUESTIONS': return '질문';
          case 'Ask questions, set topics for disputes and online meetings.': return '질문하고 분쟁 및 온라인 회의 주제를 설정합니다.';
          case 'CONTACT US': return '문의하기';
          case 'CONTACTS:': return '콘택트 렌즈:';

          case '123007, Moscow, 2nd Horoshevsky proezd 9, building 2, office 103': return '123007,모스크바,2 차 코로 셰프 스키 프로 제드 9,건물 2,사무실 103';
          case 'Phone 8 (800) 300 81 18': return '전화 8 (800) 300 81 18';
          case 'Requisites:': return '요구 사항:';
          case 'Mass media registration certificate:': return '대중매체 등록증:';
          case 'view': return '보다';
          case 'Certificate of the Union Eurasia-Russia magazine:': return 'Union Eurasia-Russia 잡지의 인증서:';
          case 'EDITORIAL ADDRESSES:': return '편집 주소:';
          case 'In Russian federation:': return '러시아 연방:';

          case '123007, Russian Federation, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return '123007,러시아,모스크바,제 2 코로 셰프 스키 프로 제드,9,건물 2,사무실 103';
          case 'Phone +7 (7172) 38 14 21': return '전화 +7 (7172) 38 14 21';
          case 'In the Republic of Kazakhstan:': return '카자흐스탄 공화국:';
          case 'FOUNDERS:': return '설립자:';

          case 'LLC "SSN", 123007, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return '123007,모스크바,2 차 코로 셰프 스키 프로에즈,9,건물 2,사무실 103';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return 'JSC "금융 아카데미", 010000, 카자흐스탄 공화국, 누르술탄, st. 에센베를리나, 25';
          case 'Media Testimonies': return '언론 증언';
          case 'Add New': return '새로운 걸 더하다';
          case 'Media Kit': return '미디어 키트';
          default: return input;
        }
      }
      case 'mn':{
        switch (input) {
          case 'Editorial Office address: 2nd Horoshevsky proezd 9, building 2, office 103, Moscow, 123007, Russian Federation; Telephone: 8 (800) 300 81 18': return 'Редакцийн хаяг: 2-р Хорошевский проезд 9, байр 2, оффис 103, Москва, 123007, ОХУ; утас: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'Бүгд Найрамдах Казахстан Улс дахь редакцийн хаяг: 010000, Нурсултан, AIFC, Esenberlina гудамж, 25; Бүгд Найрамдах Казахстан; Утас: +7 (7172) 38 14 21';
          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '010000, Бүгд Найрамдах Казахстан, Нур-Султан, ст. Есенберлина, 25 настай';
          case 'Phone: 8 (800) 300 81 18': return 'Утас: 8 (800) 300 81 18';
          case 'OFFICIAL DATA ONLY': return 'ЗӨВХӨН АЛБАН ЁСНЫ МЭДЭЭЛЭЛ';
          case 'News articles. Write an entire article or a succinct blog post.': return 'Мэдээний нийтлэлүүд. Бүтэн нийтлэл эсвэл товч блог нийтлэл бичээрэй.';
          case 'ASK QUESTIONS': return 'АСУУЛТ АСУУХ';
          case 'Ask questions, set topics for disputes and online meetings.': return 'Асуулт асууж, маргаан, онлайн уулзалтын сэдвийг тогтоо.';
          case 'CONTACT US': return 'БИДЭНД ХОЛБОО БАРИХ';
          case 'CONTACTS:': return 'ХОЛБОО БАРИХ:';

          case '123007, Moscow, 2nd Horoshevsky proezd 9, building 2, office 103': return '123007, Москва, 2-р Хорошевский проезд 9, 2-р байр, оффис 103';
          case 'Phone 8 (800) 300 81 18': return 'Утас 8 (800) 300 81 18';
          case 'Requisites:': return 'Тавигдах шаардлага:';
          case 'Mass media registration certificate:': return 'Олон нийтийн мэдээллийн хэрэгслийн бүртгэлийн гэрчилгээ:';
          case 'view': return '';
          case 'Certificate of the Union Eurasia-Russia magazine:': return 'харах';
          case 'EDITORIAL ADDRESSES:': return 'РЕДАКЦИЯНЫ ХАЯГ:';
          case 'In Russian federation:': return 'ОХУ-д:';

          case '123007, Russian Federation, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return '123007, ОХУ, Москва, 2-р Хорошевский проезд, 9, 2-р байр, оффис 103';
          case 'Phone +7 (7172) 38 14 21': return 'Утас +7 (7172) 38 14 21';
          case 'In the Republic of Kazakhstan:': return 'Бүгд Найрамдах Казахстан улсад:';
          case 'FOUNDERS:': return 'Үүсгэн байгуулагчид:';

          case 'LLC "SSN", 123007, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return 'ХХК "CCC", 123007, Москва, 2-р Хорошевский проезд г. 9, өрөө 2, оффис 103';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '"Санхүүгийн академи" ХК, 010000, Бүгд Найрамдах Казахстан, Нур-Султан, ст. Есенберлина, 25 настай';
          case 'Media Testimonies': return 'Хэвлэл мэдээллийн гэрчлэл';
          case 'Add New': return 'Шинээр нэмэх';
          case 'Media Kit': return 'Хэвлэл мэдээллийн хэрэгсэл';
          default: return input;
        }
      }
      case 'vn':{
        switch (input) {
          case 'Editorial Office address: 2nd Horoshevsky proezd 9, building 2, office 103, Moscow, 123007, Russian Federation; Telephone: 8 (800) 300 81 18': return 'Địa chỉ văn phòng biên tập: 2 Khoroshevsky proezd 9, xây dựng 2, văn phòng 103, Moscow, 123007, liên Bang nga; Điện Thoại: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'Địa chỉ Văn phòng Biên tập tại Cộng hòa Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Điện thoại: +7 (7172) 38 14 21';
          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '010000, Cộng hòa Kazakhstan, Nur-Sultan, st. Esenberlina, 25 tuổi';
          case 'Phone: 8 (800) 300 81 18': return 'Điện thoại: 8 (800) 300 81 18';
          case 'OFFICIAL DATA ONLY': return 'CHỈ DỮ LIỆU CHÍNH THỨC';
          case 'News articles. Write an entire article or a succinct blog post.': return 'Những bài báo thời sự. Viết toàn bộ một bài báo hoặc một bài đăng trên blog ngắn gọn.';
          case 'ASK QUESTIONS': return 'HỎI CÂU HỎI';
          case 'Ask questions, set topics for disputes and online meetings.': return 'Đặt câu hỏi, đặt chủ đề cho các tranh chấp và các cuộc họp trực tuyến.';
          case 'CONTACT US': return 'LIÊN HỆ CHÚNG TÔI';
          case 'CONTACTS:': return 'LIÊN LẠC:';

          case '123007, Moscow, 2nd Horoshevsky proezd 9, building 2, office 103': return '123007, Moscow, 2 Khoroshevsky proezd 9, xây dựng 2, văn phòng 103';
          case 'Phone 8 (800) 300 81 18': return 'Điện thoại 8 (800) 300 81 18';
          case 'Requisites:': return 'Yêu cầu:';
          case 'Mass media registration certificate:': return 'Giấy chứng nhận đăng ký phương tiện thông tin đại chúng:';
          case 'view': return 'quan điểm';
          case 'Certificate of the Union Eurasia-Russia magazine:': return 'Giấy chứng nhận của tạp chí Liên minh Á-Âu-Nga:';
          case 'EDITORIAL ADDRESSES:': return 'ĐỊA CHỈ BIÊN TẬP:';
          case 'In Russian federation:': return 'Ở liên bang Nga:';

          case '123007, Russian Federation, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return '123007, liên bang nga, Moscow, 2 Khoroshevsky proezd, 9, xây dựng 2, văn phòng 103';
          case 'Phone +7 (7172) 38 14 21': return 'Điện thoại +7 (7172) 38 14 21';
          case 'In the Republic of Kazakhstan:': return 'Tại Cộng hòa Kazakhstan:';
          case 'FOUNDERS:': return 'NGƯỜI ĐỒNG SÁNG LẬP:';

          case 'LLC "SSN", 123007, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return 'LLC "SSS", 123007, Moscow, 2 Khoroshevsky proezd, 9, xây dựng 2, văn phòng 103';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return 'Công ty cổ phần "Học viện Tài chính", 010000, Cộng hòa Kazakhstan, Nur-Sultan, st. Esenberlina, 25 tuổi';
          case 'Media Testimonies': return 'Lời chứng của phương tiện truyền thông';
          case 'Add New': return 'Thêm mới';
          case 'Media Kit': return 'Bộ phương tiện';

          default: return input;
        }
      }
      case 'zh':{
        switch (input) {
          case 'Editorial Office address: 2nd Horoshevsky proezd 9, building 2, office 103, Moscow, 123007, Russian Federation; Telephone: 8 (800) 300 81 18': return '编辑部地址：2霍罗舍夫斯基通道，2楼，办公室103，莫斯科，123007，俄罗斯联邦;电话：8（800）300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return '哈萨克斯坦共和国编辑部地址：哈萨克斯坦共和国，努尔苏丹市，阿斯塔纳国际金融中心，埃森伯利纳大街25号，邮编010000，电话号码';
          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '010000, 哈萨克斯坦共和国, Nur-Sultan, st. 埃森贝利娜，25';
          case 'Phone: 8 (800) 300 81 18': return '电话：8 (800) 300 81 18';
          case 'OFFICIAL DATA ONLY': return '仅官方数据';
          case 'News articles. Write an entire article or a succinct blog post.': return '新闻文章。 写整篇文章或简洁的博客文章。';
          case 'ASK QUESTIONS': return '问问题';
          case 'Ask questions, set topics for disputes and online meetings.': return '提出问题，设置争议和在线会议的主题。';
          case 'CONTACT US': return '联系我们';
          case 'CONTACTS:': return '联系人：';

          case '123007, Moscow, 2nd Horoshevsky proezd 9, building 2, office 103': return '123007, 莫斯科 2霍罗舍夫斯基通道，2楼，办公室103';
          case 'Phone 8 (800) 300 81 18': return '电话 8 (800) 300 81 18';
          case 'Requisites:': return '要求：';
          case 'Mass media registration certificate:': return '大众传媒注册证：';
          case 'view': return '看法';
          case 'Certificate of the Union Eurasia-Russia magazine:': return '欧亚-俄罗斯联盟杂志的证书：';
          case 'EDITORIAL ADDRESSES:': return '社论地址：';
          case 'In Russian federation:': return '在俄罗斯联邦：';

          case '123007, Russian Federation, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return '123007,俄罗斯联邦,莫斯科, 莫斯科 2霍罗舍夫斯基通道，2楼，办公室103';
          case 'Phone +7 (7172) 38 14 21': return '电话 +7 (7172) 38 14 21';
          case 'In the Republic of Kazakhstan:': return '在哈萨克斯坦共和国：';
          case 'FOUNDERS:': return '创始人：';

          case 'LLC "SSN", 123007, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return '有限责任公司"CCC", 123007, 莫斯科 2霍罗舍夫斯基通道，2楼，办公室103';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return 'JSC“金融学院”，010000，哈萨克斯坦共和国，努尔苏丹，圣。 埃森贝利娜，25';
          case 'Media Testimonies': return '媒体见证';
          case 'Add New': return '添新';
          case 'Media Kit': return '媒体工具包';

          default: return input;
        }
      }
      case 'pk':{
        switch (input) {
          case 'Editorial Office address: 2nd Horoshevsky proezd 9, building 2, office 103, Moscow, 123007, Russian Federation; Telephone: 8 (800) 300 81 18': return '2دوم خروشفسکی پروزد 9, ساختمان 2, دفتر 103, مسکو, 123007, فدراسیون روسیه; تلفن: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'جمہوریہ قازقستان میں ادارتی دفتر کا پتہ: 25 ایسنبرلینا گلی ، اے آئی ایف سی ، نور سلطان ، 010000 ، جمہوریہ قازقستان؛ ٹیلی فون: +7 (7172) 38 14 21۔';
          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '010000, جمهوری قزاقستان, نورسلطان, خیابان اسنبرلینا, 25';
          case 'Phone: 8 (800) 300 81 18': return 'تلفن: 8 (800) 300 81 18';
          case 'OFFICIAL DATA ONLY': return 'فقط اطلاعات رسمی';
          case 'News articles. Write an entire article or a succinct blog post.': return 'اخبار مقالات. یک مقاله کامل یا یک پست مختصر وبلاگ بنویسید.';
          case 'ASK QUESTIONS': return 'سوال بپرسید';
          case 'Ask questions, set topics for disputes and online meetings.': return 'سوالات خود را مطرح کنید و موضوعاتی را برای منازعات و جلسات اینترنتی تعیین کنید.';
          case 'CONTACT US': return 'تماس با ما';
          case 'CONTACTS:': return 'اطلاعات تماس';

          case '123007, Moscow, 2nd Horoshevsky proezd 9, building 2, office 103': return '123007, مسکو, 2دوم 9 9, ساختمان 2, دفتر 103';
          case 'Phone 8 (800) 300 81 18': return 'تلفن 8 (800) 300 81 18';
          case 'Requisites:': return 'الزامات:';
          case 'Mass media registration certificate:': return 'گواهی ثبت نام رسانه های جمعی:';
          case 'view': return 'مشاهده';
          case 'Certificate of the Union Eurasia-Russia magazine:': return 'گواهی مجله اتحادیه اوراسیا-روسیه:';
          case 'EDITORIAL ADDRESSES:': return 'نشانیهای تحریریه:';
          case 'In Russian federation:': return 'در فدراسیون روسیه:';

          case '123007, Russian Federation, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return '123007, فدراسیون روسیه, مسکو, 2دوم خروشفسکی پروزد, 9, ساختمان 2, دفتر 103';
          case 'Phone +7 (7172) 38 14 21': return 'تلفن +7 (7172) 38 14 21';
          case 'In the Republic of Kazakhstan:': return 'در جمهوری قزاقستان:';
          case 'FOUNDERS:': return 'بنیانگذاران：';

          case 'LLC "SSN", 123007, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return '"اس اس ان" 123007 مسکو 2 خروشفسکی پروزد 9 ساختمان 2 دفتر 103';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return 'جی اس سی" اکادمی مالی", 010000, جمهوری قزاقستان, نورسلطان, خیابان. اسنبرلینا, 25';
          case 'Media Testimonies': return 'شهادت رسانه ها';
          case 'Add New': return 'نیا شامل کریں';
          case 'Media Kit': return 'میڈیا کٹ';

          default: return input;
        }
      }
      case 'de':{
        switch (input) {
          case 'Editorial Office address: 2nd Horoshevsky proezd 9, building 2, office 103, Moscow, 123007, Russian Federation; Telephone: 8 (800) 300 81 18': return 'Adresse der Redaktion: 2. Khoroshevsky proezd 9, Gebäude 2, Büro 103, Moskau, 123007, Russische Föderation; Telefon: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'Die Adresse der Redaktion in der RK: 010000, Republik Kasachstan, Nur-Sultan, Esenberlina-Str., 25, Büro 220, tel. +7 (7172) 38 14 21';
          case '010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return '010000, Republik Kasachstan, Nur-Sultan, st. Esenberlina, 25';
          case 'Phone: 8 (800) 300 81 18': return 'Telefon: 8 (800) 300 81 18';
          case 'OFFICIAL DATA ONLY': return 'NUR OFFIZIELLE DATEN';
          case 'News articles. Write an entire article or a succinct blog post.': return 'Zeitungsartikel. Schreiben Sie einen ganzen Artikel oder einen prägnanten Blogbeitrag.';
          case 'ASK QUESTIONS': return 'FRAGEN STELLEN';
          case 'Ask questions, set topics for disputes and online meetings.': return 'Stellen Sie Fragen, legen Sie Themen für Streitigkeiten und Online-Meetings fest.';
          case 'CONTACT US': return 'KONTAKTIERE UNS';
          case 'CONTACTS:': return 'KONTAKTE:';

          case '123007, Moscow, 2nd Horoshevsky proezd 9, building 2, office 103': return '123007, Moskau, 2. Khoroshevsky proezd 9, Gebäude 2, Büro 103';
          case 'Phone 8 (800) 300 81 18': return 'Telefon 8 (800) 300 81 18';
          case 'Requisites:': return 'Voraussetzungen:';
          case 'Mass media registration certificate:': return 'Registrierungsbescheinigung für Massenmedien:';
          case 'view': return 'Aussicht';
          case 'Certificate of the Union Eurasia-Russia magazine:': return 'Zertifikat der Zeitschrift Union Eurasia-Russia:';
          case 'EDITORIAL ADDRESSES:': return 'REDAKTIONELLE ADRESSEN:';
          case 'In Russian federation:': return 'In der Russischen Föderation:';

          case '123007, Russian Federation, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return '123007, Russische Föderation, Moskau, 2. Khoroshevsky proezd, 9, Gebäude 2, Büro 103';
          case 'Phone +7 (7172) 38 14 21': return 'Telefon +7 (7172) 38 14 21';
          case 'In the Republic of Kazakhstan:': return 'In der Republik Kasachstan:';
          case 'FOUNDERS:': return 'GRÜNDER:';

          case 'LLC "SSN", 123007, Moscow, 2nd Horoshevsky proezd, 9, building 2, office 103': return 'LLC "SSS", 123007, Moskau, 2. Khoroshevsky proezd, 9, Gebäude 2, Büro 103';
          case 'JSC "Financial Academy", 010000, Republic of Kazakhstan, Nur-Sultan, st. Esenberlina, 25': return 'JSC "Finanzakademie", 010000, Republik Kasachstan, Nur-Sultan, st. Esenberlina, 25';
          case 'Media Testimonies': return 'Medienberichte';
          case 'Add New': return 'Neue hinzufügen';
          case 'Media Kit': return 'Werbemöglichkeiten';

          default: return input;
        }
      }
    }
  }
  getLang(){
    return this.language.replace('eu', 'en').replace('uk', 'en').replace('cn', 'zh');
  }
}
