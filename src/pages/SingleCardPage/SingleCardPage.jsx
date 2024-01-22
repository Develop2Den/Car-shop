import React, { useState } from 'react';
import styles from './SingleCardPage.module.scss';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../../store/productsSlice/productsSlice';
import Modal from '../../components/Modal';
import { showModal } from '../../store/modalSlice/modalSlice';
import { Link } from 'react-router-dom';

const SingleCardPage = ({ product }) => {
    const { name, price, url, article, color, id, isFavorite } = product;
    const products = useSelector((state) => state.products.data);
    const modal = useSelector((state) => state.modal);
    const dispatch = useDispatch();
    const [favouritesClicked, setFavouritesClicked] = useState(false);

    const toggleFavorites = () => {
        const updatedProducts = products.map((elem) => {
            if (elem.id === id) {
                return { ...elem, isFavorite: !elem.isFavorite };
            }
            return elem;
        });

        setFavouritesClicked(!favouritesClicked);
        dispatch(addProducts(updatedProducts));
    };

    const addToFavourites = async () => {
        toggleFavorites();
    };

    const removeFromFavourites = () => {
        toggleFavorites();
    };

    const addToCart = () => {
        dispatch(showModal(id));
    };

    return (
        <>
            {modal && <Modal textModal="Move this item to cart?" id={modal} />}
            <section className={styles.card}>
                <div className={styles.imageBox}>
                    <img src={url} alt="avto-foto" className={styles.image} title={name} />
                </div>
                <div className={styles.infoBox}>
                    <div>
                        <h2 className={styles.title}>
                            <span className={styles.infoName}>Model: </span>
                            {name}
                        </h2>
                        <span className={styles.priceInfo}>
                            <span className={styles.infoName}>Price: </span>
                            {price} $
                        </span>
                        <p className={styles.colorInfo}>
                            <span className={styles.infoName}>Color: </span>
                            {color}
                        </p>
                    </div>
                    <p className={styles.artInfo}>
                        <span className={styles.infoName}>article: </span>
                        {article}
                    </p>
                </div>
                <div className={styles.btnsBlock}>
                    <Button
                        className={styles.btnHeart}
                        handleClick={favouritesClicked ? removeFromFavourites : addToFavourites}
                        text={<Icon type={isFavorite ? 'bagFavIconFill' : 'bagFavIcon'} />}
                    />
                   <Link className={styles.btn} target="_blank" to="https://google.com">
                        <Button text="More details" className={styles.btnColorText}/>
                    </Link>
                    <Button text="Add to Basket" className={styles.btn} handleClick={addToCart} />
                </div>
            </section>
        </>
    );
};

export default SingleCardPage;
