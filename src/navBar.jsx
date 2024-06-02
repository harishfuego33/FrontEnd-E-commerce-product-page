import cartIcon from "./images/icon-cart.svg";
import profileImage from "./images/image-avatar.png";
const Nav = ({ cartcounter, setVisible, visible }) => {
  return (
    <nav className="sneaker__navBar">
      <div className="neaker__nav-btn">
        <h1 className="navBar__heading">
          <img src="./src/images/logo.svg" alt="heading-logo" />
        </h1>
        <ul className="navBar__options">
          <li className="navBar__option">Collections</li>
          <li className="navBar__option">Men</li>
          <li className="navBar__option">Women</li>
          <li className="navBar__option">About</li>
          <li className="navBar__option">Contact</li>
        </ul>
      </div>
      <div className="user">
        <div
          data-line={cartcounter}
          className="log__box"
          onClick={() => setVisible(!visible)}
        >
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
