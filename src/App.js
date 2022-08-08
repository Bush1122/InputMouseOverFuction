import { useState } from "react";
import "./styles.css";

export default function App() {
  const [headingtext, SetHeadingtext] = useState();
  const [isMouseover, SetisMouseover] = useState(false);

  function handleClick() {
    SetHeadingtext("Successsful login");
  }

  function handleMouseover() {
    SetisMouseover(true);
  }
  function handleMouseout() {
    SetisMouseover(false);
  }

  return (
    <form>
      <h3>{headingtext}</h3>

      <label for="username" />
      <input type="text" placeholder="Email or Phone" id="username" />

      <label for="password" Password />
      <input type="password" placeholder="Password" id="password" />

      <button
        style={{ background: isMouseover ? "Yellow" : "White" }}
        onClick={handleClick}
        onMouseOver={handleMouseover}
        onMouseOut={handleMouseout}
      >
        Log In
      </button>
    </form>
  );
}
