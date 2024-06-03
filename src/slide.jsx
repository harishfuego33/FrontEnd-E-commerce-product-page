const Slide = ({ visibleHamMenu, setvisibleHamMenu }) => {
  return (
    <aside className={`slide  ${visibleHamMenu ? "slideIn" : ""}`}>
      <div
        className="slide__box"
        onClick={() => setvisibleHamMenu(!visibleHamMenu)}
      >
        <div className="slide__close-btn">
          <img src="../public/images/icon-close.svg" alt="close-button" />
        </div>
        <ul className="slide__options">
          <li className="slide__option">Collections</li>
          <li className="slide__option">Men</li>
          <li className="slide__option">Women</li>
          <li className="slide__option">About</li>
          <li className="slide__option">Contact</li>
        </ul>
      </div>
    </aside>
  );
};
export default Slide;
