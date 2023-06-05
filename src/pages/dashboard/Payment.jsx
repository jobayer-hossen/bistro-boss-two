import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../hooks/useCart';

const stripePromise = loadStripe(import.meta.env.VITE_payment_pk);

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div className='w-full'>
           <SectionTitle subHeading="please process" heading="Payment"></SectionTitle>
           <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price} ></CheckoutForm>
            </Elements>
        </div>
        
    );
};

export default Payment;