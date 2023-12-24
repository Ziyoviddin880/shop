import "./mainRight.scss";
import { dataContext } from "../../App";
import { useContext, useState } from "react";
import ProductsItems from "../productsItems/ProductsItems";
function MainRight({ setCheckboxValue, checkboxValue }) {
  const { data } = useContext(dataContext);

  const clearMenu = () => {
    checkboxValue = [];
    const clearMenu = [...checkboxValue];
    setCheckboxValue(clearMenu);
    console.log(checkboxValue);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Sahifa o'lchami

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const totalItems = data.length;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="mainRight">
      {checkboxValue.length > 0 ? (
        <div className="categories">
          {checkboxValue.map((item, index) => (
            <div key={index} className="menu">
              <span>{item}</span>
              <i className="fa-solid fa-xmark"></i>
            </div>
          ))}

          <div onClick={clearMenu} className="menu">
            Clear all filter
          </div>
        </div>
      ) : (
        ""
      )}

      <ProductsItems currentItems={currentItems} />

      <div className="limit-product">
        <span className="limit">
          Show
          <select>
            <option value="">10</option>
            <option value="">6</option>
            <option value="">20</option>
          </select>
        </span>
        <span className="pagination">
          {pageNumbers.map((number) => (
            <span key={number} onClick={() => paginate(number)}>
              {number}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

export default MainRight;
