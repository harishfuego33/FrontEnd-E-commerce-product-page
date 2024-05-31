import { useState } from "react";
import Nav from "./navBar";
import Section from "./section";
const App = () => {
  const [arr, setarr] = useState([]);
  return (
    <main className="sneaker__main">
      <Nav />
      <Section />
    </main>
  );
};
export default App;
