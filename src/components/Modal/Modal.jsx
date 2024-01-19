import React from 'react';
import styles from './Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from '../../store/modalSlice/modalSlice';
import Button from '../Button';
import { addProducts } from '../../store/productsSlice/productsSlice';
import PropTypes from 'prop-types';

const Modal = ({ textModal, id }) => {
    const products = useSelector((state) => state.products.data);
    const dispatch = useDispatch();

    const addToBasket = () => {
        const addProduct = products.map((elem) => {
            if (elem.id === id) {
                return {
                    ...elem,
                    cart: {
                        ...elem.cart,
                        inCart: true,
                        count: 1,
                    },
                };
            }

            return elem;
        });
        dispatch(addProducts(addProduct));
        dispatch(hideModal());
    };

    const removeToBasket = () => {
        const addProduct = products.map((elem) => {
            if (elem.id === id) {
                return {
                    ...elem,
                    cart: {
                        ...elem.cart,
                        inCart: false,
                        count: 0,
                    },
                };
            }
            return elem;
        });
        dispatch(addProducts(addProduct));
        dispatch(hideModal());
    };

    return (
        <div onClick={() => dispatch(hideModal())} className={styles.modal}>
            <div onClick={(event) => event.stopPropagation()} className={styles.modalContent}>
                <div className={styles.modalBody}>
                    <p className={styles.bodyText}>{textModal}</p>
                </div>
                <div className={styles.bodyButtons}>
                    <Button
                        text="Ok"
                        className={styles.btn}
                        handleClick={() =>
                            textModal === 'Move this item to cart?'
                                ? addToBasket()
                                : removeToBasket()
                        }
                    />
                    <Button
                        text="Cancel"
                        handleClick={() => dispatch(hideModal())}
                        className={styles.btn}
                    />
                </div>
            </div>
        </div>
    );
};

export default Modal;

Modal.propTypes = {
    textModal: PropTypes.string,
    id: PropTypes.number,
};

Modal.defaultProps = {
    textModal: '',
    id: 0,
};
