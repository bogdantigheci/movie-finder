import React from 'react';

const sideDrawer = (props) => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul className="navbar-nav">
        <li className="nav-item nav-link">About</li>
        <li className="nav-item nav-link">Work</li>
        <li className="nav-item nav-link">Contact</li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
