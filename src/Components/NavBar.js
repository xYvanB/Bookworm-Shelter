import React from 'react';
import NavBarItem from './NavBarItem';
import NavbarData from '../Data/NavbarData';

function NavBar () {
  const NavBarItems = NavbarData.map (item => <NavBarItem key={item.id} li={item}/>)
  return (
    <nav>
      {NavBarItems}
    </nav>
  )
}

export default NavBar