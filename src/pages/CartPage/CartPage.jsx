import React, { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import styles from './CartPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import { showModal } from '../../store/modalSlice/modalSlice';
import { addToCart, removeFromCart } from '../../store/productsSlice/productsSlice';

function CartPage() {
    const products = useSelector((state) => state.products.data);
    const dispatch = useDispatch();
    const modal = useSelector((state) => state.modal);
    const [cartStorage, setCartStorage] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);

    useEffect(() => {
        const newArr = products.filter((elem) => elem.cart.inCart === true);
        setCartStorage(newArr);
        setIsLoaded(false);
    }, [products]);

    function increaseToCart(id) {
        const cartUpdate = cartStorage.map((elem) => {
            if (elem.id === id) {
                dispatch(addToCart(id));
            }
            return elem;
        });
        setCartStorage(cartUpdate);
    }

    function decreaseToCart(id) {
        const cartUpdate = cartStorage.map((elem) => {
            if (elem.id === id && elem.cart.count > 1) {
                dispatch(removeFromCart(id));
            }
            return elem;
        });
        setCartStorage(cartUpdate);
    }

    function totalPrice() {
        let count = 0;
        cartStorage.forEach((elem) => {
            count += elem.price * elem.cart.count;
        });
        return count;
    }

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
            {modal && <Modal textModal="Are you sure you want to remove the product?" id={modal} />}
            <div className={styles.main}>
                {cartStorage.length > 0 ? (
                    <>
                        <ul className={styles.list}>
                            {cartStorage.map(({ id, url, name, price, cart }) => {
                                return (
                                    <li className={styles.listItem} key={id}>
                                        <div className={styles.imgContainer}>
                                            <Link to={`/gallery/${id}`} target="_top">
                                                <img
                                                    className={styles.img}
                                                    src={url}
                                                    alt="new-img"
                                                    title={name}
                                                />
                                            </Link>
                                        </div>
                                        <div className={styles.inform}>
                                            <p className={styles.title}>{name}</p>
                                            <p className={styles.price}>{price}$</p>
                                        </div>
                                        <div className={styles.btnsBlock}>
                                            <div
                                                className={styles.iconBox}
                                                onClick={() => decreaseToCart(id)}
                                                disabled={cart.count === 1}
                                            >
                                                <Icon type="minus" />
                                            </div>
                                            <div className={styles.iconBox}>{cart.count}</div>
                                            <div
                                                className={styles.iconBox}
                                                onClick={() => increaseToCart(id)}
                                            >
                                                <Icon type="plus" />
                                            </div>
                                        </div>
                                        <Button
                                            text={<Icon type="delete" />}
                                            className={styles.btn}
                                            handleClick={() => dispatch(showModal(id))}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                        <div className={styles.inform}>
                            <span className={styles.totalPrice}>
                                {' '}
                                Total: <span className={styles.sum}>{totalPrice()}</span> $
                            </span>
                            <Link to={'/checkout'}>
                                <Button text="Checkout" className={styles.btnCheck} />
                            </Link>
                        </div>
                    </>
                ) : (
                    <>
                        <p className={styles.empty}>Add some products to Basket</p>
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

export default CartPage;
