import React from 'react';

function NavBarItem (props) {
  return (
    <div className={props.li.liclassName}>
      <a className={props.li.aclassName} href={props.li.href}><i className={props.li.icon} />{props.li.text}</a>
    </div>
  )
}

export default NavBarItem