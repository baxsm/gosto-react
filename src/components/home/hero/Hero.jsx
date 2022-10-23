import React from 'react'
import { BiSearch } from 'react-icons/bi'

function Hero() {
    return (
        <section className='hero'>
            <div className="container">
                <h1>
                    <label>Over <span>6,500</span> Curated Designs</label>
                    <br />
                    <label>Resources, <span>Graphic & Website</span> Templates</label>
                </h1>
                <p>High-quality Design Themes for personal or commercial use contains 6k+ items in 100 categories.</p>
                <div className="search">
                    <span>All Categories</span>
                    <hr />
                    <input type="text" placeholder='Search Products ...' />
                    <button>
                        <BiSearch className='searchIcon heIcon' />
                    </button>
                </div>
                <p>Examples: Mockup, PSD, Theme Design, Image...</p>
            </div>
        </section>
    )
}

export default Hero