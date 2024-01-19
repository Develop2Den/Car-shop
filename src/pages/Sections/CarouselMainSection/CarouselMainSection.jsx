import React from 'react';
import styles from './CarouselMainSection.module.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from './image/Cadillac.jpg';
import img2 from './image/avtomobil_vnedorozhnik_igrushka_200172_1920x1080.jpg';
import img3 from './image/land_rover_defender.jpg';
import img4 from './image/hummer_h2.jpg';
import classNames from 'classnames';

function CarouselMainSection() {
    return (
        <section className={styles.carousel}>
            <h1 className={styles.title}>Welcome to our site!</h1>
            <Carousel showThumbs={false} autoPlay infiniteLoop showIndicators={false}>
                <div>
                    <img src={img1} className={styles.img} alt="img-avto" />
                    <p className={classNames(styles.text, 'legend')}>
                        Do you want an executive SUV?
                    </p>
                </div>
                <div>
                    <img className={styles.img} src={img2} alt="img-avto" />
                    <p className={classNames(styles.text, 'legend')}>
                        Or do you prefer a brutal all-terrain vehicle?
                    </p>
                </div>
                <div>
                    <img className={styles.img} src={img3} alt="img-avto" />
                    <p className={classNames(styles.text, 'legend')}>
                        We can make your every wish come true into a four-wheeled dream!
                    </p>
                </div>
                <div>
                    <img className={styles.img} src={img4} alt="img-avto" />
                    <p className={classNames(styles.texts, 'legend')}>- Royal SUV -</p>
                </div>
            </Carousel>
        </section>
    );
}

export default CarouselMainSection;
