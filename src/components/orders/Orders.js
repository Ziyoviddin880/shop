import ShopNow from "../shopNow/ShopNow";
import "./orders.scss";

function Orders() {
  return (
    <div>
      <div className="container">
        <div className="order-title">
          Orders <span>(3)</span>
        </div>
        <div className="orders">
          <div className="order">
            <div className="left">
              <div className="for-img">
                <img src="./images/order.svg" alt="Order" />
              </div>
              <div className="info">
                <div className="title">
                  T-shirts with multiple colors, for men and lady
                </div>
                <div className="text">
                  Size: medium, Color: blue, Material: Plastic Seller: Artel
                  Market
                </div>
                <div className="btns">
                  <button type="button">Remove</button>
                  <button type="button">Save for later</button>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="price">$77.89</div>
              <select name="" id="">
                <option value="1">Qty: 1</option>
                <option value="3">Qty: 3</option>
                <option value="9">Qty: 9</option>
              </select>
            </div>
          </div>
          <div className="order">
            <div className="left">
              <div className="for-img">
                <img src="./images/order.svg" alt="Order" />
              </div>
              <div className="info">
                <div className="title">
                  T-shirts with multiple colors, for men and lady
                </div>
                <div className="text">
                  Size: medium, Color: blue, Material: Plastic Seller: Artel
                  Market
                </div>
                <div className="btns">
                  <button type="button">Remove</button>
                  <button type="button">Save for later</button>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="price">$77.89</div>
              <select name="" id="">
                <option value="1">Qty: 1</option>
                <option value="3">Qty: 3</option>
                <option value="9">Qty: 9</option>
              </select>
            </div>
          </div>
          <div className="order">
            <div className="left">
              <div className="for-img">
                <img src="./images/order.svg" alt="Order" />
              </div>
              <div className="info">
                <div className="title">
                  T-shirts with multiple colors, for men and lady
                </div>
                <div className="text">
                  Size: medium, Color: blue, Material: Plastic Seller: Artel
                  Market
                </div>
                <div className="btns">
                  <button type="button">Remove</button>
                  <button type="button">Save for later</button>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="price">$77.89</div>
              <select name="" id="">
                <option value="1">Qty: 1</option>
                <option value="3">Qty: 3</option>
                <option value="9">Qty: 9</option>
              </select>
            </div>
          </div>

          <button className="backShop" type="button">
            Back to shop
          </button>
        </div>
      </div>
      <ShopNow />
    </div>
  );
}

export default Orders;
