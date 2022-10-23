import React from 'react'
import { hero } from '../../assets/data/data'

function Card() {
  return (
    <section className='cards'>
        {
            hero.map((item, index) => {
                return (
                    <div className="card" key={index}>
                        <div className="left">
                            <img src={item.cover} alt="" />
                        </div>
                        <div className="right">
                            <h4>{item.name}</h4>
                            <p>{item.items} items</p>
                        </div>
                    </div>
                )
            })
        }
    </section>
  )
}

export default Card