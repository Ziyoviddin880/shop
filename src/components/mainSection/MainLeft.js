import "./mainLeft.scss";
// import { useState } from "react";
import { useReducer } from "react";

function MainLeft({ checkboxValue, setCheckboxValue }) {
  // Select open close functions
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_BRANDS":
        state = {
          ...state,
          isBrands: !state.isBrands,
        };
        break;
      case "SET_CATEGORY":
        state = {
          ...state,
          isCategory: !state.isCategory,
        };
        break;
      case "SET_FEATURES":
        state = {
          ...state,
          isFeatures: !state.isFeatures,
        };
        break;
      case "SET_SELECTBRANDS":
        state = {
          ...state,
          selectBrands: !state.selectBrands,
        };
        break;
      case "SET_SELECTCATEGORY":
        state = {
          ...state,
          selectCategory: !state.selectCategory,
        };
        break;
      case "SET_SELECTFEATURES":
        state = {
          ...state,
          selectFeatures: !state.selectFeatures,
        };
        break;
      default:
        break;
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducer, {
    isBrands: false,
    isCategory: false,
    isFeatures: false,
    selectCategory: true,
    selectBrands: true,
    selectFeatures: true,
  });

  const boolenFunc = (type) => {
    dispatch({ type: type });
  };

  // Get select values

  const getVal = (val, change) => {
    if (val) {
      checkboxValue.push(change);
      const newChexboxVal = [...checkboxValue];
      setCheckboxValue(newChexboxVal);
    } else {
      const index = checkboxValue.findIndex((val) => {
        return val === change;
      });

      checkboxValue.splice(index, 1);
      const newChexboxVal = [...checkboxValue];
      setCheckboxValue(newChexboxVal);
    }
  };
  return (
    <div className="mainLeft">
      <hr />
      <div className="select">
        <div
          onClick={() => {
            boolenFunc("SET_SELECTCATEGORY");
          }}
          className="select-title"
        >
          Category{" "}
          <span>
            <i
              className={
                state.selectCategory
                  ? "fa-solid fa-chevron-right"
                  : "fa-solid fa-chevron-right close"
              }
            ></i>
          </span>
        </div>
        <ul className={state.selectCategory ? "d-block" : "d-none"}>
          <li>Mobile accessory</li>
          <li>Electronics</li>
          <li className={state.isCategory ? "d-block" : "d-none"}>
            Smartphones
          </li>
          <li className={state.isCategory ? "d-block" : "d-none"}>
            Modern tech
          </li>
        </ul>
        <div
          className={state.selectCategory ? "d-block allSee" : "d-none"}
          onClick={() => {
            boolenFunc("SET_CATEGORY");
          }}
        >
          See all
        </div>
      </div>
      <hr />
      <div className="select">
        <div
          onClick={() => {
            boolenFunc("SET_SELECTBRANDS");
          }}
          className="select-title"
        >
          Brands{" "}
          <span>
            <i
              className={
                state.selectBrands
                  ? "fa-solid fa-chevron-right"
                  : "fa-solid fa-chevron-right close"
              }
            ></i>
          </span>
        </div>
        <ul className={state.selectBrands ? "d-block" : "d-none"}>
          <li>
            <input
              onChange={(e) => {
                getVal(e.target.checked, "samsung");
              }}
              type="checkbox"
            />
            <span>Samsung</span>
          </li>
          <li>
            <input
              onChange={(e) => {
                getVal(e.target.checked, "apple");
              }}
              type="checkbox"
            />
            <span>Apple</span>
          </li>
          <li>
            <input
              onChange={(e) => {
                getVal(e.target.checked, "huawei");
              }}
              type="checkbox"
            />
            <span>Huawei</span>
          </li>
          <li className={state.isBrands ? "d-block" : "d-none"}>
            <input
              onChange={(e) => {
                getVal(e.target.checked, "pocco");
              }}
              type="checkbox"
            />
            <span>Pocco</span>
          </li>
          <li className={state.isBrands ? "d-block" : "d-none"}>
            <input
              onChange={(e) => {
                getVal(e.target.checked, "lenovo");
              }}
              type="checkbox"
            />
            <span>Lenovo</span>
          </li>
        </ul>
        <div
          onClick={() => {
            boolenFunc("SET_BRANDS");
          }}
          className={state.selectBrands ? "d-block allSee" : "d-none"}
        >
          See all
        </div>
      </div>
      <hr />
      <div className="select">
        <div
          onClick={() => {
            boolenFunc("SET_SELECTFEATURES");
          }}
          className="select-title"
        >
          Features{" "}
          <span>
            <i
              className={
                state.selectFeatures
                  ? "fa-solid fa-chevron-right"
                  : "fa-solid fa-chevron-right close"
              }
            ></i>
          </span>
        </div>
        <ul className={state.selectFeatures ? "d-block" : "d-none"}>
          <li>
            <input
              onChange={(e) => {
                getVal(e.target.checked, "metallic");
              }}
              type="checkbox"
            />
            <span>Metallic</span>
          </li>
          <li>
            <input
              onChange={(e) => {
                getVal(e.target.checked, "palstic cover");
              }}
              type="checkbox"
            />
            <span>Plastic Cover</span>
          </li>
          <li>
            <input
              onChange={(e) => {
                getVal(e.target.checked, "super power");
              }}
              type="checkbox"
            />
            <span>Super power</span>
          </li>
          <li className={state.isFeatures ? "d-block" : "d-none"}>
            <input
              onChange={(e) => {
                getVal(e.target.checked, "large memory");
              }}
              type="checkbox"
            />
            <span>Large memory</span>
          </li>
          <li className={state.isFeatures ? "d-block" : "d-none"}>
            <input
              onChange={(e) => {
                getVal(e.target.checked, "8gb ram");
              }}
              type="checkbox"
            />
            <span>8GB Ram</span>
          </li>
        </ul>
        <div
          onClick={() => {
            boolenFunc("SET_FEATURES");
          }}
          className={state.selectFeatures ? "d-block allSee" : "d-none"}
        >
          See all
        </div>
      </div>
    </div>
  );
}

export default MainLeft;
