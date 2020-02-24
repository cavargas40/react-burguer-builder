import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliar/Auxiliar';
import './SideDrawer.css';

const SideDrawer = props => {
  let attachClasses = ['SideDrawer', 'Close'];
  if (props.open) {
    attachClasses = ['SideDrawer', 'Open'];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachClasses.join(' ')}>
        <div className="LogoContainer">
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;