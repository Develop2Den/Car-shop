import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import logo from '../../image/Logo.png';
import Icon from '../Icon';
import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const products = useSelector((state) => state.products.data);
    const [burgerShow, setBurgerShow] = useState(false);
    const favoritesLenght = products.filter((elem) => elem.isFavorite === true);
    const cartTotalQuantity = products.reduce(
        (total, elem) => total + (elem.cart.inCart ? elem.cart.count : 0),
        0,
    );

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 652.8) {
                setBurgerShow(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <header className={styles.head}>
                <div className={styles.header}>
                    <div className={styles.headerTitle}>
                        <Link to="shop">
                            <h1 className={styles.title}>Royal SUV</h1>
                            <img className={styles.logo} src={logo} alt="Logo" />
                        </Link>
                    </div>
                    {burgerShow && (
                        <ul className={styles.hamburgerNav}>
                            <li className={styles.hamburgerList}>
                                <Link className={styles.colorList} to="gallery">
                                    Gallery
                                </Link>
                            </li>
                            <li className={styles.hamburgerList}>
                                <Link className={styles.colorList} to="about">
                                    About Us
                                </Link>
                            </li>
                            <li className={styles.hamburgerList}>
                                <Link className={styles.colorList} to="contact">
                                    Contacts
                                </Link>
                            </li>
                            <li className={styles.hamburgerList}>
                                {favoritesLenght.length !== 0 && (
                                    <span className={styles.quantity}>
                                        {favoritesLenght.length}
                                    </span>
                                )}
                                <Link className={styles.colorList} to="favorites">
                                    Favorites
                                </Link>
                            </li>
                            <li className={styles.hamburgerList}>
                                {cartTotalQuantity !== 0 && (
                                    <span className={styles.quantity}>{cartTotalQuantity}</span>
                                )}
                                <Link className={styles.colorList} to="cart">
                                    Cart
                                </Link>
                            </li>
                        </ul>
                    )}
                    <input
                        checked={burgerShow}
                        onChange={() => setBurgerShow(!burgerShow)}
                        className={styles.checkbox}
                        type="checkbox"
                    />
                    <div className={styles.hamburgerLines}>
                        <span className={classNames(styles.line, styles.line1)}></span>
                        <span className={classNames(styles.line, styles.line2)}></span>
                        <span className={classNames(styles.line, styles.line3)}></span>
                    </div>

                    <ul className={styles.headerNav}>
                        <li>
                            <Link className={styles.headerNavList} to="gallery">
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <NavLink className={styles.headerNavList} to="about">
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={styles.headerNavList} to="contact">
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                    <ul className={styles.headerIcon}>
                        <li className={styles.headerIconLists}>
                            {favoritesLenght.length !== 0 && (
                                <div className={styles.quantity}>{favoritesLenght.length}</div>
                            )}
                            <Link to="favorites">
                                <Icon type="favorites" />
                            </Link>
                        </li>
                        <li className={styles.headerIconList}>
                            {cartTotalQuantity !== 0 && (
                                <div className={styles.quantity}>{cartTotalQuantity}</div>
                            )}
                            <Link to="cart">
                                <Icon type="cart" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
            <hr className={styles.hr}></hr>
        </>
    );
}

export default Header;
