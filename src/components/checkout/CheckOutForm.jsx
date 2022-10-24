import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}

export default function CheckOutForm() {

    const getData = useSelector((state) => state.cartReducer.carts)
    const [totalPrice, setTotalPrice] = useState(0)
    const calculateTotalPrice = () => {
        let price = 0;
        getData.map((item) => {
            price += parseFloat(item.price) * item.qty;
        })
        setTotalPrice(price)
    }
    useEffect(() => {
        calculateTotalPrice()
    }, [calculateTotalPrice])

    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post("localhost//payment", {
                    amount: totalPrice,
                    id
                })

                if (response.data.success) {
                    console.log("Successful Payment")
                    setSuccess(true)
                }
            } catch (err) {
                console.log(err)
            }
        }
        else {
            console.log(error.message)
        }
    }

    return (
        <>
            {
                !success
                    ?
                    <form onSubmit={handleSubmit}>
                        <fieldset className="FormGroup">
                            <div className="FormRow">
                                <CardElement options={CARD_OPTIONS} />
                            </div>
                        </fieldset>
                        <button>Pay</button>
                    </form>
                    :
                    <div>
                        <h2>Payment Made!</h2>
                    </div>
            }
        </>
    )
}
