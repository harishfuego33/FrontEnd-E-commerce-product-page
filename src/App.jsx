import Nav from "./navBar";
import Section from "./section";
import { useState } from "react";
import Overlay from "./Overlay";
import Slide from "./slide";
const App = () => {
  const [cartcounter, setcartCounter] = useState(0);
  const [visible, setVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [visibleHamMenu, setvisibleHamMenu] = useState(false);
  return (
    <main className="sneaker__main">
      <Nav
        cartcounter={cartcounter}
        setVisible={setVisible}
        visible={visible}
        visibleHamMenu={visibleHamMenu}
        setvisibleHamMenu={setvisibleHamMenu}
      />
      <Section
        setcartCounter={setcartCounter}
        visible={visible}
        setOverlayVisible={setOverlayVisible}
        overlayVisible={overlayVisible}
      />
      <Overlay
        overlayVisible={overlayVisible}
        setOverlayVisible={setOverlayVisible}
      />
      <Slide
        visibleHamMenu={visibleHamMenu}
        setvisibleHamMenu={setvisibleHamMenu}
      />
    </main>
  );
};
export default App;
