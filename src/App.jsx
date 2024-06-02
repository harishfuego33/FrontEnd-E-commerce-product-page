import Nav from "./navBar";
import Section from "./section";
import { useState } from "react";
const App = () => {
  const [cartcounter, setcartCounter] = useState(0);
  const [visible, setVisible] = useState(false);
  return (
    <main className="sneaker__main">
      <Nav
        cartcounter={cartcounter}
        setVisible={setVisible}
        visible={visible}
      />
      <Section setcartCounter={setcartCounter} visible={visible} />
    </main>
  );
};
export default App;
