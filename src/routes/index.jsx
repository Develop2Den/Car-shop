import React from 'react';
import { createHashRouter, Navigate } from 'react-router-dom';
import AppLayout from './AppLayout';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import MainPage from '../pages/MainPage';
import CartPage from '../pages/CartPage';
import FavouritesPage from '../pages/FavouritesPage';
import ContactsPage from '../pages/ContactsPage';
import AboutPage from '../pages/AboutPage';
import EmptyList from '../pages/Sections/EmptyListSection';
import GalleryPage from '../pages/GalleryPages';
import CheckoutPage from '../pages/CheckoutPage';
import DetailsPage from '../pages/DetailsPage';
import CustomerServicePage from '../pages/CustomerServicePage';

export const router = createHashRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Navigate to="shop" replace />,
            },
            {
                path: 'shop',
                element: <MainPage />,
            },
            {
                path: 'gallery',
                element: <GalleryPage />,
            },
            {
                path: 'gallery/:id',
                element: <DetailsPage />,
            },
            {
                path: 'checkout',
                element: <CheckoutPage />,
            },
            {
                path: 'cart',
                element: <CartPage />,
            },
            {
                path: 'favorites',
                element: <FavouritesPage />,
            },
            {
                path: 'contact',
                element: <ContactsPage />,
            },
            {
                path: 'about',
                element: <AboutPage />,
            },
            {
                path: 'service',
                element: <CustomerServicePage />,
            },
            {
                path: 'success',
                element: <EmptyList />,
            },
        ],
    },
]);
