import React, { useEffect, useState } from "react";
import StarRating from "../components/StarRating";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../assets/styles/ProductDetail.css";
import { useCart } from "../context/CartContext";
import localProducts from "../components/CategoryProductData";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => {
        const localProduct = localProducts.find(
          (p) => String(p.id) === String(id)
        );
        setProduct(localProduct || null);
      });
  }, [id]);

  useEffect(() => {
    console.log("useParams ID:", id);
  }, [id]);

  console.log("🛒 Home sayfasındaki sepetteki ürünler:", cartItems);

  if (!product) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div className="product_detail_page">
      <div>
        <div className="gallery_container">
          <div className="product_image_container">
            <img
              className="product_image"
              src={
                product.images
                  ? product.images[0] // API'den gelen ürün
                  : product.image // Local  ürün
              }
              alt={product.title}
              width="300"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="right_content_container">
          <div className="product_detail">
            <span className="product_title">{product.title}</span>
            <div className="ratings_container">
              <div className="ratings">{<StarRating />}</div>
              <div className="">
                <div className="social_counts">
                  <img src="https://cdn.dsmcdn.com/mnresize/30/30/mobile/pdp/Additional/orange-heart_1f9e1.png" />
                  <span className="social_counts_text">
                    Sevilen ürün! 920 kişi favoriledi!
                  </span>
                </div>
              </div>
              <div className="product_price_container">
                <span className="product_price">{product.price} TL</span>
              </div>
            </div>
          </div>
          <div className="product_btn_container">
            <a href="#" className="add_product_btn">
              <span className="add_product_btn_text">Şimdi Al</span>
            </a>
            <button className="add_cart_btn" onClick={() => addToCart(product)}>
              <div className="add_cart_btn_text">Sepete Ekle</div>
            </button>
            <div className="fav_btn_container">
              <div className="">
                <button className="fav_btn">
                  <i className="i-heart" id="fv_btn_icon"></i>
                </button>
              </div>
            </div>
          </div>
          <section className="delivery_content">
            <div className="delivery_info_container">
              <div className="">
                <span>
                  <i className="i-my-orders" id="delivery_icon"></i>
                </span>
                <span>Tahmini Kargoya Teslim:</span>
                <span> 3 gün içinde</span>
              </div>
              <div className="location_info_container">
                <hr className="line" />
                <div className="delivery_container">
                  <div className="delivery_info">
                    <div className="delivery_logo">
                      <img src="https://cdn.dsmcdn.com/mobile/pdp/kargo_logo/trendyol.png" />
                    </div>
                    <span className="location_info_text">
                      <b className="location_info_header">
                        Tahmini Teslim:
                        <div className="review_tooltip">
                          <i className="i-info1 review_tooltip_logo"></i>
                        </div>
                      </b>
                      <p>25 Nisan Cuma günü kapında!</p>
                    </span>
                  </div>
                  <div className="location_area_container">
                    <button className="location_area_btn">
                      <span className="location_text">
                        <i className="i-location-pin pin-wide"></i>
                        İstanbul/Kartal
                      </span>
                      <i className="i-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="payment_options">
              <span className="payment_options_header">Ödeme Seçenekleri:</span>
              <div className="payment_installment_container">
                <div className="payment_installment_content">
                  <img src="https://cdn.dsmcdn.com/web/production/installmentbankcardlogo.png" />
                  <div className="payment_installment_text">
                    <span className="payment_title">
                      12 Aya Varan Taksit Fırsatı
                    </span>
                    <span className="payment_content">
                      Aylık 30,10 TL'den başlayan 12 aya varan taksit fırsatı
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="sticker_container">
            <a
              target="blank"
              href="https://www.trendyol.com/s/trendyol-orijinallik-takip-sistemi"
            >
              <img
                className="sticker_img"
                src="https://cdn.dsmcdn.com/indexing-sticker-stamp/moon/c7575d99-f1f9-46e9-bdc1-0cf67fcb1a2a.png"
              />
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className="product_widget_list">
          <section className="campaign_container">
            <h2 className="campaign_list_title">ÜRÜNÜN KAMPANYALARI</h2>
            <div className="campaign_content">
              <a href="#" className="">
                <i className="i-my-orders"></i>
                <div className="">
                  <div className="campaign_text">
                    250 TL ve Üzeri Kargo Bedava (Satıcı Karşılar)
                  </div>
                </div>
                <i className="i-arrow-right"></i>
              </a>
            </div>
          </section>

          <section className="seller_widget">
            <div className="seller_container">
              <div className="seller_info">
                <div className="seller_content">
                  <div className="seller_name_text">
                    <a href="#">XStore</a>
                  </div>
                  <div className="seller_confirmation">
                    <img src="https://cdn.dsmcdn.com/indexing-sticker-stamp/stage/4b0d7ef1-8e8f-4c8f-b1c7-637e432ea2b4.png" />
                  </div>
                  <div className="seller_rating">9.1</div>
                  <div className="seller_descriptions">
                    <span>
                      <i className="i-info2"></i>
                    </span>
                  </div>
                </div>
                <div className="seller_follower_count">467,8B Takipçi</div>
              </div>
              <div className="follow_btn">
                <a href="#">
                  <i class="i-follow-to-win"></i>
                  <span>Takip Et Kazan</span>
                </a>
              </div>
              <div className="questions_btn">
                <a href="#">
                  <i className="i-my-reviews"></i>
                  <span>Satıcıya Soru Sor</span>
                  <i className="i-arrow-right"></i>
                </a>
              </div>
              <div className="visit_store">
                <a href="#">
                  <span>Mağazaya Git</span>
                  <i className="i-arrow-right"></i>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
