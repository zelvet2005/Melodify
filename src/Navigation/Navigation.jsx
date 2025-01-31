import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  const base = import.meta.env.BASE_URL;

  return (
    <nav>
      <ul>
        <li>
          <Link to={`${base}all`}>All songs</Link>
        </li>
        <li>
          <Link to={`${base}favorite`}>Favorite</Link>
        </li>
      </ul>
    </nav>
  );
}
