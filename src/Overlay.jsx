import { useState } from "react";

const Overlay = ({ overlayVisible, setOverlayVisible }) => {
  const [active, setActive] = useState(1);
  function up() {
    if (active < 4) setActive(active + 1);
  }
  function down() {
    if (active > 1) setActive(active - 1);
  }
  return (
    <section className={`sneaker__overlay ${overlayVisible ? " hidden" : ""}`}>
      <div className="sneaker__gallery w-50">
        <div
          className="close-btn"
          onClick={() => setOverlayVisible(!overlayVisible)}
        >
          <img src=". /images/icon-close.svg" alt="close-button" />
        </div>
        <div className="sneaker__primary">
          <button
            className="img-btn forward-btn visible"
            onClick={() => down()}
          >
            <img
              src=" /images/icon-previous.svg"
              alt="icon-previous"
              className="btn-fwrd"
            />
          </button>
          <img
            src={` /images/image-product-${active}.jpg`}
            alt="sneaker-Image"
            className="profile__box-img"
          />
          <button
            className=" img-btn backward-btn visible"
            onClick={() => up()}
          >
            <img
              src=" /images/icon-next.svg"
              alt="icon-previous"
              className="btn-fwrd "
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
              src=" /images/image-product-1-thumbnail.jpg"
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
              src=" /images/image-product-2-thumbnail.jpg"
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
              src=" /images/image-product-3-thumbnail.jpg"
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
              src=" /images/image-product-4-thumbnail.jpg"
              alt="sneaker__image"
              className="profile__box-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Overlay;
