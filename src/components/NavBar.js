import React from 'react';

const NavBar = (props) => {
  const { value } = props;
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <p className="navbar-brand">Movie Search App</p>
          <form className="d-flex input-group-lg">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Find a movie"
              aria-label="Search"
              value={value}
              onChange={(event) => props.setSearch(event.target.value)}
            />
          </form>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
