const CartItems = ({ imgUrl, name, cost, quantity }) => {
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
      <div className="delete-btn">
        <img src="./src/images/icon-delete.svg" alt="delete" />
      </div>
    </div>
  );
};
export default CartItems;
