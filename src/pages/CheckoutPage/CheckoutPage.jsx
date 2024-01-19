import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from './CheckoutPage.module.scss';
import Button from '../../components/Button';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../../store/productsSlice/productsSlice';
import Modal from '../../components/Modal';
import { showModal } from '../../store/modalSlice/modalSlice';
import EmptyList from '../Sections/EmptyListSection';

const CheckoutPage = () => {
    const products = useSelector((state) => state.products.data);
    const modal = useSelector((state) => state.modal);
    const dispatch = useDispatch();
    const [empty, setEmpty] = useState(false);
    const phoneRegex = /^\+?3?8?(0[5-9][0-9]\d{7})$/;
    const NAME_REGEX = /^[a-z ,.'-]+$/i;
    const EMAIL_REGEX =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const initialValues = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .matches(NAME_REGEX, 'No valid symbols')
            .min(2, 'First Name must be between 2 and 25 characters')
            .max(25, 'First Name must be between 2 and 25 characters')
            .required('Required'),
        lastName: Yup.string()
            .matches(NAME_REGEX, 'No valid symbols')
            .min(2, 'Last Name must be between 2 and 25 characters')
            .max(25, 'Last Name must be between 2 and 25 characters')
            .required('Required'),
        phone: Yup.string().matches(phoneRegex, 'No valid phone number').required('Required'),
        email: Yup.string().matches(EMAIL_REGEX, 'No valid email address').required('Required'),
        password: Yup.string().required('Required'),
    });

    const clearData = () => {
        const data = products.map((elem) => {
            if (elem.cart.inCart === true) {
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
        dispatch(addProducts(data));
    };

    const handleSubmit = (values, actions) => {
        actions.resetForm();
        actions.setSubmitting(true);
        setTimeout(() => {
            actions.setSubmitting(false);
        }, 2000);
        clearData();
        dispatch(showModal(true));
        setEmpty(true);
    };

    return (
        <main className={styles.mainSection}>
            {modal && (
                <Modal textModal="Your order has been placed, wait for a call from the manager!" />
            )}
            {empty ? (
                <EmptyList />
            ) : (
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    {({ isSubmitting }) => {
                        return (
                            <div className={styles.main}>
                                <h3 className={styles.title}>Order form</h3>
                                <Form className={styles.form}>
                                    <Field
                                        type="text"
                                        name="firstName"
                                        placeholder="First name"
                                        label="First name"
                                        component={CustomInput}
                                    />
                                    <Field
                                        type="text"
                                        name="lastName"
                                        placeholder="Last name"
                                        label="Last name"
                                        component={CustomInput}
                                    />
                                    <Field
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone"
                                        label="Phone"
                                        component={CustomInput}
                                    />
                                    <Field
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        label="Email"
                                        component={CustomInput}
                                    />
                                    <Field
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        label="Password"
                                        component={CustomInput}
                                    />
                                    <Button
                                        type="submit"
                                        text="Submit"
                                        className={styles.btnCheck}
                                        disabled={isSubmitting}
                                    />
                                </Form>
                            </div>
                        );
                    }}
                </Formik>
            )}
        </main>
    );
};

export default CheckoutPage;
