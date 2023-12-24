import ShopNow from "../shopNow/ShopNow";
import "./orders.scss";
import { NavLink } from "react-router-dom";
import { useReducer } from "react";

function Orders() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "STATE_1":
        console.log(action.type);
        state = {
          ...state,
          state1: !state.state1,
        };
        break;
      case "STATE_2":
        state = {
          ...state,
          state2: !state.state2,
        };
        break;
      case "STATE_3":
        state = {
          ...state,
          state3: !state.state3,
        };
        break;
      default:
        break;
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducer, {
    state1: false,
    state2: false,
    state3: false,
  });

  const boolenFunc = (type) => {
    dispatch({ type: type });
  };
  return (
    <div>
      <div className="container">
        <div className="order-title">
          Orders <span>(3)</span>
          {console.log(state)}
        </div>
        <div className="orders">
          <div className={state.state1 ? "d-none" : "order"}>
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
                  <button onClick={() => boolenFunc("STATE_1")} type="button">
                    Remove
                  </button>
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
          <div className={state.state2 ? "d-none" : "order"}>
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
                  <button onClick={() => boolenFunc("STATE_2")} type="button">
                    Remove
                  </button>
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
          <div className={state.state3 ? "d-none" : "order"}>
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
                  <button onClick={() => boolenFunc("STATE_3")} type="button">
                    Remove
                  </button>
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
            <NavLink to="/">Back to shop</NavLink>
          </button>
        </div>
      </div>
      <ShopNow />
    </div>
  );
}

export default Orders;
