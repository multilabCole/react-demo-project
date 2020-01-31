import React from "react";
import Link from "react-router-dom";
import { Image } from "react-bootstrap";

const ProductCard = ({ product ,exmaple, imageSrc, title, path="#",  }) => {
  return (
    <div className="col-xs-6 col-sm-3 cc-product-item">
      <div className="cc-item-detail">
        <a href={path}>
          <div
            style={{ maxWidth: "100%", minHeight: "0px", height: "100%" }}
          >
              <Image src={imageSrc} fluid />
          </div>
        </a>
      </div>
      <div className="cc-item-title">
        <a href={path}>
            <p>{title}</p>
        </a>
      </div>
      <div className="cc-item-price">
          <span>$1.00</span>
          -
          <span>$7.00</span>
      </div>
    </div>
  );
};

export default ProductCard;
