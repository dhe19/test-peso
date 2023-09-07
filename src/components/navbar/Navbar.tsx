import Dropdown from "./Dropdown";
const Navbar = () => {
  return (
    <div className="p-4">
      <div className="navbar bg-base-200 rounded-xl shadow-black/40 shadow-lg border border-white/10">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl uppercase">Dostics</a>
        </div>
        <div className="navbar-end">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
