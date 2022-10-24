import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineHeart } from 'react-icons/ai'
import { FiSearch, FiShoppingBag } from "react-icons/fi"
import { useDispatch } from 'react-redux'
import {ADD} from '../../../controller/action'

function ProductItem({ data }) {

    const [openImage, setOpenImage] = useState(false)
    const [img, setImg] = useState("")

    const onOpenImage = (src) => {
        setImg(src)
        setOpenImage(true)
    }

    const dispatch = useDispatch()

    const addToCart = (item) => {
        dispatch(ADD(item))
    }

    return (
        <>
            <div className="product_items">
                {
                    data.map((item, index) => {
                        return (
                            <div className="box" key={index}>
                                <div className="img">
                                    <img src={item.cover} alt="" />
                                    <div className="overlay">
                                        <button 
                                        className='button'
                                        onClick={() => addToCart(item)}
                                        >
                                            <FiShoppingBag />
                                        </button>
                                        <button className='button'>
                                            <AiOutlineHeart />
                                        </button>
                                        <button className='button' onClick={() => onOpenImage(item.cover)}>
                                            <FiSearch />
                                        </button>
                                    </div>
                                </div>
                                <div className="details">
                                    <h3>{item.title}</h3>
                                    <p>{item.author}</p>
                                    <h4>Price : ${item.price}</h4>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={openImage ? "modelOpen" : "modelClose"}>
                <div className="onClickImage">
                    <img src={img} alt="" />
                    <button className="button" onClick={() => setOpenImage(false)}>
                        <AiOutlineClose />
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProductItem