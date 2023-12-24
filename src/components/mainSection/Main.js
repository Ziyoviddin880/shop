import "./main.scss";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";
import { useState } from "react";

function Main() {
  const [checkboxValue, setCheckboxValue] = useState([]);

  // const reducer = (state,action) => {
  //   switch(action.type){
  //     case "SAMSUNG":
  //     state={
  //       ...state,

  //     }
  //   }
  // };

  // const [state, dispatch] = useReducer(reducer, {});

  return (
    <div className="container">
      <div className="mobile-category">
        <div className="mobile-category__menu">
          <div className="mobile-category__menu-item">Tablets</div>
          <div className="mobile-category__menu-item">Tablets</div>
          <div className="mobile-category__menu-item">Tablets</div>
          <div className="mobile-category__menu-item">Tablets</div>
          <div className="mobile-category__menu-item">Tablets</div>
          <div className="mobile-category__menu-item">Tablets</div>
          <div className="mobile-category__menu-item">Tablets</div>
          <div className="mobile-category__menu-item">Tablets</div>
          <div className="mobile-category__menu-item">Tablets</div>
        </div>
      </div>
      <div className="mainSection">
        <MainLeft
          checkboxValue={checkboxValue}
          setCheckboxValue={setCheckboxValue}
        />
        <MainRight
          setCheckboxValue={setCheckboxValue}
          checkboxValue={checkboxValue}
        />
      </div>
    </div>
  );
}

export default Main;
