const Navbar = ({ setToggle, children, onLogout }) => {
  return (
    <div className="navbar">
      <div className="brand">
        <div className="hamburger" onClick={setToggle}>
          <div />
          <div />
          <div />
        </div>
        <div className="logo">
          <a href="#!">Student Portal</a>
        </div>
      </div>
      <div className="left">
        {onLogout && (
          <button className="logout-button" onClick={onLogout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
