import "./product.scss";
import { dataContext } from "../../App";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ShopNow from "../shopNow/ShopNow";

function Product() {
  const { data } = useContext(dataContext);
  const { id } = useParams();
  const dataId = data.find((val) => {
    return val.id == id;
  });
  console.log(dataId);

  const stars = ["s", "t", "a", "r", "s"];
  return (
    <div className="container">
      <div className="product-one">
        <div className="product-images">
          <div className="big-image">
            <img src="./images/product-image.png" alt="Product" />
            <img src="./images/product-image.png" alt="Product" />
            <img src="./images/product-image.png" alt="Product" />
            <img src="./images/product-image.png" alt="Product" />
            <div className="prev-next">
              <div>
                <i className="fa-solid fa-prev">a</i>
              </div>
              <div>
                <i className="fa-solid fa-next">a</i>
              </div>
            </div>
          </div>
          <div className="small-images">
            {dataId.images.map((item, index) => (
              <span key={index}>
                <img src={item} alt="Small product" />
              </span>
            ))}
          </div>
        </div>
        <div className="product-info">
          <div className="stock-like">
            <div className="stock">
              <i className="fa-solid fa-check"></i>
              <span>In stock</span>
            </div>
            <div className="like">
              <i className="fa-regular fa-heart"></i>
              <span>Save for later</span>
            </div>
          </div>
          <div className="product-name">{dataId.name}</div>
          <div className="result">
            <div className="stars">
              {stars
                .slice(0, Math.round(dataId.star / 2))
                .map((item, index) => (
                  <i key={index} className="fa-solid fa-star"></i>
                ))}

              {stars
                .slice(0, 5 - Math.round(dataId.star / 2))
                .map((item, index) => (
                  <i key={index} className="fa-regular fa-star"></i>
                ))}
              <span>{dataId.star}</span>
            </div>
            <div className="reviews">
              <img src="./images/message.svg" alt="Message" />
              <span>{dataId.reviews} reviews</span>
            </div>
            <div className="sold">
              <img src="./images/shopping_basket.svg" alt="Basket" />
              <span>{dataId.sold} sold</span>
            </div>
          </div>
          <div className="mobile__product-name">{dataId.text}</div>
          <div className="prices">
            <div className="max-price">
              <div className="price">${dataId.price}</div>
              <div className="pcs">50-100 pcs</div>
            </div>
            <div className="vertical-line"></div>
            <div className="medium-price">
              <div className="price">$90.00</div>
              <div className="pcs">100-700 pcs</div>
            </div>
            <div className="vertical-line"></div>
            <div className="min-price">
              <div className="price">$78.00</div>
              <div className="pcs">700+ pcs</div>
            </div>
          </div>
          <div className="mobile-prices">
            ${dataId.price}
            <span>(50-100 pcs)</span>
          </div>
          <div className="btn-like">
            <button type="button">Send inquiry</button>
            <span>
              <i className="fa-regular fa-heart"></i>
            </span>
          </div>
          <div className="element">
            <div className="type">Price:</div>
            <div className="information">Negotiable</div>
          </div>

          <hr />
          <div className="element">
            <div className="type">Type:</div>
            <div className="information">Classic shoes</div>
          </div>
          <div className="element">
            <div className="type">Material:</div>
            <div className="information">Plastic material</div>
          </div>
          <div className="element">
            <div className="type">Design:</div>
            <div className="information">Modern nice</div>
          </div>
          <hr />
          <div className="element">
            <div className="type">Customization:</div>
            <div className="information">
              Customized logo and design custom packages
            </div>
          </div>
          <div className="element">
            <div className="type">Protection:</div>
            <div className="information">Refund Policy</div>
          </div>
          <div className="element">
            <div className="type">Warranty:</div>
            <div className="information">2 years full warranty</div>
          </div>
          <div className="info-text">
            Info about edu item is an ideal companion for anyone engaged in
            learning. The drone provides precise and ...
          </div>
          <a className="read-more">Read more</a>
        </div>
      </div>
      <ShopNow />
    </div>
  );
}

export default Product;
