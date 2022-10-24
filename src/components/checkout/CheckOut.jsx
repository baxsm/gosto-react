import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements} from '@stripe/react-stripe-js'
import CheckOutForm from './CheckOutForm';

const KEY = process.env.REACT_APP_PUBLISHER_KEY;
const stripePromise = loadStripe(KEY)

export default function CheckOut() {
    return (
        <Elements stripe={stripePromise}>
            <CheckOutForm />
        </Elements>
    );
}