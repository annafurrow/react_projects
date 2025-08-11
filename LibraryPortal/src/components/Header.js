function Header() {
  return (
    //when returning components in react - should only be one with nested items inside - cannot add extra tags because that's just how react is :)
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Library</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>
  );
}

export default Header;