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
          default: return input;
        }
      }
      case 'es':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return 'Dirección de la editorial: CP123112, Moscú-City, а/ p n.º 82, Federación Rusa, Moscú, c/ Presnenskaya naberezhnaya,.8, edif. 1, Centro de Negocios «Gorod Stolits», Tel.: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'Dirección de la editorial en la República de Kazajistán: c/Esenberlina, 25, of. 220, CP010000 Nur-Sultan, República de Kazajistán. Tel.: +7 (7172) 38 14 21';
          default: return input;
        }
      }
      case 'fr':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return 'Adresse du bureau éditorial : 8 Presnenskaya naberezhnaya, bldg. 1, Centre d\'affaires Gorod Stolitz, B.P. Box 82, Moscow City, Moscou, 123112, Fédération de Russie ; Téléphone : 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'Adresse du bureau éditorial en République du Kazakhstan : 25, rue Esenberlina, AIFC, Nur-Sultan, 010000, République du Kazakhstan ; Téléphone : +7 (7172) 38 14 21';
          default: return input;
        }
      }
      case 'in':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return 'संपादकीय कार्यालय का पता: 8 प्रेस्नेंस्काया नबेरेज़्नाया, भवन। 1, गोरोद स्टोलिट्ज़ बिजनेस सेंटर, पी.ओ. बॉक्स 82, मॉस्को सिटी, मॉस्को, 123112, रूसी संघ; टेलीफोन: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'कजाकिस्तान गणराज्य में संपादकीय कार्यालय का पता: 25 एसेनबरलीना स्ट्रीट, एआईएफसी, नूर-सुल्तान, 010000, कजाकिस्तान गणराज्य; टेलीफोन: +7 (7172) 38 14 21';
          default: return input;
        }
      }
      case 'ir':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return '';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return '';
          default: return input;
        }
      }
      case 'id':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21';
          default: return input;
        }
      }
      case 'it':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return 'Indirizzo della redazione: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Mosca, 123112, Federazione Russa; Telefono: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'Indirizzo della Redazione nella Repubblica del Kazakistan: via Esenberlina 25, AIFC, Nur-Sultan, 010000, Repubblica del Kazakistan; Telefono: +7 (7172) 38 14 21';
          default: return input;
        }
      }
      case 'qa':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return 'عنوان مكتب التحرير: 8 Presnenskaya naberezhnaya، bldg. 1 ، مركز أعمال جورود ستوليتز ، ص. Box 82، Moscow City، Moscow، 123112، روسيا الاتحادية ؛ هاتف: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'عنوان مكتب التحرير في جمهورية كازاخستان: 25 Esenberlina street، AIFC، Nur-Sultan، 010000، Republic of Kazakhstan؛ هاتف: +7 (7172) 38 14 21';
          default: return input;
        }
      }
      case 'kz':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return 'ҚР редакциясының мекен-жайы: 010000, Қазақстан Республикасы, Нұр-Сұлтан қ., Есенберлин к., 25-үй, каб. 220, тел. +7 (7172) 38 14 21';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'Редакцияның мекенжайы: 123112, Мәскеу-Сити, № 82 а/ ж, Ресей Федерациясы, Мәскеу қ., Пресненская набережная, 8-үй, 1-құр., "Город Столиц" Бизнес Орталығы, тел. 8 (800) 300 81 18';
          default: return input;
        }
      }
      case 'kr':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return '편집 사무소 주소: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz 비즈니스 센터, P.O. Box 82, Moscow City, Moscow, 123112, 러시아 연방; 전화: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return '카자흐스탄 공화국의 편집 사무소 주소: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; 전화: +7 (7172) 38 14 21';
          default: return input;
        }
      }
      case 'mn':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return 'Редакцийн хаяг: Пресненская набережная, 8, байр. 1, Город Столиц бизнесийн төв, P.O. Хайрцаг 82, Москва хот, Москва, 123112, ОХУ; Утас: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'Бүгд Найрамдах Казахстан Улс дахь редакцийн хаяг: 010000, Нурсултан, AIFC, Esenberlina гудамж, 25; Бүгд Найрамдах Казахстан; Утас: +7 (7172) 38 14 21';
          default: return input;
        }
      }
      case 'vn':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return 'Địa chỉ văn phòng biên tập: 8 Presnenskaya naberezhnaya, bldg. 1, Trung tâm thương mại Gorod Stolitz, P.O. Box 82, Thành phố Matxcova, Matxcova, 123112, Liên bang Nga; Điện thoại: 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'Địa chỉ Văn phòng Biên tập tại Cộng hòa Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Điện thoại: +7 (7172) 38 14 21';
          default: return input;
        }
      }
      case 'zh':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return '编辑部地址：俄罗斯联邦，莫斯科市，莫斯科城，普列斯年斯卡亚沿河街8号1栋，《首都之城》商务中心，邮编123112，邮政信箱82号，电话号码, 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return '哈萨克斯坦共和国编辑部地址：哈萨克斯坦共和国，努尔苏丹市，阿斯塔纳国际金融中心，埃森伯利纳大街25号，邮编010000，电话号码';
          default: return input;
        }
      }
      case 'pk':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return 'ادارتی دفتر کا پتہ: 8 پریسنسکایا نابریزنیا ، بلڈنگ۔ 1 ، گورود سٹولٹز بزنس سینٹر ، P.O. باکس 82 ، ماسکو سٹی ، ماسکو ، 123112 ، روسی فیڈریشن ٹیلی فون: 8 (800) 300 81 18۔';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'جمہوریہ قازقستان میں ادارتی دفتر کا پتہ: 25 ایسنبرلینا گلی ، اے آئی ایف سی ، نور سلطان ، 010000 ، جمہوریہ قازقستان؛ ٹیلی فون: +7 (7172) 38 14 21۔';
          default: return input;
        }
      }
      case 'de':{
        switch (input) {
          case 'Editorial Office address: 8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City, Moscow, 123112, Russian Federation; Telephone: 8 (800) 300 81 18': return 'Adresse der Redaktion: 123112, Moscow-City, Postfach 82, Russische Föderation, Moskau, Presnenskaja-Damm, 8, Gebäude 1, Geschäftszentrum "Gorod Stoliz", Tel. 8 (800) 300 81 18';
          case 'Editorial Office address in the Republic of Kazakhstan: 25 Esenberlina street, AIFC, Nur-Sultan, 010000, Republic of Kazakhstan; Telephone: +7 (7172) 38 14 21': return 'Die Adresse der Redaktion in der RK: 010000, Republik Kasachstan, Nur-Sultan, Esenberlina-Str., 25, Büro 220, tel. +7 (7172) 38 14 21';
          default: return input;
        }
      }
    }
  }
  getLang(){
    return this.language.replace('eu', 'en').replace('uk', 'en').replace('cn', 'zh');
  }
}
