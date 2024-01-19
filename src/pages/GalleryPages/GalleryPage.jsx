import React, { useEffect, useState } from 'react';
import styles from './Gallery.module.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../../store/productsSlice/productsSlice';

const GalleryPage = () => {
    const products = useSelector((state) => state.products.data);
    const dispatch = useDispatch();
    const [isLoad, setIsLoad] = useState(false);

    useEffect(() => {
        if (products.length === 0) {
            axios.get('./Car-shop/product.json').then(({ data }) => dispatch(addProducts(data)));
        }
        setIsLoad(true);
    }, [dispatch, products]);

    if (!isLoad) {
        return (
            <div className={styles.load}>
                d
                <Oval
                    height={130}
                    width={130}
                    color="#373F41"
                    wrapperStyle={{}}
                    wrapperClass={styles.loader}
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#4fa94d"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                />
            </div>
        );
    }

    return (
        <section className={styles.gallery}>
            <h2 className={styles.bigTitle}>Today we have for sale: </h2>
            <ul className={styles.list}>
                {products.map(({ id, url, name }) => {
                    return (
                        <li className={styles.listItem} key={id}>
                            <Link to={`/gallery/${id}`} target="_top">
                                <div className={styles.overlay}>
                                    <p className={styles.overlayText}>More information</p>
                                </div>
                                <img className={styles.img} src={url} alt="img-car" />
                                <div className={styles.inform}>
                                    <p className={styles.title}>{name}</p>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default GalleryPage;
