import React, { useState } from 'react';
import style from './mobileMenu.module.scss';
import { Sidebar } from 'primereact/sidebar';
import { NavLink } from 'react-router-dom';
import { ABOUT, ADD_BLOG, CONTACT, HOME } from '../../_utility/menuItem';

const MobileMenu = () => {
  const [visibleCustomToolbar, setVisibleCustomToolbar] = useState(false);
  return (
    <div className={style.menu}>
      <h1 className={style.logo}>
        <NavLink className={style.logoLink} to="/">
          Bhaskar Das
        </NavLink>
      </h1>
      <div>
        <Sidebar
          visible={visibleCustomToolbar}
          onHide={() => setVisibleCustomToolbar(false)}
          position="right"
          transitionOptions={null}
        >
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
        </Sidebar>
        <i
          className="pi pi-bars"
          onClick={() => setVisibleCustomToolbar(true)}
          style={{
            fontSize: '1.5rem',
            marginTop: '1.5rem',
            color: 'rgba(255, 255, 255, 0.7)',
          }}
        />
      </div>
    </div>
  );
};

export default MobileMenu;
