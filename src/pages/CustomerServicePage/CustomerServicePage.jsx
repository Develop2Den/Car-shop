import React, { useState } from 'react';
import styles from './CustomerServicePage.module.scss';
import ServiceTopicItem from './ServiceTopicItem/ServiceTopicItem';
import contentList from './content';
import classNames from 'classnames';

function CustomerServicePage() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const scrollToAnchor = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const id = e.target.href.split('#')[1];
        const dest = document.getElementById(id).offsetTop;
        // eslint-disable-next-line no-restricted-globals
        scrollTo({
            top: dest,
            behavior: 'smooth',
        });
        setIsNavVisible(false);
    };

    const showHideNavMenu = (e) => {
        e.stopPropagation();
        setIsNavVisible((prevState) => !prevState);
    };
    const onNavListBlurHandler = (e) => {
        e.stopPropagation();
        if (!e.relatedTarget) {
            setIsNavVisible(false);
            return;
        }
        if (e.relatedTarget.classList.contains(styles.navMenuLink)) return;

        setIsNavVisible(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.navWrapper}>
                <h3 className={styles.navHeader}>TERMS OF SERVICE</h3>
                <nav className={styles.navMenu} role="presentation" onBlur={onNavListBlurHandler}>
                    <h3>
                        <button
                            className={classNames({
                                [styles.navHeaderBtn]: true,
                                [styles.navVisible]: isNavVisible,
                            })}
                            onClick={showHideNavMenu}
                        >
                            TERMS OF SERVICE
                        </button>
                    </h3>
                    <ul
                        className={classNames({
                            [styles.navMenuList]: true,
                            [styles.navVisible]: isNavVisible,
                        })}
                    >
                        {contentList.map(({ id, header }) => (
                            <li key={id} className={styles.navMenuListItem}>
                                <a
                                    href={`#${id}`}
                                    className={styles.navMenuLink}
                                    onClick={scrollToAnchor}
                                >
                                    {header}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <ul className={styles.serviceTopicsList}>
                {contentList.map((item) => (
                    <li key={item.id} className={styles.topicItem}>
                        <ServiceTopicItem {...item} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CustomerServicePage;
