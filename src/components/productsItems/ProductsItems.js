import "./productsItems.scss";
import { dataContext } from "../../App";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
function ProductsItems({ currentItems }) {
  const stars = ["s", "t", "a", "r", "s"];

  const { data, setData } = useContext(dataContext);
  const [likedPostId, setLikedPostId] = useState(null);
  const handleLikeClick = (postId) => {
    if (likedPostId !== postId) {
      const postIndex = data.findIndex((post) => post.id === postId);

      const newPosts = [...data];

      newPosts[postIndex].like += 1;

      setData(newPosts);
      console.log(data);

      setLikedPostId(postId);
    } else if (likedPostId === postId) {
      const postIndex = data.findIndex((post) => post.id === postId);
      const newPosts = [...data];

      newPosts[postIndex].like -= 1;
      setData(newPosts);
      setLikedPostId(null);
    }
  };

  // pagination

  return (
    <div className="products">
      {currentItems.map((item) => (
        <div key={item.id} className="product">
          <NavLink to={"product/" + item.id}>
            <div className="product-img">
              <img src={item.images[0]} alt="Telephone" />
            </div>
          </NavLink>

          <hr />
          <div className="productInfo">
            <div className="left-info">
              <div className="price">
                ${item.price} <span>${item.discount}</span>
              </div>
              <div className="stars">
                {stars
                  .slice(0, Math.round(item.star / 2))
                  .map((item, index) => (
                    <i key={index} className="fa-solid fa-star"></i>
                  ))}

                {stars
                  .slice(0, 5 - Math.round(item.star / 2))
                  .map((item, index) => (
                    <i key={index} className="fa-regular fa-star"></i>
                  ))}

                <span>{item.star}</span>
              </div>
              <div className="text-info">{item.text}</div>
            </div>
            <div
              onClick={() => handleLikeClick(item.id)}
              className="right-info"
            >
              <i
                className={
                  item.like > 0 ? "fa-solid fa-heart" : "fa-regular fa-heart"
                }
              ></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsItems;
