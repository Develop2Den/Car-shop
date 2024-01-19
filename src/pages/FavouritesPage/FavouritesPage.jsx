import React, { useState, useEffect } from 'react';
import styles from './FavouritesPage.module.scss';
import { Oval } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import { addProducts } from '../../store/productsSlice/productsSlice';
import { showModal } from '../../store/modalSlice/modalSlice';
import Modal from '../../components/Modal';

function FavouritesPage() {
    const products = useSelector((state) => state.products.data);
    const modal = useSelector((state) => state.modal);
    const dispatch = useDispatch();
    const [favouritesList, setFavouritesList] = useState([]);
    const [favouritesClicked, setFavouritesClicked] = useState(false);
    const [isLoaded, setIsLoaded] = useState(true);

    useEffect(() => {
        const newArr = products.filter((elem) => {
            if (elem.isFavorite === true) {
                return elem;
            }
            return setFavouritesList(elem);
        });
        setFavouritesList(newArr);
        setIsLoaded(false);
    }, [products]);

    const addToCart = (id) => {
        dispatch(showModal(id));
    };

    if (isLoaded) {
        return (
            <main>
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
            </main>
        );
    }
    return (
        <main>
            {modal && <Modal textModal="Move this item to cart?" id={modal} />}
            <div className={styles.main}>
                {favouritesList.length > 0 ? (
                    <ul className={styles.list}>
                        {favouritesList.map(({ id, url, name, price, isFavorite }) => {
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
                            return (
                                <li className={styles.listItem} key={id}>
                                    <Link to={`/gallery/${id}`} target="_top">
                                        <img className={styles.img} src={url} alt="new-img" />
                                    </Link>
                                    <div className={styles.inform}>
                                        <p className={styles.title}>{name}</p>
                                        <p className={styles.price}>{price}$</p>
                                    </div>

                                    <div className={styles.btnsBlock}>
                                        <Button
                                            className={styles.btnHeart}
                                            handleClick={
                                                favouritesClicked
                                                    ? removeFromFavourites
                                                    : addToFavourites
                                            }
                                            text={
                                                <Icon
                                                    type={
                                                        isFavorite ? 'bagFavIconFill' : 'bagFavIcon'
                                                    }
                                                />
                                            }
                                        />
                                        <Button
                                            text="Add to Basket"
                                            className={styles.btn}
                                            handleClick={() => addToCart(id)}
                                        />
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <>
                        <p className={styles.empty}>Add some products to favourites</p>
                        <Link to={`/gallery`} target="_top">
                            <p className={styles.text}>
                                <span className={styles.textSpan}>&#10094;&#10094;&#10094;</span>{' '}
                                Return to gallery
                            </p>
                        </Link>
                    </>
                )}
            </div>
        </main>
    );
}

export default FavouritesPage;
