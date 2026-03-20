import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../content/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([])

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller))
        setBestSeller(bestProduct.slice(0, 5))
    }, [])

    // gpt ke hisaab se upar wale khali array me 'products' rehna chahiye taki jab bhi products me updation ho re-render ho jaye.

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {   
                    bestSeller.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default BestSeller
