import cartIcon from "./images/icon-cart.svg";
import profileImage from "./images/image-avatar.png";
const Nav = () => {
  return (
    <nav className="sneaker__navBar">
      <ul className="navBar__options">
        <h1 className="navBar__heading">
          <img src="./src/images/logo.svg" alt="heading-logo" />
        </h1>
        <li className="navBar__option">Collections</li>
        <li className="navBar__option">Men</li>
        <li className="navBar__option">Women</li>
        <li className="navBar__option">About</li>
        <li className="navBar__option">Contact</li>
      </ul>
      <div className="user">
        <div className="log__box">
          <img src={cartIcon} alt="cart_icon" className="log__box-img" />
        </div>
        <div className="profile__box">
          <img
            src={profileImage}
            alt="Profileimage"
            className="profile__box-img"
          />
        </div>
      </div>
      <div className="cart-box">
        <div className="cart">
          <span>Card</span>
        </div>
        <hr />
      </div>
    </nav>
  );
};
export default Nav;
