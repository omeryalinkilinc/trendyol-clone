import React from "react";
import "../assets/styles/Home.scss";
import circle_img1 from "../assets/images/circle_img1.png";
import circle_img2 from "../assets/images/circle_img2.png";
import circle_img3 from "../assets/images/circle_img3.png";
import circle_img4 from "../assets/images/circle_img4.png";
import circle_img5 from "../assets/images/circle_img5.png";
import circle_img6 from "../assets/images/circle_img6.png";
import circle_img7 from "../assets/images/circle_img7.png";
import background from "../assets/images/background.png";
import ProductList from "../components/ProductList";
import categoryData from "../components/CategoryData";
import PopularBrands from "../components/PopularBrands";
import { Link } from "react-router-dom";

const circle_slider_data = [
  {
    img: circle_img1,
    text: "İyi Fiyatlı Ürünler",
  },
  {
    img: circle_img2,
    text: "Sen De Al!",
  },
  {
    img: circle_img3,
    text: "Avantajlı Ürünler",
  },
  {
    img: circle_img4,
    text: "İndirim Kuponlarım",
  },
  {
    img: circle_img5,
    text: "Krediler",
  },
  {
    img: circle_img6,
    text: "Kredi Kartı",
  },
  {
    img: circle_img7,
    text: "Yeni Gelen Ürünler",
  },
];

const banner_listing_data = [
  {
    text: "Sepete en çok eklenenler",
    color: "#0F6726",
    bgcolor: "#EFFBF5",
  },

  {
    text: "En çok öne çıkanlar",
    color: "#B6530A",
    bgcolor: "#FEF4EC",
  },

  {
    text: "Flaş Ürünler",
    color: "#BA3862",
    bgcolor: "#FEF0F2",
  },
];

const Home = () => {
  return (
    <div className="Home">
      <div className="home_container">
        <section className="circle_slider">
          <div className="component_circle_slider">
            {circle_slider_data.map((item, index) => (
              <div className="sliderlist" key={index}>
                <a href="#">
                  <img src={item.img} />
                  <span>{item.text}</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="banner_listing">
          <div>
            <div className="banner">
              {banner_listing_data.map((ban, index) => (
                <a href="#" style={{ color: ban.color }}>
                  <div
                    className="banner_listing_item"
                    key={index}
                    style={{ backgroundColor: ban.bgcolor }}
                  >
                    {ban.text}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="Slider">
          <div className="slider_container">
            <div className="slider_header">
              <span className="user_specific_products">Ömer, Sana Özel</span>
              <div className="header_navigation">
                <a href="/sana-ozel">Tümünü Gör</a>
              </div>
            </div>
            <ProductList />
          </div>
        </section>

        <section className="category_data_item">
          <div className="category_card_container">
            {categoryData.map((item) => (
              <div className="category_card" key={item.id}>
                <Link to={`/kategori/${item.slug}`}>
                  <img className="category_img" src={item.image} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <PopularBrands />
      </div>
    </div>
  );
};

export default Home;
