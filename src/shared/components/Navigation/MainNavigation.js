import React,{useState} from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import Navlinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import './MainNavigation.css';

const MainNavigation = props => {
  const [drawerIsopeon,setDrawerIsopen] = useState(false);

  const openDrawer = () =>{
    setDrawerIsopen(true);
  }

  const closeDrawer = () =>{
    setDrawerIsopen(false);
  }

  return (
    <React.Fragment>
      { drawerIsopeon && <Backdrop onClick={closeDrawer}/>}
        <SideDrawer show={drawerIsopeon}>
        <nav className="main-navigation__drawer-nav">
            <Navlinks/>
          </nav>
        </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <Navlinks/>
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
