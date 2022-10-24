import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo.svg'
import cartImg from '../assets/images/cart.png'
import { BiSearch } from "react-icons/bi"
import { BsBagCheck, BsFlagCheck } from "react-icons/bs"
import { RiUser3Line } from "react-icons/ri"
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose, AiOutlineDelete } from "react-icons/ai"
import { navlist } from '../assets/data/data'
import { Link } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux'
import { DELETE } from '../../controller/action'

function Header() {

    window.addEventListener('scroll', function () {
        const header = this.document.querySelector(".header");
        header.classList.toggle("active", this.window.scrollY > 100);
    })

    const [mobile, setMobile] = useState(false)

    const getData = useSelector((state) => state.cartReducer.carts)

    const [cartList, setCartList] = useState(false)

    const handleClose = () => {
        setCartList(null)
    }

    const dispath = useDispatch()
    const deleteItem = (id) => {
        dispath(DELETE(id))
    }

    const [totalPrice, setTotalPrice] = useState(0)

    const calculateTotalPrice = () => {
        let price = 0;
        getData.map((item, index) => {
            price += parseFloat(item.price) * item.qty;
        })
        setTotalPrice(price)
    }

    useEffect(() => {
        calculateTotalPrice()   
    }, [calculateTotalPrice])

    return (
        <header className='header'>
            <div className="container">
                <nav>
                    <div className="toggle">
                        <button onClick={() => setMobile(!mobile)}>
                            {
                                mobile
                                    ? <AiOutlineClose className='close heIcon' />
                                    : <AiOutlineMenu className='open heIcon' />
                            }
                        </button>
                    </div>
                    <div className="left">
                        <img src={logo} alt="" />
                    </div>
                    <div className="center">
                        <ul
                            className={mobile ? "mobile-nav" : "menu"}
                        >
                            {
                                navlist.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link to={item.path}>{item.text}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </nav>
                <div className="right">
                    <div className="right_search">
                        <input type="text" placeholder='Search Products ...' />
                        <BiSearch className='searchIcon heIcon' />
                    </div>
                    <div className="right_user">
                        <RiUser3Line className='userIcon heIcon' />
                        <AiOutlineHeart className='userIcon heIcon' />
                    </div>
                    <div className="right_card">
                        <button className='button' onClick={() => setCartList(!cartList)}>
                            <BsBagCheck className='shop heIcon' />
                            MY CART ({getData.length})
                        </button>
                        <div
                            className={cartList ? 'showCart' : 'hideCart'}
                        >
                            {
                                getData.length
                                    ? (
                                        <section className="details">
                                            <div className="details_title">
                                                <h3>Photo</h3>
                                                <p>Product Name</p>
                                            </div>
                                            {
                                                getData.map((e, index) => (
                                                    <div className="details_content" key={index}>
                                                        <div className="details_content_img">
                                                            <Link to={`/cart/${e.id}`} onClick={handleClose}>
                                                                <img src={e.cover} alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="details_content_detail">
                                                            <div className="details_content_detail_price">
                                                                <p>{e.title.slice(0,20)} ...</p>
                                                                <p>Price : ${e.price}</p>
                                                                <p>Quantity : {e.qty}</p>
                                                            </div>
                                                        </div>
                                                        <div className="details_content_detail_icon">
                                                            <i onClick={() => deleteItem(e.id)}>
                                                                <AiOutlineDelete />
                                                            </i>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            <div className="details_total">
                                                <h4>Total : ${totalPrice}</h4>
                                            </div>

                                        </section>
                                    )
                                    : (
                                        <div className="empty">
                                            <p>Your cart is empty</p>
                                            <img src={cartImg} alt="" />
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header

const mapStateToProps = (state) => {
    return {
        amount: state.amount
    }
}
connect(mapStateToProps)(Header)