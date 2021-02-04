import React from 'react';

const sideDrawer = (props) => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul className="navbar-nav">
        <li className="nav-item nav-link">Will</li>
        <li className="nav-item nav-link">add more</li>
        <li className="nav-item nav-link">Categories</li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
