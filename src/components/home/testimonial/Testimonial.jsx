import React from 'react'
import Heading from '../../common/Heading'
import { customer } from '../../assets/data/data'
import { ImQuotesRight } from 'react-icons/im'

function Testimonial() {
    return (
        <section className="customer">
            <Heading
                title='Choose The Plans'
                desc='Meet our newbies! The latest templates uploaded to the marketplace'
            />
            <div className="content">
                {
                    customer.map((item, index) => {
                        return (
                            <div className="card" key={index}>
                                <button>
                                    <ImQuotesRight />
                                </button>
                                <p>"{item.desc}"</p>
                                <h3>{item.name}</h3>
                                <span>{item.post}</span>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Testimonial