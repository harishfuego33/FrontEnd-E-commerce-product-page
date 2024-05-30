import cartIcon from "./images/icon-cart.svg";
import profileImage from "./images/image-avatar.png";
const Nav = () => {
  return (
    <nav className="sneaker__navBar">
      <ul className="navBar__options">
        {/* <li className="navBar__option"> */}
        <h1 className="navBar__heading">sneakers</h1>
        {/* </li> */}
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
    </nav>
  );
};
export default Nav;
