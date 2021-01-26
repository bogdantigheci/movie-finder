import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = (props) => {
  return (
    <header className="navbar wrap nav_section">
      <nav
        className="navbar navbar-b navbar-reduce navbar-expand-md fixed-top"
        id="mainNav"
      >
        <div className="container-fluid toolbar">
          <div className="toolbar__toggle-button">
            <DrawerToggleButton
              sideDrawerOpen={props.show}
              click={props.drawerClickHandler}
            />
          </div>
          <div className="toolbar__logo">
            <span className="logo_title">Your Favorite </span>Movies & Shows
          </div>
          <div className="spacer" />
        </div>
      </nav>
    </header>
  );
};

export default toolbar;
