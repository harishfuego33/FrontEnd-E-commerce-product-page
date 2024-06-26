const Nav = ({
  cartcounter,
  setVisible,
  visible,
  setvisibleHamMenu,
  visibleHamMenu,
}) => {
  return (
    <nav className="sneaker__navBar">
      <div className="neaker__nav-btn">
        <button
          className="menu"
          onClick={() => setvisibleHamMenu(!visibleHamMenu)}
        >
          <img
            src=" /images/icon-menu.svg"
            alt="heading-logo"
            className="profile__box-img"
          />
        </button>
        <div className="navBar__heading">
          <img
            src=" /images/logo.svg"
            alt="heading-logo"
            className="profile__box-img"
          />
        </div>
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
          <img
            src="/images/icon-cart.svg"
            alt="cart_icon"
            className="log__box-img"
          />
        </div>
        <div className="profile__box">
          <img
            src="/images/image-avatar.png"
            alt="Profileimage"
            className="profile__box-img"
          />
        </div>
      </div>
    </nav>
  );
};
export default Nav;
