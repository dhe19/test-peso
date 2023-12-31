import { Link } from "react-router-dom";
const Dropdown = () => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm bg-base-200 dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
      >
        <li>
          <Link to={`/`}>Inicio</Link>
        </li>
        <li>
          <Link to={`/promedio`}>Promedios</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
