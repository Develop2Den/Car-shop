import React from 'react';
import styles from './ContactsPage.module.scss';

function ContactsPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Contacts</h1>
            <h2 className={styles.textTitle}>We are a real online store of SUV!</h2>
            <p className={styles.text}>We are 24 hours a day on the Internet!</p>
            <p className={styles.text}>
                Call centers of the Royal SUV online store are located in Kyiv and London. There is
                no showroom. Warehouses of the online store are located in the cities: Kyiv, London,
                New York, Tokio and Berlin. Products presented on the site are delivered to
                customers directly from warehouses and factories of manufacturers to any convenient
                branch of `SeaBreeze` throughout Ukraine and by couriers of the online store to your
                home or office.
            </p>
            <div className={styles.body}>
                <div className={styles.info}>
                    <h2 className={styles.textTitles}>Our phones:</h2>
                    <p className={styles.text}>+38(050) 777-77-77 </p>
                    <p className={styles.text}>+38(097) 066-66-66 </p>
                    <p className={styles.text}>+38(063) 222-22-22 - Viber</p>
                    <p className={styles.text}>Skype: RoyalSUV.com.ua</p>
                    <h2 className={styles.warnText}>
                        ONLINE orders are accepted around the clock!
                    </h2>
                    <h2 className={styles.textTitle}>Call Center Hours:</h2>
                    <p className={styles.textBold}>Mon - Fri 8.00-18.00</p>
                    <p className={styles.textBold}>Sat - Sun: we accept orders online</p>
                </div>
                <div className={styles.map}>
                    <h2 className={styles.mapTextTitles}>Find us on the map:</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620.6545526082533!2d-0.09832083033473141!3d51.52022003272549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b569de38cd5%3A0xc891c38c7372282b!2sBarbican!5e0!3m2!1suk!2sua!4v1701864190875!5m2!1suk!2sua"
                        height="300"
                        style={{ border: `${0}em`, width: `${100}%` }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default ContactsPage;
