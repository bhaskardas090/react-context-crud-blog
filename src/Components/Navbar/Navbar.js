import React from 'react';
import style from './navbar.module.scss';
import { NavLink } from 'react-router-dom';
import { ABOUT, ADD_BLOG, CONTACT, HOME } from '../../_utility/menuItem';
const Navbar = () => {
  return (
    <>
      <div className={style.menu}>
        <h1 className={style.logo}>
          <NavLink to={HOME} className={style.logoLink}>
            Bhaskar Das
          </NavLink>
        </h1>
        <ul className={style.navLink}>
          <li className={style.link}>
            <NavLink
              exact
              activeClassName={style.selected}
              className={style.Link}
              to={HOME}
            >
              Home
            </NavLink>
          </li>
          <li className={style.link}>
            <NavLink
              activeClassName={style.selected}
              className={style.Link}
              to={ADD_BLOG}
            >
              Add Blog
            </NavLink>
          </li>
          <li className={style.link}>
            <NavLink
              activeClassName={style.selected}
              className={style.Link}
              to={ABOUT}
            >
              About
            </NavLink>
          </li>
          <li className={style.link}>
            <NavLink
              activeClassName={style.selected}
              className={style.Link}
              to={CONTACT}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <hr className={style.menuBreak} />
    </>
  );
};

export default Navbar;
