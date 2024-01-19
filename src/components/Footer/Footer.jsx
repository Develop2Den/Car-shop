import React from 'react';
import styles from './Footer.module.scss';
import { NavLink, Link } from 'react-router-dom';
import Icon from '../../components/Icon';

const Footer = () => {
    return (
        <>
            <footer className={styles.footer} data-testid="footer">
                <div className={styles.footerBody}>
                    <nav className={styles.footerNav}>
                        <ul className={styles.menu_list}>
                            <li className={styles.menu_list_item}>
                                <NavLink className={styles.links} to="shop" target="_top">
                                    Shop
                                </NavLink>
                            </li>
                            <li className={styles.menu_list_item}>
                                <NavLink className={styles.links} to="gallery" target="_top">
                                    Gallery
                                </NavLink>
                            </li>
                            <li className={styles.menu_list_item}>
                                <NavLink className={styles.links} to="service" target="_top">
                                    Payment & Delivery
                                </NavLink>
                            </li>
                            <li className={styles.menu_list_item}>
                                <NavLink className={styles.links} to="service" target="_top">
                                    Returns
                                </NavLink>
                            </li>
                            <li className={styles.menu_list_item}>
                                <NavLink className={styles.links} to="service" target="_top">
                                    Privacy Policy
                                </NavLink>
                            </li>
                            <li className={styles.menu_list_item}>
                                <NavLink className={styles.links} to="service" target="_top">
                                    Terms of service
                                </NavLink>
                            </li>
                        </ul>
                        <ul className={styles.about_list}>
                            <li className={styles.about_list_item}>
                                <NavLink className={styles.links} to="about" target="_top">
                                    About
                                </NavLink>
                            </li>
                            <li className={styles.about_list_item}>
                                <NavLink className={styles.links} to="about" target="_top">
                                    About Us
                                </NavLink>
                            </li>
                            <li className={styles.about_list_item}>
                                <NavLink className={styles.links} to="shop" target="_top">
                                    Reviews
                                </NavLink>
                            </li>
                        </ul>
                        <div className={styles.contact}>
                            <h2 className={styles.contact_title}>Contact Us</h2>
                            <a href="mailto:RoyalSUV@gmail.com" className={styles.contact_email}>
                                RoyalSUV@gmail.com
                            </a>
                            <a
                                href="https://maps.app.goo.gl/amWXk1gj7PphUd3h9"
                                className={styles.contact_address}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Autopark "Royal SUV" <br /> Aldersgate St, London EC1A 4JA
                            </a>
                            <a href="tel: +38 099 999 99 99" className={styles.contact_tel}>
                                +38 099 999 99 99
                            </a>
                            <div className={styles.promotion_btn}>
                                <p className={styles.followUs}>Follow Us</p>
                                <ul className={styles.social_list}>
                                    <li className={styles.social_list_item}>
                                        <Link target="_blank" to="https://www.facebook.com/">
                                            <Icon type="FacebookMin" />
                                        </Link>
                                    </li>
                                    <li className={styles.social_list_item}>
                                        <Link target="_blank" to="https://twitter.com/">
                                            <Icon type="TwitterMin" />
                                        </Link>
                                    </li>
                                    <li className={styles.social_list_item}>
                                        <Link target="_blank" to="https://www.instagram.com/">
                                            <Icon type="InstagramMin" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className={styles.copyr}>
                    <p className={styles.copyrText}>Develop2Den &copy; 2023</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
