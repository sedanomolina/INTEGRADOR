import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import styles from './NavBar.module.css'
// import '../../custon'


export default function NavBar() {
    useEffect(() => {
        const nav = document.getElementById('myNav');
        window.addEventListener('scroll', function () {
            const scrollPosition = window.scrollY;
            scrollPosition > 0
                ? nav.classList.add(styles['nav__scrolled'])
                : nav.classList.remove(styles['nav__scrolled']);
        });
    }, []);
    return (
        <div className={styles.nav} >
            <input className={styles.input} type="checkbox" />
            <span></span>
            <span></span>
            <nav id="myNav" className={`${styles.navMenu} ${styles.menu}`}>

                <li><Link to={'/log-out'} >Log out</Link></li>

                <li> <Link className="a" to={'/home'} >Home</Link></li>

                <li><Link to={'/search'} >Search</Link></li>

                <li><Link to={'/about'} >About</Link></li>

                <li><Link to={'/favorites'} >Favorites</Link></li>

                <div className={styles.dot} ></div>
            </nav>


        </div>
    )
}