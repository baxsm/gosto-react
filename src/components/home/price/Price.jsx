import React from 'react'
import { price } from '../../assets/data/data'
import Heading from '../../common/Heading'

function Price() {
  return (
    <div className="price">
        <Heading 
        title='Choose The Plans'
        desc='Meet our newbies! The latest templates uploaded to the marketplace'
        />
        <div className="content">
            {
                price.map((item,index) => {
                    return (
                        <div className="box" key={index}>
                            <h3>{item.name}</h3>
                            <h1>
                                <span>$</span>
                                {item.price}
                                <label>/user per month</label>
                            </h1>
                            <p>{item.desc}</p>
                            <button className='button'>GET STARTED</button>
                            <ul>
                                {item.list.map((list, x) => {
                                    return (
                                        <li key={x}>
                                            <i>{list.icon}</i>
                                            <i>{list.para}</i>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Price