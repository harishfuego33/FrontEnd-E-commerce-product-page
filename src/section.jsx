import { useState } from "react";
// import Carts from "./cart";
const Section = ({
  setcartCounter,
  visible,
  overlayVisible,
  setOverlayVisible,
}) => {
  const [active, setActive] = useState(1);
  // const [cart, setCart] = useState(0);
  const [counter, setCounter] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = () => {
    const newItem = {
      id: Date.now(), // unique id
      imageUrl: "./src/images/image-product-1-thumbnail.jpg",
      description: "Fall Limited Edition Sneaker",
      price: 125.0,
      quantity: counter,
    };
    setCartItems([newItem]);
    setcartCounter(counter);
  };
  const deleteItemFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    setCounter(0);
    setcartCounter(0);
  };

  function upcount() {
    setCounter(counter + 1);
  }
  function downcount() {
    if (counter > 0) setCounter(counter - 1);
  }
  function up() {
    if (active < 4) setActive(active + 1);
  }
  function down() {
    if (active > 1) setActive(active - 1);
  }
  return (
    <section className="sneaker__section">
      <div className="sneaker__gallery">
        <div
          className="sneaker__primary"
          onClick={() => setOverlayVisible(!overlayVisible)}
        >
          <button className="img-btn forward-btn" onClick={() => down()}>
            <img
              src="./src/images/icon-previous.svg"
              alt="icon-previous"
              className="btn-fwrd"
            />
          </button>
          <img
            src={`./src/images/image-product-${active}.jpg`}
            alt="sneaker-Image"
            className="profile__box-img"
          />
          <button className=" img-btn backward-btn" onClick={() => up()}>
            <img
              src="./src/images/icon-next.svg"
              alt="icon-previous"
              className="btn-fwrd"
            />
          </button>
        </div>
        <div className="sneaker__pictures">
          <div
            className={`sneaker__picture ${active === 1 ? "active" : ""}`}
            onClick={() => setActive(1)}
          >
            <span className="overlay"></span>
            <img
              src="./src/images/image-product-1-thumbnail.jpg"
              alt="sneaker__image"
              className="profile__box-img"
            />
          </div>
          <div
            className={`sneaker__picture ${active === 2 ? "active" : ""}`}
            onClick={() => setActive(2)}
          >
            <span className="overlay"></span>
            <img
              src="./src/images/image-product-2-thumbnail.jpg"
              alt="sneaker__image"
              className="profile__box-img"
            />
          </div>
          <div
            className={`sneaker__picture ${active == 3 ? "active" : ""}`}
            onClick={() => setActive(3)}
          >
            <span className="overlay"></span>
            <img
              src="./src/images/image-product-3-thumbnail.jpg"
              alt="sneaker__image"
              className="profile__box-img"
            />
          </div>
          <div
            className={`sneaker__picture ${active === 4 ? "active" : ""}`}
            onClick={() => setActive(4)}
          >
            <span className="overlay"></span>
            <img
              src="./src/images/image-product-4-thumbnail.jpg"
              alt="sneaker__image"
              className="profile__box-img"
            />
          </div>
        </div>
      </div>
      <article className="sneaker__info">
        <div className="sneaker__infos">
          <h3 className="sneaker__company">SNEAKER COMPANY</h3>
          <h1 className="sneaker__edition">Fall Limited Edition Sneaker</h1>
          <p className="sneaker__discription">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole,they ll withstand everything
            the weather can offer.
          </p>
          <div className="sneaker__price">
            <div>
              $125.00{" "}
              <div className="sneaker__offer-bg">
                <span className="sneaker__offer">50%</span>
              </div>
            </div>
            <p className="sneaker__price-cut">
              <s>$250.00</s>
            </p>
          </div>
          <div className="sneaker__cart">
            <div className="sneaker__counter">
              <button className="sneaker__btn" onClick={() => downcount()}>
                <img src="./src/images/icon-minus.svg" alt="minus" />
              </button>
              <span>{counter}</span>
              <button className="sneaker__btn" onClick={() => upcount()}>
                <img src="./src/images/icon-plus.svg" alt="plus" />
              </button>
            </div>
            <button className="add-to-cart" onClick={() => addItemToCart()}>
              <img
                src="./src/images/icon-cart.svg"
                alt="addtocart"
                className="cart-img"
              />
              <span className="add-to-cart-text">add to cart</span>
            </button>
          </div>
        </div>
      </article>
      <div className={`cart-box ${visible ? "" : "hidden"}`}>
        <div className="cart">
          <span>Card</span>
        </div>
        <hr />
        {cartItems.length < 1 ? (
          <p className="cart-empty">Your cart is empty. </p>
        ) : (
          cartItems.map((cartDetails, index) => (
            <Carts
              key={index}
              id={cartDetails.id}
              imgUrl={cartDetails.imageUrl}
              name={cartDetails.description}
              cost={cartDetails.price}
              quantity={cartDetails.quantity}
              deleteItemFromCart={deleteItemFromCart}
            />
          ))
        )}
        <button
          className={`add-to-cart w-80 ${cartItems.length < 1 ? "hidden" : ""}`}
        >
          <span className="add-to-cart-text">check out</span>
        </button>
      </div>
    </section>
  );
};
const Carts = ({ id, imgUrl, name, cost, quantity, deleteItemFromCart }) => {
  return (
    <div className="cart-item">
      <div className="cart-img-box">
        <img src={imgUrl} alt="sneaker__image" className="profile__box-img" />
      </div>
      <div className="cart-info">
        <p className="sneaker__discription">{name}</p>
        <p className="sneaker__discription">
          ${cost} X {quantity}.00 <strong> ${cost * quantity}.00</strong>
        </p>
      </div>
      <div className="delete-btn" onClick={() => deleteItemFromCart(id)}>
        <img src="./src/images/icon-delete.svg" alt="delete" />
      </div>
    </div>
  );
};
export default Section;
