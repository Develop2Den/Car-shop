import React, { useEffect, useState } from 'react';
import styles from './DetailsPage.module.scss';
import SingleCardPage from '../SingleCardPage';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DetailsPage = () => {
    const products = useSelector((state) => state.products.data);
    const [product, setProduct] = useState({});
    const params = useParams();
    const productId = +params.id;
    const navigate = useNavigate();

    useEffect(() => {
        if (products.length > 0) {
            const filteredProduct = products.find((elem) => elem.id === productId);

            if (filteredProduct) {
                setProduct(filteredProduct);
            } else {
                navigate('/');
            }
        }
    }, [productId, products, navigate]);

    return (
        <div className={styles.main}>
            <SingleCardPage product={product} />
        </div>
    );
};

export default DetailsPage;
