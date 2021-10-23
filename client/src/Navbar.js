const Navbar = () => {
    return (
      <header className="join-header">
      <h1><i className="fab fa-discord"></i> Discloned</h1>
        <nav className="navbar">
            <div>
                <ul className="links">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/settings">Settings</a></li>
                  <li><a href="/rules">Chat Rules</a></li>
                </ul>
            </div>
        </nav>
     </header>
     );
  }
  
  export default Navbar;