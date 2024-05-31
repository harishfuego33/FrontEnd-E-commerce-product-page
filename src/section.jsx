import { useState } from "react";
const Section = () => {
  const [active, setActive] = useState(1);
  const [counter, setCounter] = useState(0);
  function upcount() {
    setCounter(counter + 1);
  }
  function downcount() {
    if (counter > 0) setCounter(counter - 1);
  }

  return (
    <section className="sneaker__section">
      <div className="sneaker__gallery">
        <div className="sneaker__primary">
          <img
            src={`./src/images/image-product-${active}.jpg`}
            alt="sneaker-Image"
            className="profile__box-img"
          />
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
          <p className="sneaker__price">
            $125.00{" "}
            <div className="sneaker__offer-bg">
              <span className="sneaker__offer">50%</span>
            </div>
          </p>
          <p className="sneaker__price-cut">
            <s>$250.00</s>
          </p>
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
            <button className="add-to-cart">
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
    </section>
  );
};
export default Section;
