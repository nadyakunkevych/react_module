import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import css from "./layout.module.css";

const Layout = () => {
    return (
        <div className={css.header}>
            <NavLink to ="/todos">Todos</NavLink>
            <NavLink to ="/albums">Albums</NavLink>
            <NavLink to ="/comments">Comments</NavLink>
            <Outlet/>
        </div>
    );
};

export default Layout;