import React from 'react';
import styles from './AboutPage.module.scss';

function AboutPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About Us</h1>
            <p className={styles.text}>
                We welcome you to your favorite online store&nbsp;-&nbsp;
                <span className={styles.textTitle}>Royal SUV</span>! The products that we offer you
                are designed to bring warmth, comfort and coziness to your home.
            </p>
            <h2 className={styles.subTitle}>Who are we?</h2>
            <p className={styles.text}>
                A team that is willing and ready to answer all your, even the most tricky and
                uncomfortable questions regarding the products you are interested in. You don`t even
                have to buy bed linen, a blanket or a pillow from us. Call to talk, ask questions.
                We are happy to hear from everyone. And there you will understand that you have made
                the right choice and become our constant friend and beloved client.
            </p>
            <h2 className={styles.subTitle}>What do we offer you?</h2>
            <p className={styles.text}>
                At first glance, the answer is simple - buy household goods, bed linen, a blanket or
                pillow. But this is only at first glance. The main thing that we offer you is
                friendship and honest partnerships. We are always ready to advise and offer you
                exactly the product that you need. We will select for our beloved customers only
                what we would buy for ourselves. After all, we are your favorite online store `Royal
                SUV`.
            </p>
            <h2 className={styles.subTitles}>Our advantages:</h2>
            <ul className={styles.list}>
                <li className={styles.li}>
                    <h3 className={styles.italicTitle}>
                        Careful selection of products that we offer you:
                    </h3>
                    <p className={styles.text}>
                        Before starting our work, we carefully and thoroughly studied the demand and
                        wishes of consumers, because everyone wants to purchase a high-quality and
                        beautiful product at a reasonable price. The main rule of our work is the
                        replenishment and expansion of the range of goods, based on the analysis of
                        customer demand.
                    </p>
                </li>
                <li className={styles.li}>
                    <h3 className={styles.italicTitle}>
                        Serious selection of suppliers and manufacturers:
                    </h3>
                    <p className={styles.text}>
                        Before starting our work, we carefully and thoroughly studied the demand and
                        wishes of consumers, because everyone wants to purchase a high-quality and
                        beautiful product at a reasonable price. The main rule of our work is the
                        replenishment and expansion of the range of goods, based on the analysis of
                        customer demand.
                    </p>
                </li>
                <li className={styles.li}>
                    <h3 className={styles.italicTitle}>Providing quality services:</h3>
                    <p className={styles.text}>
                        Before starting our work, we carefully and thoroughly studied the demand and
                        wishes of consumers, because everyone wants to purchase a high-quality and
                        beautiful product at a reasonable price. The main rule of our work is the
                        replenishment and expansion of the range of goods, based on the analysis of
                        customer demand.
                    </p>
                </li>
                <li className={styles.li}>
                    <h3 className={styles.italicTitle}>A wide range of presented goods:</h3>
                    <p className={styles.text}>
                        Before starting our work, we carefully and thoroughly studied the demand and
                        wishes of consumers, because everyone wants to purchase a high-quality and
                        beautiful product at a reasonable price. The main rule of our work is the
                        replenishment and expansion of the range of goods, based on the analysis of
                        customer demand.
                    </p>
                </li>
                <li className={styles.li}>
                    <h3 className={styles.italicTitle}>
                        Prompt delivery and convenient form of payment:
                    </h3>
                    <p className={styles.text}>
                        Before starting our work, we carefully and thoroughly studied the demand and
                        wishes of consumers, because everyone wants to purchase a high-quality and
                        beautiful product at a reasonable price. The main rule of our work is the
                        replenishment and expansion of the range of goods, based on the analysis of
                        customer demand.
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default AboutPage;
