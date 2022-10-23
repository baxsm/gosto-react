import React from 'react'
import { banner } from '../../assets/data/data'

function Banner() {
    return (
        <section className="banner">
            <div className="posts">
                {
                    banner.map((item, index) => {
                        return (
                            <div className="post" key={index}>
                                <div className="content">
                                    <div className="img">
                                        <img src={item.cover} alt="" />
                                    </div>
                                    <div className="text">
                                        <h2>{item.title}</h2>
                                        <h2>{item.title2}</h2>
                                        <p>{item.desc}</p>
                                        <button className='button'>
                                            SHOP NOW
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Banner