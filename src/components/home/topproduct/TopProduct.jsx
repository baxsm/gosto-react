import React, { useState } from 'react'
import { topProducts } from '../../assets/data/data'
import Heading from '../../common/Heading'
import ProductItem from '../products/ProductItem'

function TopProduct() {

    const [data, setData] = useState(topProducts)
    const allCategories = ["all", ... new Set(data.map((item) => item.category))]
    const [category, setCategory] = useState(allCategories)

    const handleFilter = (cat) => {
        if (cat === "all") {
            setData(topProducts)
            return
        }
        const newItem = topProducts.filter((item) => item.category === cat)
        setData(newItem)
    }

    return (
        <section className="topproduct">
            <div className="container">
                <div className="head">
                    <Heading
                        title="Top Selling Products"
                        desc="Meet our newbies! The latest templates uploaded to the marketplace."
                    />
                    <div className="category">
                        {
                            category.map((item, index) => {
                                return (
                                    <button
                                        className='button'
                                        onClick={() => handleFilter(item)}
                                        key={index}
                                    >
                                        {item}
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
                <ProductItem data={data} />
            </div>
        </section>
    )
}

export default TopProduct