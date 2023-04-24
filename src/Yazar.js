import React, { Component } from "react";
import {
  CardGroup,
  Card,
  CardBody,
  CardText,
  CardImg,
  CardTitle,
  CardSubtitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import {BsFillPersonFill,BsFillBookFill} from 'react-icons/bs';

export default class Yazar extends Component {
  state = {
    // shortSum:[
    //     {"
    //     "}
    // ],
    writers: [
      {
        sum: [
          " Tanzimat Dönemi yeni yeni batı tarzında edebiyat ürünlerinin görülmeye başlandığı devredir. Tanzimat döneminde ilk kez makale, tiyatro, öykü ve roman gibi türler ortaya çıkarılmıştır. Şiirde de yeni biçimler ve konular denenmiştir. Tanzimat Dönemi Edebiyatının en önemli özellikleri toplumsal olayların tema olarak ilk sırada yer almasıdır. ",
        ],
        donemId: 1,
        rowid: "dons1",
        donemName: "Tanzimat Dönemi",
        donemWriters: [
          "İbrahim Şinasi",
          "Ziya Paşa",
          "Namık Kemal",
          "Abdülhak Hâmit",
          "Recaîzade Mahmut Ekrem",
          "Samipaşazade Sezâi",
        ],
        donemEserler: [
          "Tercüme-i Manzume",
          "Taaşuk-u Talat ve Fitnat",
          "İntibah",
          "Vatan Yahut Silistre",
          "Felatun Bey ile Rakım Efendi",
          " Araba Sevdası",
        ],
      },
      {
        sum: [
          " Edebiyat-ı Cedide yani Servet-i Fünun dönemi 1896 yılında başlamıştır. Bir grup sanatçının ortaya koyduğu bu hareket yine aynı insanların çıkardıkları bir derginin de adı olmuştur.Serveti Fünun Edebiyatının özelliklerinden biri toplumsal olaylardan çok kişisel duyguları işleyen bir edebiyat olmasıdır.",
        ],
        donemId: 2,
        rowid: "dons2",
        donemName: "Serveti Fünûn Edebiyatı (Edebiyat-ı Cedide)",
        donemWriters: ["Tevfik Fikret", "Cenap Şahabettin", "Halit Ziya"],
        donemEserler: [
          "Mai ve Siyah",
          "Aşk-ı Memnu",
          "Rübab-ı Şikeste",
          "Eylül",
        ],
      },
      {
        sum: [
          "Fecr-i Âti Topluluğu, Meşrutiyet döneminde Servet-i Fünûn edebiyatı anlayışından ayrı, daha yenilikçi sanatçıların kurduğu bir topluluktur.",
        ],
        donemId: 3,
        rowid: "dons3",
        donemName: "Fecr-i Âti Edebiyatı",
        donemWriters: ["Ahmet Hâşim", "Süleyman Nazif", "Emin Bülent", "Celal Sahir", "Hamdullah Suphi", "Tahsin Nahit"],
        donemEserler: ["Jön Türk", "Kin", "Bir Buhran", "Aziz Katil", "Tezad"],
      },
      {
        sum: [
          "Millî Edebiyat Akımı, 1908 yılında Meşrutiyet in ilânıyla birlikte batı taklitçiliğine karşı çıkan, yalın Türkçe ile yazı yazmayı ilke edinen sanatçıların başlattığı bir akımdır.",
        ],
        donemId: 4,
        rowid: "dons4",
        donemName: "Millî Edebiyat",
        donemWriters: [
          "Mehmet Emin Yurdakul",
          "Ömer Seyfettin",
          "Ali Canip",
          "Ziya Gökalp",
        ],
        donemEserler: [
          "Bahar ve Kelebekler",
          "Nutuk",
          "Yaban",
          "Ayyar Hamza",
          "Ateşten Gömlek",
          "Çalıkuşu",
        ],
      },
      {
        sum: [
          "Cumhuriyet Dönemi Türk Edebiyatı, Cumhuriyetin ilânından itibaren başlayan, yurt sorunlarını gerçekçi bir anlayışla dile getiren sanatçıların ortaya koyduğu bir edebiyattır. Bu dönemde çok sayıda sanatçı yetişmiş ve edebiyatın hemen her türünde olgun yapıtlar verilmiştir.",
        ],
        donemId: 5,
        rowid: "dons5",
        donemName: "Cumhuriyet Dönemi Edebiyatı",
        donemWriters: [
          " Orhan Veli Kanık",
          " Orhan Kemal",
          " Kemal Tahir",
          " Yaşar Kemal",
        ],
        donemEserler: [
          "Değirmen",
          "İnce Memed",
          "Büyük Doğu",
          "Dokuzuncu Hariciye Koğuşu",
          "Mahalle Kahvesi",
        ],
      },
    ],
  };
  render() {
    return (
      <div id="mains">
        <h3 id="times">{this.props.title}</h3>
        {this.state.writers.map((writer) => (
          <>
            <div id={writer.rowid}>
              <h3
                onClick={() => {
                  this.props.changeCategory(writer);
                }}
                key={writer.donemId}
              >
                {writer.donemName}
              </h3>
              <h4 id="sumwriter">{writer.sum}</h4>
              {/* <h4>{writer.donemWriters}</h4> */}
              <h2>{this.state.currentCategory}</h2>

              <CardGroup id="cardGroup">
                <Card body>
                  <CardImg
                  // alt="Card image cap"
                  // src="https://picsum.photos/318/180"
                  // top
                  // width="100%"
                  />
                  <CardBody id="cardEser">
                    <CardTitle tag="h5">{writer.donemName} Eserleri</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h5">
                     <BsFillBookFill/> Önemli Eserler
                    </CardSubtitle>
                    <CardText>
                      <ListGroup flush>
                        {writer.donemEserler.map((writer) => (
                          <ListGroupItem color="primary">
                            {writer}
                          </ListGroupItem>
                        ))}
                      </ListGroup>
                    </CardText>
                  </CardBody>
                </Card>

                <Card body>
                  <CardImg
                  // alt="Card image cap"
                  //   src="https://picsum.photos/318/180"
                  //   top
                  //   width="100%"
                  />
                  <CardBody id="cardWriter">
                    <CardTitle tag="h5">{writer.donemName} Yazarları</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h5">
                     <BsFillPersonFill/> Önemli Yazarlar
                    </CardSubtitle>
                    <CardText>
                      <ListGroup>
                        {writer.donemWriters.map((writer) => (
                          <ListGroupItem color="primary">
                            {writer}
                          </ListGroupItem>
                        ))}
                      </ListGroup>
                    </CardText>
                  </CardBody>
                </Card>
              </CardGroup>
            </div>
          </>
        ))}
      </div>
    );
  }
}
