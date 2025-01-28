import "./Header.css";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <header>
      <h1>
        <img
          src="images/favicon.svg"
          alt="logo"
          className="logo"
          draggable={false}
        />
        Melodify
      </h1>
      <Navigation />
    </header>
  );
}
