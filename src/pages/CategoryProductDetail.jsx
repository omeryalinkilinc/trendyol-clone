import React from "react";
import "../assets/styles/CategoryProductDetail.scss";
import StarRating from "../components/StarRating";
import { Link } from "react-router-dom";
const CategoryProductDetail = ({ id, title, image, price }) => {
  return (
    <div className="category_product_container">
      <div>
        <div className="category_product_detail_card">
          <Link to={`/product/${id}`}>
            <div className="category_product_card">
              <div className="favorite_btn">
                <i className="wd-fvrt-btn i-heart"></i>
              </div>
              <div className="category_product_card_img">
                <img src={image} />
              </div>
              <div className="category_product_body">
                <div className="category_product_card_title">
                  <span>{title}</span>
                </div>
                <div className="starrating">
                  <StarRating />
                </div>
                <div className="category_product_card_price">
                  <p>{price} TL</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryProductDetail;
