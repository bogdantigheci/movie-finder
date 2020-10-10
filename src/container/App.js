import React from 'react';
import Header from '../components/Header/Header';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Backdrop from '../components/Backdrop/Backdrop';
import Footer from '../components/Footer/Footer';
import Content from '../components/Content/Content';

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = React.useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };
  let backdrop;
  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }
  return (
    <div>
      <Header
        show={sideDrawerOpen}
        drawerClickHandler={drawerToggleClickHandler}
      />
      <Content />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}
      <Footer />
    </div>
  );
};

export default App;
