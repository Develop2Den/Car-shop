import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import { useSelector } from 'react-redux';

function AppLayout() {
    const modal = useSelector((state) => state.modal);
    return (
        <>
            {modal && <Modal />}
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default AppLayout;
