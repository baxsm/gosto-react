import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { unstable_HistoryRouter, useNavigate, useParams } from 'react-router-dom'
import { MdStarRate } from 'react-icons/md'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { ADD, DELETE, REMOVE_ITM } from '../../../controller/action'

function Details() {

    const [data, setData] = useState([])
    const getData = useSelector((state) => state.cartReducer.carts)

    const { id } = useParams()

    const compare = () => {
        let compareData = getData.filter((e) => {
            return e.id == id
        })
        setData(compareData)
    }

    useEffect(() => {
        compare()
    }, [id])

    const dispath = useDispatch()
    const increment = (item) => {
        dispath(ADD(item))
    }

    const decrement = (item) => {
        dispath(REMOVE_ITM(item))
    }

    const navigate = useNavigate()

    const deleteItem = (id) => {
        dispath(DELETE(id))
        navigate("/")
    }

    return (
        <article>
            <section className="details">
                <h2 className="details_title">Product Details</h2>
                {
                    data.map((item, index) => {
                        return (
                            <div className="details_content" key={index}>
                                <div className="details_content_img">
                                    <img src={item.cover} alt="" />
                                </div>
                                <div className="details_content_detail">
                                    <h1>{item.title}</h1>
                                    <div className="rating">
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <label>(1 customer review)</label>
                                    </div>
                                    <h3>${item.price * item.qty}</h3>
                                    <p>{item.author}</p>
                                    <div className="qty">
                                        <div className="count">
                                            <button onClick={() => increment(item)}>
                                                <AiOutlinePlus />
                                            </button>
                                            <span>{item.qty}</span>
                                            <button onClick={item.qty <= 1 ? () => deleteItem(item.id) : () => decrement(item)}>
                                                <AiOutlineMinus />
                                            </button>
                                        </div>
                                        <button className="button">Add To Cart</button>
                                    </div>
                                    <div className="desc">
                                        <h4>PRODUCT DESCRIPTION</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vitae, doloribus alias eligendi, perferendis aut commodi molestiae dolores mollitia fugit odit quas praesentium nostrum deserunt tempore soluta! Culpa, vero rerum.</p>
                                        <h4>PRODUCT DETAILS</h4>
                                        <ul>
                                            <li><p>Lorem ipsum : Sit amet consectetur adipisicing elit</p></li>
                                            <li><p>Lorem ipsum : Sit amet consectetur adipisicing elit</p></li>
                                            <li><p>Lorem ipsum : Sit amet consectetur adipisicing elit</p></li>
                                            <li><p>Lorem ipsum : Sit amet consectetur adipisicing elit</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </article>
    )
}

export default Details